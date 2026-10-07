// One-off porting tool: converts the `.dc.html` design references in
// design-reference/design into React views (src/views/*View.tsx) and
// page stylesheets (src/styles/*.css).
//
// The prototypes render a string template against a flat `renderVals()`
// object. This script turns that template into equivalent JSX that reads
// from a `v` prop, so the page logic (src/pages-src/*) can stay a plain
// React class component that produces the same values.
//
//   node scripts/convert-dc.mjs
//
// Re-running overwrites the generated views and styles.

import fs from 'node:fs';
import path from 'node:path';
import { parseFragment } from 'parse5';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SRC = path.join(ROOT, 'design-reference/design');

const PAGES = [
  { file: 'Portfolio.dc.html', name: 'Home', css: 'home' },
  { file: 'EngageX.dc.html', name: 'EngageX', css: 'engage-x' },
  { file: 'DTH Price Simplification.dc.html', name: 'Dth', css: 'dth' },
  { file: 'Bijak Web Design System.dc.html', name: 'Bijak', css: 'bijak' },
  { file: 'Toffee Seller App.dc.html', name: 'Toffee', css: 'toffee' },
  { file: 'JugnuCaseStudy.dc.html', name: 'Jugnu', css: 'jugnu' },
  { file: 'Akhbar Bash Case Study.dc.html', name: 'Akhbar', css: 'akhbar' },
];

export const ROUTES = {
  'Portfolio.dc.html': '/',
  'EngageX.dc.html': '/work/engage-x/',
  'DTH Price Simplification.dc.html': '/work/dth-price-simplification/',
  'Bijak Web Design System.dc.html': '/work/bijak-design-system/',
  'Toffee Seller App.dc.html': '/work/toffee-seller-app/',
  'JugnuCaseStudy.dc.html': '/work/jugnu/',
  'Akhbar Bash Case Study.dc.html': '/work/akhbar-bash/',
};

const EVENT_MAP = {
  onclick: 'onClick', onchange: 'onChange', oninput: 'onInput', onsubmit: 'onSubmit',
  onkeydown: 'onKeyDown', onkeyup: 'onKeyUp', onmousedown: 'onMouseDown', onmouseup: 'onMouseUp',
  onmouseenter: 'onMouseEnter', onmouseleave: 'onMouseLeave', onfocus: 'onFocus', onblur: 'onBlur',
  onmousemove: 'onMouseMove', onmouseover: 'onMouseOver', onmouseout: 'onMouseOut',
  onpointerdown: 'onPointerDown', onpointerup: 'onPointerUp', onpointermove: 'onPointerMove',
  onpointerenter: 'onPointerEnter', onpointerleave: 'onPointerLeave',
};

const ATTR_MAP = {
  class: 'className', for: 'htmlFor', tabindex: 'tabIndex', readonly: 'readOnly',
  maxlength: 'maxLength', novalidate: 'noValidate', autocomplete: 'autoComplete',
  allowfullscreen: 'allowFullScreen', frameborder: 'frameBorder', crossorigin: 'crossOrigin',
  srcset: 'srcSet', referrerpolicy: 'referrerPolicy', playsinline: 'playsInline',
  autoplay: 'autoPlay', 'xlink:href': 'xlinkHref', spellcheck: 'spellCheck',
};

const BOOLEAN_ATTRS = new Set(['required', 'noValidate', 'allowFullScreen', 'hidden', 'disabled',
  'checked', 'autoPlay', 'muted', 'loop', 'playsInline', 'readOnly', 'multiple', 'controls']);

const NUMERIC_ATTRS = new Set(['rows', 'cols', 'maxLength', 'tabIndex', 'colSpan', 'rowSpan']);

const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

// ---------- CSS helpers ----------

