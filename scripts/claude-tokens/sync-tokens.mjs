#!/usr/bin/env node
// Keeps the "Tokens Used" chip on the portfolio home page in sync with the
// tokens Claude Code uses on this computer.
//
// Claude Code writes every reply's token usage to its session logs under
// ~/.claude/projects/. This script adds up the tokens of replies it hasn't
// counted yet, keeps a running total (so it survives Claude Code deleting old
// logs), and publishes it to a public GitHub gist the website reads.
//
//   node sync-tokens.mjs --setup   one-time: create the gist, install the hook
//   node sync-tokens.mjs           count new usage and publish (run by the hook)
//   node sync-tokens.mjs --status  print the current total without publishing
//
// Needs Node 18+ and no packages. See scripts/claude-tokens/README.md.

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import readline from 'node:readline';
import { fileURLToPath } from 'node:url';

const CLAUDE_DIR = process.env.CLAUDE_CONFIG_DIR || path.join(os.homedir(), '.claude');
const PROJECTS_DIR = path.join(CLAUDE_DIR, 'projects');
const HOME_DIR = path.join(CLAUDE_DIR, 'portfolio-tokens');
const CONFIG_FILE = path.join(HOME_DIR, 'config.json');
const STATE_FILE = path.join(HOME_DIR, 'state.json');
const LOCK_DIR = path.join(HOME_DIR, 'lock');
const INSTALLED_SCRIPT = path.join(HOME_DIR, 'sync-tokens.mjs');
const SETTINGS_FILE = path.join(CLAUDE_DIR, 'settings.json');
const GIST_FILE = 'tokens.json';
const HOOK_MARK = 'portfolio-tokens/sync-tokens.mjs';

const args = new Set(process.argv.slice(2));
const quiet = args.has('--quiet');
const log = (...a) => { if (!quiet) console.log(...a); };

const readJson = (file, fallback) => {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return fallback; }
};
const writeJson = (file, data) => {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const tmp = file + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2));
  fs.renameSync(tmp, file);
};

// ---------- counting ----------

function* jsonlFiles(dir) {
  let entries = [];
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* jsonlFiles(p);
    else if (e.isFile() && e.name.endsWith('.jsonl')) yield p;
  }
}

// Tokens for one reply: everything the model read and wrote, including cache
// writes and reads (the same total Claude Code's usage tools report).
function replyTokens(u, includeCacheReads) {
  const n = (x) => (Number.isFinite(x) ? x : 0);
  return n(u.input_tokens) + n(u.output_tokens) + n(u.cache_creation_input_tokens)
    + (includeCacheReads ? n(u.cache_read_input_tokens) : 0);
}

function count(state, includeCacheReads) {
  const seen = new Set(state.seen);
  let added = 0, replies = 0;
  for (const file of jsonlFiles(PROJECTS_DIR)) {
    let size;
    try { size = fs.statSync(file).size; } catch { continue; }
    let offset = state.offsets[file] || 0;
    if (size < offset) offset = 0; // file was rewritten; `seen` prevents double counting
    if (size === offset) continue;
    const fd = fs.openSync(file, 'r');
    const buf = Buffer.alloc(size - offset);
    fs.readSync(fd, buf, 0, buf.length, offset);
    fs.closeSync(fd);
    const text = buf.toString('utf8');
    const end = text.lastIndexOf('\n'); // leave a half-written last line for next time
    if (end < 0) continue;
    for (const line of text.slice(0, end).split('\n')) {
      if (!line.includes('"usage"')) continue;
      let o;
      try { o = JSON.parse(line); } catch { continue; }
      const m = o && o.message;
      if (!m || typeof m !== 'object' || !m.usage || !m.id) continue;
      // Claude Code logs one line per content block, each repeating the usage.
      const key = m.id + '|' + (o.requestId || '');
      if (seen.has(key)) continue;
      seen.add(key);
      added += replyTokens(m.usage, includeCacheReads);
      replies++;
    }
    state.offsets[file] = offset + Buffer.byteLength(text.slice(0, end + 1), 'utf8');
  }
  // Forget offsets of logs Claude Code has deleted; the total keeps their tokens.
  for (const f of Object.keys(state.offsets)) if (!fs.existsSync(f)) delete state.offsets[f];
  state.seen = [...seen];
  state.total += added;
  return { added, replies };
}

// ---------- GitHub gist ----------

