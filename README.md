# Shiva Kumar — Design Portfolio

Personal UX portfolio, built with Next.js (App Router) + TypeScript as a static site.
It recreates the HTML design references in [`design-reference/`](design-reference/README.md).

| Route | Page |
|---|---|
| `/` | Home: hero, Work, Experience, Contact |
| `/work/engage-x/` | Engage X |
| `/work/dth-price-simplification/` | DTH Price Simplification |
| `/work/bijak-design-system/` | Bijak Web Design System |
| `/work/toffee-seller-app/` | Toffee Seller App |

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
  forms, lightbox…), ported from the prototypes' logic. Each class computes the values
  its view reads (`renderVals()`).
- `src/styles/*.css` — page stylesheets (responsive rules, keyframes, hover states).
- `src/components/` — `DockNav` (floating bottom nav), `ImageSlot`, `DthScreen`,
  and `bijak/` (the Bijak design-system components, materialised from Figma as React).
- `public/assets/` — images and the resume PDF. `public/assets/dth/` holds the DTH app
  screens exported by `scripts/export-dth-screens.mjs` (needs Playwright + Chromium).

## Content still to add

- **Project imagery:** the home-page project cards and the five Engage X UI screens were
  empty image slots in the design. Add the files to `public/assets/` and map each slot id
  in `src/content/image-slots.ts`; until then they show a placeholder frame.
- **Toffee screens** were cropped from a Behance export and are soft; replace them in
  `public/assets/toffee/` if originals exist.

## Contact form

Set `NEXT_PUBLIC_FORMSPREE_ID` to a [Formspree](https://formspree.io) form id to deliver
messages. Without it, submitting opens the visitor's mail app addressed to
kumarshiva1990@gmail.com (the prototype's behaviour).

## Deploy

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to
`main`. One-time setup: **Settings → Pages → Source: GitHub Actions**. Optionally add a
`FORMSPREE_ID` repository variable (Settings → Secrets and variables → Actions → Variables).

For hosting at a domain root (Vercel, Netlify, a custom domain), build without
`NEXT_PUBLIC_BASE_PATH`.
