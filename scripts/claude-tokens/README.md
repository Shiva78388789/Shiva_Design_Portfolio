# Live "Tokens Used" chip

The chip on the home page shows how many tokens Claude Code has used on Shiva's
computer, and rolls to the new number whenever it changes.

How it works:

1. Claude Code logs every reply's token usage under `~/.claude/projects/`.
2. A Claude Code **Stop hook** runs `sync-tokens.mjs` in the background after every
   reply. The script adds up replies it hasn't counted yet and keeps a running total
   in `~/.claude/portfolio-tokens/`. The total survives Claude Code deleting old logs,
   and each reply is counted once even when it's logged twice.
3. The script writes `{"total": …, "updatedAt": …}` to `tokens.json` in a public
   GitHub gist.
4. The site (`src/lib/tokens.ts`) reads that gist when the page loads and every
   30 seconds while the tab is visible. `src/lib/odometer.ts` animates the change.

Only Claude Code on this computer is counted, not claude.ai chats or cloud sessions.
The total counts every token Claude processed: input, output, cache writes and,
if you chose so at setup, cache reads. Counting starts from the logs Claude Code
still has (it keeps about 30 days).

## One-time setup (Mac or Linux, Node 18+)

1. Create a GitHub token: https://github.com/settings/tokens/new?scopes=gist&description=Portfolio%20tokens
   (only the **gist** box ticked) and copy it.
2. In Terminal run:

   ```bash
   curl -fsSL https://raw.githubusercontent.com/Shiva78388789/Shiva_Design_Portfolio/main/scripts/claude-tokens/sync-tokens.mjs -o /tmp/sync-tokens.mjs && node /tmp/sync-tokens.mjs --setup
   ```

   Paste the token and answer the cache-reads question. The script creates the gist,
   copies itself to `~/.claude/portfolio-tokens/`, adds the hook to
   `~/.claude/settings.json` (backing it up first) and prints the gist link.
3. Put the gist as `owner/id` in `TOKENS_GIST` in `src/lib/tokens.ts` (or the
   `NEXT_PUBLIC_TOKENS_GIST` environment variable) and redeploy. After that the
   number updates on its own; no more deploys are needed.

Other commands: `node ~/.claude/portfolio-tokens/sync-tokens.mjs --status` prints the
total; `--force` re-uploads it. To stop, delete the Stop hook entry that mentions
`portfolio-tokens` from `~/.claude/settings.json`.