function splitDecls(css) {
  const out = [];
  let depth = 0, quote = '', start = 0;
  for (let i = 0; i < css.length; i++) {
    const c = css[i];
    if (quote) { if (c === quote) quote = ''; continue; }
    if (c === '"' || c === "'") quote = c;
    else if (c === '(') depth++;
    else if (c === ')') depth--;
    else if (c === ';' && depth === 0) { out.push(css.slice(start, i)); start = i + 1; }
  }
  out.push(css.slice(start));
  return out.map((d) => d.trim()).filter(Boolean);
}

function cssToObj(css) {
  // later declarations win, as in CSS
  const o = new Map();
  for (const decl of splitDecls(css)) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    const key = prop.startsWith('--') ? prop : camel(prop);
    o.delete(key);
    o.set(key, decl.slice(i + 1).trim());
  }
  return [...o];
}

const importantify = (css) =>
  splitDecls(css).map((d) => (/!important\s*$/.test(d) ? d : d + ' !important')).join(';');

// Asset / page URLs become base-path aware expressions.
function urlExpr(raw) {
  let s = raw.replace(/^\.\//, '');
  if (ROUTES[s]) return `href(${JSON.stringify(ROUTES[s])})`;
  const hashIdx = s.indexOf('#');
  if (hashIdx > 0 && ROUTES[s.slice(0, hashIdx)]) {
    return `href(${JSON.stringify(ROUTES[s.slice(0, hashIdx)] + s.slice(hashIdx))})`;
  }
  if (s.startsWith('assets/')) return `asset(${JSON.stringify('/' + s)})`;
  return null;
}

// Rewrites url(assets/..) inside a CSS value into a template-literal fragment.
function cssValueExpr(val, interp) {
  // val may contain ${...} interpolations already (when interp is true)
  let out = val.replace(/url\((['"]?)(\.\/)?(assets\/[^'")]+)\1\)/g, (_, q, __, p) => `url(\${asset("/${p}")})`);
  if (out === val && !interp) return JSON.stringify(val);
  return '`' + out.replace(/`/g, '\\`') + '`';
}

// ---------- binding resolution ----------

function makeResolver(scope) {
  const resolve = (expr) => {
    expr = expr.trim();
    if (expr.startsWith('(') && expr.endsWith(')')) return `(${resolve(expr.slice(1, -1))})`;
    const eq = expr.match(/^(.+?)\s*(===|!==|==|!=)\s*(.+)$/);
    if (eq) return `(${resolve(eq[1])} ${eq[2]} ${resolve(eq[3])})`;
    if (expr.startsWith('!')) return `!${resolve(expr.slice(1))}`;
    if (/^(true|false|null|undefined)$/.test(expr)) return expr;
    if (/^-?\d+(\.\d+)?$/.test(expr)) return expr;
    if (/^(['"]).*\1$/.test(expr)) return JSON.stringify(expr.slice(1, -1));
    const parts = expr.split('.');
    let head = parts.shift();
    let base;
    if (head === '$index') base = scope.index || '0';
    else if (scope.vars.has(head)) base = head;
    else base = `v.${head}`;
    for (const p of parts) base += /^\d+$/.test(p) ? `?.[${p}]` : `?.${p}`;
    return base;
  };
  return resolve;
}

const WHOLE = /^\s*\{\{([\s\S]+?)\}\}\s*$/;

// Returns a JS expression for an attribute value.
function attrExpr(raw, resolve) {
  const whole = raw.match(WHOLE);
  if (whole) return resolve(whole[1]);
  if (raw.includes('{{')) {
    const parts = raw.split(/\{\{([\s\S]+?)\}\}/g);
    return '`' + parts.map((s, i) => (i & 1 ? '${' + resolve(s) + ' ?? ""}' : s.replace(/[`\\]/g, '\\$&').replace(/\$\{/g, '\\${'))).join('') + '`';
  }
  return null; // literal
}

// ---------- JSX emitter ----------

// Text as JSX. Whitespace runs that contain a line break render as a single
// space in HTML, so they are normalised; everything else is kept verbatim.
function jsxText(txt) {
  const t = txt.replace(/[ \t]*\n\s*/g, ' ');
  if (!t.trim()) return '{" "}';
  const lead = /^\s/.test(t), trail = /\s$/.test(t);
  const core = t.trim();
  const body = /[{}<>&]|\s\s/.test(core) ? `{${JSON.stringify(core)}}` : core;
  return (lead ? '{" "}' : '') + body + (trail ? '{" "}' : '');
}

function convertPage(page) {
  const src = fs.readFileSync(path.join(SRC, page.file), 'utf8');
  const open = /<x-dc(?:\s[^>]*)?>/.exec(src);
  const close = src.lastIndexOf('</x-dc>');
  let tpl = src.slice(open.index + open[0].length, close);

  // Pull helmet out: we only keep its inline <style> blocks.
  const helmet = /<helmet>([\s\S]*?)<\/helmet>/.exec(tpl);
  let css = '';
  if (helmet) {
    for (const m of helmet[1].matchAll(/<style>([\s\S]*?)<\/style>/g)) css += m[1] + '\n';
    tpl = tpl.replace(helmet[0], '');
  }

  const pseudo = [];
  const pseudoCache = new Map();
  const pseudoClass = (kind, decl) => {
    const k = kind + '|' + decl;
    if (pseudoCache.has(k)) return pseudoCache.get(k);
    const cls = `${page.css}-${kind}-${pseudoCache.size}`;
    pseudo.push(`.${cls}:${kind}{${importantify(decl)}}`);
    pseudoCache.set(k, cls);
    return cls;
  };

  const imports = new Set();
  const frag = parseFragment(tpl);
  let depth = 0;
  const ind = () => '  '.repeat(depth + 2);

  function emitChildren(nodes, scope) {
    const out = [];
    for (const n of nodes) {
      const s = emit(n, scope);
      if (s != null) out.push(s);
    }
    return out;
  }

  function emitText(txt, scope) {
    if (!txt.includes('{{')) {
      if (!txt.trim() && !txt.includes(' ')) return null;
      return `${ind()}${jsxText(txt)}`;
    }
    const resolve = makeResolver(scope);
    const parts = txt.split(/\{\{([\s\S]+?)\}\}/g);
    return parts
      .map((p, i) => (i & 1 ? `${ind()}{${resolve(p)}}` : p ? `${ind()}${jsxText(p)}` : null))
      .filter(Boolean)
      .join('\n');
  }

  function emitStyle(raw, resolve) {
    if (raw.includes('{{')) {
      const parts = raw.split(/\{\{([\s\S]+?)\}\}/g);
      const lit = parts.map((s, i) => (i & 1 ? '${' + resolve(s) + ' ?? ""}' : s.replace(/[`\\]/g, '\\$&'))).join('');
      const withAssets = lit.replace(/url\((['"]?)(\.\/)?(assets\/[^'")]+)\1\)/g, (_, q, __, p) => `url(\${asset("/${p}")})`);
      return `{css(\`${withAssets}\`)}`;
    }
    const entries = cssToObj(raw).map(([k, val]) => `${/^[A-Za-z_$][\w$]*$/.test(k) ? k : JSON.stringify(k)}: ${cssValueExpr(val, false)}`);
    return `{{ ${entries.join(', ')} }}`;
  }

  function emitAttrs(el, scope, kind) {
    const resolve = makeResolver(scope);
    const props = [];
    const classes = [];
    let classExpr = null;
    for (const { name, value } of el.attrs) {
      if (name.startsWith('hint-') || name === 'sc-name') continue;
      if (name.startsWith('style-')) { classes.push(pseudoClass(name.slice(6), value)); continue; }
      if (kind === 'x-import' && (name === 'component-from-global-scope' || name === 'from')) continue;
      let key = name;
      if (kind === 'dom') {
        if (ATTR_MAP[key]) key = ATTR_MAP[key];
        else if (key.startsWith('on')) key = EVENT_MAP[key] || 'on' + key[2].toUpperCase() + key.slice(3);
        else if (key.includes('-') && !key.startsWith('aria-') && !key.startsWith('data-')) key = camel(key);
        else if (key.includes(':')) key = camel(key.replace(':', '-'));
      } else if (key.includes('-') && !key.startsWith('aria-') && !key.startsWith('data-')) {
        key = camel(key);
      }
      if (key === 'style') { props.push(`style=${emitStyle(value, resolve)}`); continue; }
      const expr = attrExpr(value, resolve);
      if (key === 'className') { classExpr = expr ?? JSON.stringify(value); continue; }
      if (expr != null) { props.push(`${key}={${expr}}`); continue; }
      if (BOOLEAN_ATTRS.has(key) && value === '') { props.push(key); continue; }
      if (NUMERIC_ATTRS.has(key) && /^\d+$/.test(value)) { props.push(`${key}={${value}}`); continue; }
      if ((key === 'href' || key === 'src' || key === 'poster' || key === 'data-open') && urlExpr(value)) { props.push(`${key}={${urlExpr(value)}}`); continue; }
      props.push(`${key}=${JSON.stringify(value)}`);
    }
    if (classes.length || classExpr) {
      const all = [classExpr, ...classes.map((c) => JSON.stringify(c))].filter(Boolean);
      props.push(all.length === 1 ? `className=${all[0].startsWith('"') ? all[0] : '{' + all[0] + '}'}` : `className={[${all.join(', ')}].join(' ')}`);
    }
    return props;
  }

  function tagOpen(tag, props, selfClose) {
    if (!props.length) return `<${tag}${selfClose ? ' />' : '>'}`;
    const one = `<${tag} ${props.join(' ')}${selfClose ? ' />' : '>'}`;
    if (one.length < 160) return one;
    return `<${tag}\n${props.map((p) => ind() + '  ' + p).join('\n')}\n${ind()}${selfClose ? '/>' : '>'}`;
  }

  function element(tag, props, kids) {
    if (!kids.length) return `${ind()}${tagOpen(tag, props, true)}`;
    return `${ind()}${tagOpen(tag, props, false)}\n${kids.join('\n')}\n${ind()}</${tag}>`;
  }

  function emit(node, scope) {
    if (node.nodeName === '#text') return emitText(node.value, scope);
    if (node.nodeName === '#comment') return null;
    const tag = node.tagName;
    if (!tag) return null;
    const kids = () => {
      depth++;
      const k = emitChildren((node.content || node).childNodes, scope);
      depth--;
      return k;
    };
    const attr = (n) => node.attrs.find((a) => a.name === n)?.value;

    if (tag === 'sc-for') {
      const resolve = makeResolver(scope);
      const as = attr('as') || 'item';
      const idx = 'i' + (scope.depth || 0);
      const inner = { vars: new Set([...scope.vars, as]), index: idx, depth: (scope.depth || 0) + 1 };
      depth += 2;
      const body = emitChildren(node.childNodes, inner);
      depth -= 2;
      const listExpr = resolve(attr('list').match(WHOLE)[1]);
      return `${ind()}{((${listExpr} ?? []) as any[]).map((${as}: any, ${idx}: number) => (\n${ind()}  <Fragment key={${idx}}>\n${body.join('\n')}\n${ind()}  </Fragment>\n${ind()}))}`;
    }
    if (tag === 'sc-if') {
      const resolve = makeResolver(scope);
      depth++;
      const body = emitChildren(node.childNodes, scope);
      depth--;
      return `${ind()}{${resolve(attr('value').match(WHOLE)[1])} ? (\n${ind()}  <>\n${body.join('\n')}\n${ind()}  </>\n${ind()}) : null}`;
    }
    if (tag === 'image-slot') {
      imports.add('ImageSlot');
      return element('ImageSlot', emitAttrs(node, scope, 'x-import'), []);
    }
    if (tag === 'x-import') {
      const comp = attr('component-from-global-scope');
      const from = attr('from') || '';
      const props = emitAttrs(node, scope, 'x-import');
      if (comp === 'dock-nav') { imports.add('DockNav'); return element('DockNav', props, []); }
      if (comp === 'site-ruler') { imports.add('SiteRuler'); return element('SiteRuler', [], []); }
      if (from.includes('components/dth')) {
        imports.add('DthScreen');
        const nameExpr = attrExpr(comp, makeResolver(scope));
        return element('DthScreen', [`name=${nameExpr ? '{' + nameExpr + '}' : JSON.stringify(comp)}`, ...props], []);
      }
      if (from.includes('components/bijak')) {
        imports.add('Bijak');
        return element(`Bijak.${comp}`, props, kids());
      }
      throw new Error('Unknown x-import ' + comp);
    }
    return element(tag, emitAttrs(node, scope, 'dom'), kids());
  }

  depth = 1;
  const body = emitChildren(frag.childNodes, { vars: new Set() });

  const importLines = [
    `import { Fragment } from 'react';`,
    `import { asset, href, css } from '@/lib/dc';`,
  ];
  if (imports.has('DockNav')) importLines.push(`import DockNav from '@/components/DockNav';`);
  if (imports.has('SiteRuler')) importLines.push(`import SiteRuler from '@/components/SiteRuler';`);
  if (imports.has('ImageSlot')) importLines.push(`import ImageSlot from '@/components/ImageSlot';`);
  if (imports.has('DthScreen')) importLines.push(`import DthScreen from '@/components/DthScreen';`);
  if (imports.has('Bijak')) importLines.push(`import * as Bijak from '@/components/bijak';`);

  const view = `// Ported from design-reference/design/${page.file} by scripts/convert-dc.mjs.
/* eslint-disable */
import type { Ref } from 'react';
${importLines.join('\n')}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ${page.name}View({ v }: { v: any }) {
  return (
    <>
${body.join('\n')}
    </>
  );
}
`;
  fs.mkdirSync(path.join(ROOT, 'src/views'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, `src/views/${page.name}View.tsx`), view.replace("import type { Ref } from 'react';\n", ''));

  fs.mkdirSync(path.join(ROOT, 'src/styles'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, `src/styles/${page.css}.css`), cleanCss(css) + '\n/* style-hover / style-focus / style-active rules */\n' + pseudo.join('\n') + '\n');
}

// Drops the prototype's viewport-simulation rules (html[data-vp=..]) and makes
// [style*="prop: value"] selectors also match React's server-rendered style
// attribute, which has no space after the colon.
function cleanCss(css) {
  const out = [];
  let i = 0;
  // naive top-level rule splitter that keeps @media blocks together
  const rules = [];
  let depth = 0, start = 0;
  for (; i < css.length; i++) {
    if (css[i] === '{') depth++;
    else if (css[i] === '}') { depth--; if (depth === 0) { rules.push(css.slice(start, i + 1)); start = i + 1; } }
  }
  for (let r of rules) {
    r = r.trim();
    if (!r) continue;
    if (/^html\[data-vp/.test(r.replace(/\/\*[\s\S]*?\*\//g, '').trim())) continue;
    if (/data-m="vpwrap"/.test(r) && !r.startsWith('@')) {
      // keep the base container rule only
      if (!/^\[data-m="vpwrap"\]\{/.test(r)) continue;
    }
    out.push(r);
  }
  return out
    .join('\n')
    .replace(/\[style\*="([a-z-]+): ([^"]+)"\]/g, ':is([style*="$1: $2"],[style*="$1:$2"])')
    .replace(/url\((['"]?)(\.\/)?(assets\/[^'")]+)\1\)/g, 'url(/$3)');
}

for (const p of PAGES) {
  convertPage(p);
  console.log('converted', p.file);
}
