// Renders the DTH app screens from the Figma-extracted component bundle
// (design-reference/design/components/dth) and saves them as images in
// public/assets/dth/. Needs Playwright + Chromium (not a project dependency):
//
//   node scripts/export-dth-screens.mjs
//
// Fonts come from the @fontsource/montserrat dev dependency.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { execSync } from 'node:child_process';
import * as esbuild from 'esbuild';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const DTH = path.join(ROOT, 'design-reference/design/components/dth');
const OUT = path.join(ROOT, 'public/assets/dth');
const SCREENS = ['BOX', 'BASEPACKS', 'LANGUAGEPACKS', 'OTT', 'ALACARTE', 'VAS', 'ReviewOrder'];

const require = createRequire(import.meta.url);
let playwright;
try {
  playwright = require('playwright');
} catch {
  playwright = require(path.join(execSync('npm root -g').toString().trim(), 'playwright'));
}

const tmp = fs.mkdtempSync(path.join(DTH, '.render-'));
try {
  const bundle = fs.readFileSync(path.join(DTH, 'Components.bundle.js'), 'utf8');
  fs.writeFileSync(path.join(tmp, 'components.js'), `import React from 'react';\n${bundle}`);
  fs.writeFileSync(
    path.join(tmp, 'entry.js'),
    `import React from 'react';
import { createRoot } from 'react-dom/client';
import './components.js';
const name = new URLSearchParams(location.search).get('c');
createRoot(document.getElementById('root')).render(React.createElement(window[name]));`,
  );
  await esbuild.build({
    entryPoints: [path.join(tmp, 'entry.js')],
    bundle: true,
    outfile: path.join(tmp, 'out.js'),
    nodePaths: [path.join(ROOT, 'node_modules')],
    define: { 'process.env.NODE_ENV': '"production"' },
    logLevel: 'error',
  });
  fs.writeFileSync(
    path.join(tmp, 'index.html'),
    `<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="../fig-assets.css">
${[400, 500, 600, 700, 800].map((w) => `<link rel="stylesheet" href="file://${path.join(ROOT, 'node_modules/@fontsource/montserrat', w + '.css')}">`).join('')}
<style>html,body{margin:0;background:#fff}#root{width:375px;height:812px;overflow:hidden}</style>
</head><body><div id="root"></div><script src="out.js"></script></body></html>`,
  );

  fs.mkdirSync(OUT, { recursive: true });
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage({ viewport: { width: 375, height: 812 }, deviceScaleFactor: 2 });
  for (const name of SCREENS) {
    await page.goto('file://' + path.join(tmp, 'index.html') + '?c=' + name);
    await page.waitForLoadState('networkidle');
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(400);
    await page.locator('#root').screenshot({ path: path.join(OUT, name + '.png') });
    console.log('saved', name);
  }
  await browser.close();
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