async function github(token, method, url, body) {
  const res = await fetch('https://api.github.com' + url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'portfolio-tokens',
      ...(body ? { 'Content-Type': 'application/json' } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) throw new Error(`GitHub ${method} ${url} failed: ${res.status} ${await res.text()}`);
  return res.json();
}

const payload = (total) => JSON.stringify({ total, updatedAt: new Date().toISOString(), source: 'claude-code' });

async function publish(config, total) {
  await github(config.token, 'PATCH', `/gists/${config.gistId}`, {
    files: { [GIST_FILE]: { content: payload(total) } },
  });
}

// ---------- lock (the hook can fire again before a run finishes) ----------

function lock() {
  try { fs.mkdirSync(LOCK_DIR); return true; } catch {}
  try {
    if (Date.now() - fs.statSync(LOCK_DIR).mtimeMs > 120_000) { // stale
      fs.rmSync(LOCK_DIR, { recursive: true, force: true });
      fs.mkdirSync(LOCK_DIR);
      return true;
    }
  } catch {}
  return false;
}
const unlock = () => fs.rmSync(LOCK_DIR, { recursive: true, force: true });

// ---------- setup ----------

function installHook() {
  const settings = readJson(SETTINGS_FILE, {});
  settings.hooks ??= {};
  settings.hooks.Stop ??= [];
  const already = JSON.stringify(settings.hooks.Stop).includes(HOOK_MARK);
  if (!already) {
    settings.hooks.Stop.push({
      hooks: [{ type: 'command', command: `node "${INSTALLED_SCRIPT}" --quiet > /dev/null 2>&1 &` }],
    });
    if (fs.existsSync(SETTINGS_FILE)) fs.copyFileSync(SETTINGS_FILE, SETTINGS_FILE + '.bak');
    writeJson(SETTINGS_FILE, settings);
  }
  return !already;
}

async function setup() {
  fs.mkdirSync(HOME_DIR, { recursive: true });
  const config = readJson(CONFIG_FILE, {});
  const rl = readline.createInterface({ input: process.stdin, terminal: false });
  const lines = rl[Symbol.asyncIterator]();
  rl.question = async (q) => { process.stdout.write(q); const r = await lines.next(); return r.done ? '' : r.value; };
  if (!config.token) {
    console.log('Paste a GitHub token with the "gist" scope');
    console.log('(create one at https://github.com/settings/tokens/new?scopes=gist&description=Portfolio%20tokens)');
    config.token = (await rl.question('Token: ')).trim();
  }
  const ans = (await rl.question('Count cache reads too? This matches Claude Code\'s own totals but makes the number much larger. [Y/n] ')).trim().toLowerCase();
  config.includeCacheReads = ans !== 'n' && ans !== 'no';
  rl.close();

  const me = await github(config.token, 'GET', '/user');
  if (!config.gistId) {
    const gist = await github(config.token, 'POST', '/gists', {
      description: 'Claude Code tokens used (shown on my portfolio)',
      public: true,
      files: { [GIST_FILE]: { content: payload(0) } },
    });
    config.gistId = gist.id;
  }
  config.owner = me.login;
  writeJson(CONFIG_FILE, config);
  fs.chmodSync(CONFIG_FILE, 0o600);

  fs.copyFileSync(fileURLToPath(import.meta.url), INSTALLED_SCRIPT);
  const added = installHook();

  // Start from scratch so the cache-reads choice applies to every reply.
  const state = { total: 0, offsets: {}, seen: [] };
  const { replies } = count(state, config.includeCacheReads);
  await publish(config, state.total);
  state.published = state.total;
  writeJson(STATE_FILE, state);

  console.log(`\nCounted ${replies} replies: ${state.total.toLocaleString('en-US')} tokens.`);
  console.log(added ? 'Installed the Claude Code hook (a backup of settings.json was saved as settings.json.bak).' : 'The Claude Code hook was already installed.');
  console.log('\nSend this link to Claude so the website reads from it:');
  console.log(`  https://gist.github.com/${config.owner}/${config.gistId}\n`);
}

// ---------- main ----------

async function main() {
  if (args.has('--setup')) return setup();
  const config = readJson(CONFIG_FILE, null);
  if (!config || !config.gistId) {
    console.error('Not set up yet. Run: node sync-tokens.mjs --setup');
    process.exit(1);
  }
  if (!lock()) return log('Another sync is running.');
  try {
    const state = readJson(STATE_FILE, { total: 0, offsets: {}, seen: [] });
    const { added, replies } = count(state, config.includeCacheReads);
    writeJson(STATE_FILE, state);
    log(`Total: ${state.total.toLocaleString('en-US')} tokens (+${added.toLocaleString('en-US')} from ${replies} new replies).`);
    if (args.has('--status')) return;
    // Publish whenever the gist is behind, so a failed upload is retried next time.
    if (state.total !== state.published || args.has('--force')) {
      await publish(config, state.total);
      state.published = state.total;
      writeJson(STATE_FILE, state);
      log('Published.');
    }
  } finally {
    unlock();
  }
}

main().catch((e) => { console.error(e.message || e); process.exit(1); });
