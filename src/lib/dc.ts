import type { CSSProperties } from 'react';

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** URL for a file in /public, prefixed with the deploy base path. */
export const asset = (p: string) => BASE_PATH + p;

/** URL for an internal page, prefixed with the deploy base path. */
export const href = (p: string) => BASE_PATH + p;

/** Parses an inline CSS declaration string into a React style object. */
export function css(text: string): CSSProperties {
  const out: Record<string, string> = {};
  let depth = 0;
  let start = 0;
  const decls: string[] = [];
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === '(') depth++;
    else if (c === ')') depth--;
    else if (c === ';' && depth === 0) {
      decls.push(text.slice(start, i));
      start = i + 1;
    }
  }
  decls.push(text.slice(start));
  for (const decl of decls) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    const value = decl.slice(i + 1).trim();
    if (!prop || !value) continue;
    out[prop.startsWith('--') ? prop : prop.replace(/-([a-z])/g, (_, ch: string) => ch.toUpperCase())] = value;
  }
  return out as CSSProperties;
}
