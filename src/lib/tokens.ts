// Where the home page reads the live "Tokens Used" total from: a public GitHub
// gist kept up to date by scripts/claude-tokens/sync-tokens.mjs on Shiva's
// computer. Format "owner/gistId"; NEXT_PUBLIC_TOKENS_GIST overrides it.
export const TOKENS_GIST = process.env.NEXT_PUBLIC_TOKENS_GIST || '';

const FILE = 'tokens.json';

/** Latest total, or null if it can't be loaded. */
export async function fetchTokenTotal(): Promise<number | null> {
  const [owner, id] = TOKENS_GIST.split('/');
  if (!owner || !id) return null;
  const parse = (j: unknown) => {
    const t = (j as { total?: unknown })?.total;
    return typeof t === 'number' && Number.isFinite(t) ? t : null;
  };
  try {
    // The query string skips GitHub's CDN cache, so new totals show up at once.
    const res = await fetch(`https://gist.githubusercontent.com/${owner}/${id}/raw/${FILE}?t=${Date.now()}`, { cache: 'no-store' });
    if (res.ok) { const t = parse(await res.json()); if (t !== null) return t; }
  } catch {}
  try {
    // Fallback: the GitHub API (60 requests an hour per visitor).
    const res = await fetch(`https://api.github.com/gists/${id}`, { cache: 'no-store' });
    if (res.ok) {
      const g = await res.json();
      return parse(JSON.parse(g.files?.[FILE]?.content ?? 'null'));
    }
  } catch {}
  return null;
}
