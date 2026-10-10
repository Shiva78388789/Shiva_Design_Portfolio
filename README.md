# Shiva Kumar — Design Portfolio

Personal UX portfolio, built with Next.js (App Router) + TypeScript as a static site.
It recreates the HTML design references in [`design-reference/`](design-reference/README.md).

| Route | Page |
|---|---|
| `/` | Home: hero, Selected Projects, Claude Code, full-screen menu |
| `/work/engage-x/` | Engage X |
| `/work/dth-price-simplification/` | DTH Price Simplification |
| `/work/bijak-design-system/` | Bijak Web Design System |
| `/work/toffee-seller-app/` | Toffee Seller App |
| `/work/jugnu/` | Jugnu |
| `/work/akhbar-bash/` | Akhbar Bash |
| `/tools/` | Tools I use |
| `/side-hustle/` | Side Hustle |
| `/failed-startups/` | Failed Startups |

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # type-check
npm run build    # static export to out/
npm start        # serve out/
```

## How it's put together

- `src/app/` — routes and the root layout (fonts, metadata).
- `src/views/*View.tsx` — page markup. Generated once from the design references by
  `scripts/convert-dc.mjs`, which turns each `.dc.html` template into JSX with the
  same inline styles, hover rules and bindings. They're regular source files now;
  edit them directly.
- `src/pages-src/*Page.tsx` — page behaviour (state, GSAP/ScrollTrigger + Lenis motion,
  menu, lightbox…), ported from the prototypes' logic. Each class computes the values
  its view reads (`renderVals()`).
- `src/styles/*.css` — page stylesheets (responsive rules, keyframes, hover states).
  `ds.css` is the prototypes' base design-system sheet; only Engage X, DTH, Bijak and
  Toffee load it, as in the references. `base.css` holds the few global rules.
- The pages without behaviour (Tools, Side Hustle, Failed Startups) render their view
  straight from `src/app/*/page.tsx`.
- `src/components/` — `DthScreen` and `bijak/` (the Bijak design-system components,
  materialised from Figma as React).
- `public/assets/` — images and the resume PDF. `public/assets/dth/` holds the DTH app
  screens exported by `scripts/export-dth-screens.mjs` (needs Playwright + Chromium).

## Live token counter

The home page's "Tokens Used" chip shows Shiva's real Claude Code token total. Setup and
how it works: [`scripts/claude-tokens/README.md`](scripts/claude-tokens/README.md).

## Content still to add

- **Toffee screens** were cropped from a Behance export and are soft; replace them in
  `public/assets/toffee/` if originals exist.

## Deploy (Vercel)

The site is hosted on [Vercel](https://vercel.com); `vercel.json` holds the build settings.

One-time setup:
1. On Vercel, **Add New… → Project**, and import `Shiva78388789/Shiva_Design_Portfolio`
   from GitHub (install the Vercel GitHub app for the repo if asked).
2. Keep the detected settings (framework: Next.js) and click **Deploy**.
3. Optional: add a custom domain under **Settings → Domains**.

After that, every push to `main` deploys to production and every other branch or pull
request gets its own preview URL.
