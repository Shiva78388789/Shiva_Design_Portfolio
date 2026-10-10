# Handoff: Shiva Kumar — Design Portfolio Website (v2)

## Package split (each part under 30 MB)
| Folder / zip | Contents | Approx. size |
|---|---|---|
| **part-1-code** | This README, all 10 page references, prototype JS, design-system CSS, Figma bundles, images for Home/Engage X/DTH/Toffee/Bijak, resume PDF | ~15 MB |
| **part-2-images** | `design/components/dth/assets/` (DTH Figma bundle images) and `design/assets/akhbar/images/` | ~20 MB |
| **part-3-video** | `design/assets/akhbar/video/` (MP4s + `posters/`) | ~23 MB |

All three share the same `design/` root. **Unzip all three into one folder so `design/` merges.** Upload to Claude Code one at a time, in order. Claude Code should read this README first; parts 2 and 3 are assets only.

## Overview
Shiva Kumar's personal UX portfolio, v2 visual direction: a minimal dark single-column site. One home page, six case studies and three secondary pages reached from a full-screen menu.

| Route (suggested) | Reference file |
|---|---|
| `/` | `design/Portfolio v2.dc.html` |
| `/work/engage-x` | `design/EngageX v2.dc.html` |
| `/work/dth-price-simplification` | `design/DTH Price Simplification v2.dc.html` |
| `/work/bijak-design-system` | `design/Bijak Web Design System v2.dc.html` |
| `/work/toffee-seller-app` | `design/Toffee Seller App v2.dc.html` |
| `/work/akhbar-bash` | `design/Akhbar Bash Case Study v2.dc.html` |
| `/work/jugnu` | `design/Jugnu Case Study v2.dc.html` |
| `/tools` | `design/Tools I Use.dc.html` |
| `/side-hustle` | `design/Side Hustle.dc.html` |
| `/failed-startups` | `design/Failed Startups.dc.html` |

Rewrite every internal `href="X.dc.html"` to these routes (e.g. `Portfolio v2.dc.html` → `/`).

**v2 vs the earlier build:** the top design ruler (`site-ruler.js`), bottom dock nav (`dock-nav.js`), dot background, sky footer with curtain reveal and the old home sections (tools showcase, experience, Let's Talk) are **not used** in v2. Do not port them.

## About the design files
Files in `design/` are **design references built in HTML**: working prototypes showing final look, copy and behaviour. They are **not production code**. They run on a prototype runtime (`support.js`, `.dc.html` format, `image-slot.js`) that must not ship.

**Task: recreate these designs in a real codebase.** None exists yet; recommended stack:
- **Next.js (App Router) + TypeScript**, static export, deployed to Vercel.
- **Tailwind CSS** or CSS Modules. References use inline styles, which port directly.
- **Motion:** GSAP + ScrollTrigger and Lenis (case studies already load these from jsDelivr: gsap@3.12.5, lenis@1.1.13).

To view a reference: `npx serve design` (after merging all 3 parts), then open any `.dc.html`.

Reading a reference file:
- `{{ x }}` holes, `<sc-for>` and `<sc-if>` bind to the `class Component` script at the bottom; `renderVals()` returns template values.
- `style-hover="…"` = the element's `:hover` styles.
- `<x-import>` mounts a JS/web component from a sibling file (DTH and Bijak Figma bundles).

## Fidelity
**High fidelity.** Colours, type, spacing, copy and motion are final. Recreate pixel-accurately on desktop and mobile web. Keep copy verbatim, including existing typos (e.g. "A personal assistant that get things done.").

## Global system (v2)
- **Font:** Montserrat 400/500/600/700 (Google Fonts) everywhere. Akhbar Bash also uses Press Start 2P. Bijak loads Roboto, Permanent Marker and Rubik for its type specimens.
- **Body:** `background:#1c1c1c; color:#f5f5f5;` antialiased, `box-sizing:border-box`. Links `#f5f5f5`, hover `#ffffff`, no underline.
- **Colours:**

  | Role | Value |
  |---|---|
  | Ground | `#1C1C1C` |
  | Card surface | `#2E2E2E` (hover `#333333`) |
  | Card image well | `#4A4A4A` |
  | Round button | bg `#2A2A2A`, border `1.5px #444`, hover bg `#353535` |
  | Pill / chip border | `1.5px #4F4F4F` (header pills), `1.5px #555` (card tags) |
  | Primary text | `#FFFFFF` / `#F5F5F5` |
  | Secondary text | `#C9C9C9` (card descriptions), `#8C8C8C` (hero body), `#E8E8E8` (pill text) |
  | Disabled | `#4A4A4A` |

  Case studies keep their own accents (sky `#4AA8E0`/`#5BC0E8`, cream note `#F6DFA6`, mint `#A8E6BF`, Toffee red `#EC5A5A`, Bijak green `#56C381`, Jugnu `#5CF2C1`, Akhbar yellow `#F7D158`). Take exact values from each file.
- **Layout:** content column `max-width:1040px; margin:0 auto`, side padding `clamp(20px,5vw,40px)`, top padding `clamp(24px,5vw,56px)`. All type sizes use `clamp()`; copy the values exactly.
- **Radius:** cards 18px (home, Tools) / 16px (Side Hustle, Failed Startups); pills and round buttons 999px / 50%; tool logo tile 12px.
- **Card grids:** `display:grid; grid-template-columns:repeat(auto-fill,minmax(min(100%,Npx),1fr)); gap:20px` with N = 400 (home), 440 (Tools), 230 (Side Hustle), 300 (Failed Startups). They reflow to 1 column on mobile on their own.
- **Card hover:** `translateY(-4px)`, `transition: transform .3s cubic-bezier(.2,.7,.2,1)`.
- **Close button (all non-home pages):** 56×56 round button, top-right of the 1040px column, white 22px X icon (1.6 stroke). Links to `/`. aria-label "Close and go back home" (case studies) / "Close" (secondary pages).
- **Reduced motion:** honour `prefers-reduced-motion` everywhere (shimmer stops, reveals disabled).

## Screens

### Home (`Portfolio v2.dc.html`)
1. **Header row** (flex, space-between):
   - Left: two pills (36px tall, 0 16px padding, 14px/500): "Version 1.1" and "Tokens Used: 123,456,766".
   - The token number is 600 weight, white, tabular-nums. It **ticks up live**: every 110ms add `1 + random(0–36)`, formatted `en-US`.
   - Right: 56px round menu button with a two-line hamburger icon (24×14, lines at y=2 and y=12).
2. **Hero** (`#top`):
   - h1 "👋 Hi, I'm Shiva": `clamp(32px,4.2vw,50px)`/1.2/600, emoji + text with 14px gap.
   - Three paragraphs: `clamp(24px,3.6vw,46px)`/1.25/500, `#8C8C8C`, gap `clamp(20px,2.6vw,32px)`, `text-wrap:pretty`.
   - Highlighted spans in white: "Airtel", "Bijak, Toffee Insurance &amp; Byo."
   - **Shimmer text** on "use AI to explore, test and ship faster without losing the craft.": `background:linear-gradient(100deg,#8c8c8c 0%,#8c8c8c 40%,#f5f5f5 50%,#8c8c8c 60%,#8c8c8c 100%)`, `background-size:250% 100%`, background-clip text, `animation: shimmer 3.2s linear infinite` (`background-position` 125% → -125%).
3. **Selected Projects** (`#work`):
   - Top padding `clamp(96px,13vw,160px)`. h2 `clamp(30px,3.8vw,46px)`/600.
   - 4 cards, each: an image well (aspect 510/250, `object-fit:cover`), then a row with a 60px circle logo and title (`clamp(20px,1.9vw,24px)`/600) + description (`clamp(15px,1.4vw,18px)`, `#C9C9C9`). Row padding `20px 20px 22px`, gap 16px.

   | Title | Description | Image / logo | Links to |
   |---|---|---|---|
   | Engage X | A unified campaign lifecycle manager | `proj-engagex.svg` / `logo-xtelify.png` | `/work/engage-x` |
   | DTH Price Simplification | Simplified DTH packs, Add Ons and VAS | `proj-dth.svg` / `logo-airtel.png` | `/work/dth-price-simplification` |
   | Bijak Web Design System | UI Foundations for Bijak on the web | `proj-bijak.svg` / `logo-bijak.png` | `/work/bijak-design-system` |
   | Toffee Seller App | Insurance App for cycle insurance | `proj-toffee.svg` / `logo-toffee.png` | `/work/toffee-seller-app` |
4. **Claude Code** (`#claude`):
   - Top padding `clamp(80px,10vw,120px)`. The title is an image: `assets/v2/claude-code-title.png`, height `clamp(34px,3.8vw,46px)`, alt "Claude Code".
   - 2 horizontal cards: tag pill (28px tall, 13px/600), title, description on the left; a square image `clamp(88px,10vw,116px)` on the right. Hover also changes bg to `#333`.
     - "Game" · Akhbar Bash · "A 16-bit game about our childhood paperboy." · `akhbar.png` → `/work/akhbar-bash`
     - "Bot" · Jugnu · "A personal assistant that get things done." · `jugnu.png` → `/work/jugnu`
5. **Full-screen menu** (`role="dialog"`, `aria-modal`):
   - Fixed, inset 0, z-index 100, bg `#1C1C1C`, scrolls internally.
   - Opens from the hamburger. Fades in with opacity + visibility over .35s. The nav list moves `translateY(24px)` → 0 over .45s `cubic-bezier(.2,.7,.2,1)`.
   - While open, lock page scroll (`html{overflow:hidden}`). Escape or the close (X) button closes it.
   - Items (`clamp(36px,4.6vw,58px)`/1.15/600, white, hover `#9A9A9A`): Tools I use → `/tools`, Side hustle → `/side-hustle`, Failed startups → `/failed-startups`.
   - Then a disabled "My thoughts" with a lock icon (`#4A4A4A`, `cursor:not-allowed`, title "Coming soon").
   - "Download Resume" pill button (48px tall, 17px/600, download icon) → `/Shiva_Kumar_Resume.pdf` with the `download` attribute.
   - Social row: 56px icons, 14px gap, hover opacity .75, open in a new tab.
     - LinkedIn → https://www.linkedin.com/in/shiva-kumar-10106b143/
     - Dribbble → https://dribbble.com/shivakumar
     - X → https://x.com/shiva_pdf
     - GitHub → https://github.com/Shiva78388789
     - Email (extra 10px left margin) → `mailto:kumarshiva1990@gmail.com`

### Tools I use (`Tools I Use.dc.html`)
- Close button, then h1 "Tools I use" (`clamp(36px,4.6vw,58px)`/600).
- 8 horizontal cards (same pattern as the Claude Code cards). The logo tile is `clamp(88px,9vw,112px)` wide, aspect 116/110, radius 12px.
- Cards (tag · name · description):
  - Design · Figma · UI design, prototyping and design systems.
  - Documentation · Notion · Research notes, planning and documentation.
  - Sprint · Jira · Sprint planning, task tracking and team collaboration.
  - Code Repository · Github · Hosting side projects and shipping code with AI.
  - Harness · Lottie Animation · Micro-interactions, animated icons and motion design.
  - Harness · Spline 3D · 3D modelling, interactions and animated characters
  - Harness · Higgsfield Media · AI video generation, motion and creative experiments
  - LLM · Claude · AI build partner for code, research and ideas.
- Logos: `assets/v2/t-*.svg|png`.

### Side Hustle (`Side Hustle.dc.html`)
- 6 vertical cards. Image well aspect 243/150, bg `#4A4A4A`; the illustration is inset `14% 20%` with `object-fit:contain`. Body padding `18px 20px 20px`, title 17px/600, description 14px.
- Cards: Book Worm (Learning, one book at a time), Gymming (Strong body, clear mind), Automation Expert (Building my digital team), Gaming (Respawn, retry, repeat), Projection Mapping (Painting with light), Djing (Mixing beats after hours).
- Images: `assets/v2/h-*.svg`.

### Failed Startups (`Failed Startups.dc.html`)
- 4 cards. Image well aspect 333/150; the illustration is inset `8% 20%`. Row: 60px circle logo (`#D9D9D9` placeholder), title 20px/600, years 15px `#C9C9C9`.
- Cards: SFED (2019 - 2020), Neon Central (2022-2023), Content Creation (2023), Big fat Bakery (2024).
- Images: `assets/v2/f-*.svg`. Logos: `assets/v2/logo-sfed.png`, `logo-neon.png`, `logo-content.png`, `logo-bakery.png` (60px circles, `object-fit:cover`).

### Case studies (Engage X, DTH, Bijak, Toffee, Akhbar Bash, Jugnu)
Each page has the v2 close button at the top right of the 1040px column. The page body is in the reference file; follow each file section by section.
- **Engage X:** hero, Problem Statement, Impact (rolling-digit odometer), Design Approach, Proto Personas, Information Architecture, UI Design (6 stacked framed screens, 8px `#4A4A4A` border, 22px radius, cream sticky labels), Illustrations (12, lightbox), Early Wins (2×2 odometer: 66%, 2X, 20%, 30 Cr). Footer link to the next project.
- **DTH Price Simplification:** header with Team/Platform/Role notes, 3 hero phones rendered from the `components/dth` Figma bundle (**export these as images for production**), Confidentiality notice, Problem Statement, Impact, Design Approach, Personas, Benchmarking, Component Exploration (V1/V2/V3/Bottom Sheet), Final Screens, Early Metrics. Next project: Engage X.
- **Bijak Web Design System:** Overview, Grid & Layouts, Spacing, Colour Palette, Typography, Components, Cursor States, Governance. Its interactive demos come from `components/bijak`; **rebuild them as real React components**. Next project: Toffee.
- **Toffee Seller App:** Overview, Our Approach, Research, then screens. Accent `#EC5A5A`. Next project: Engage X.
- **Akhbar Bash:** sections `#hero #spark #process #character #world #motion #game-design #experience #cities #brand #engineering #craft #claude #outcome #footer`.
  - Videos play only while at least 50% visible. Show the poster image instead when `prefers-reduced-motion` or Save-Data is on.
  - The page has a progress rail (desktop) and a city switcher (6 cities).
  - Host the videos on a CDN (Vercel Blob, Cloudflare R2 or Mux).
- **Jugnu:** sections `#top #overview #problem #principles #states #use-cases #learnings`, plus a 3D embed. Accent `#5CF2C1`.

Shared case-study motion:
- **Reveal:** elements rise y 36–40px → 0 with an opacity fade, power3.out over about 0.85s, triggered when they reach `top 88–90%`.
- **Smooth scroll:** Lenis (`lerp 0.1`) wired to ScrollTrigger.
- **Odometer:** each digit is a 0–9 ×2 column. It rolls to `10+d` over `1300 + (n−i)*180` ms with `cubic-bezier(0.18,1.06,0.3,1)`, staggered 90ms. It triggers once at `top 78%`.

## State
- **Home:** `menuOpen` (bool; also locks scroll; Esc closes), live token counter (interval; clear on unmount).
- **Engage X:** lightbox index.
- **Akhbar Bash:** active city, active rail section, lightbox, video visibility.
- **Bijak:** demo control states.
- No data fetching; everything is static.

## Assets
- `assets/v2/`: home project images and logos, Claude Code title, Akhbar/Jugnu thumbnails, social icons (`s-*`), tool logos (`t-*`), side-hustle (`h-*`) and startup (`f-*`) illustrations.
- `assets/engagex/`, `assets/dth/`, `assets/toffee/`: case-study imagery.
- `assets/akhbar/`: images (part 2) and video (part 3).
- `components/dth/assets/` (part 2): images for the DTH Figma bundle.
- `assets/Shiva_Kumar_Resume.pdf`: the resume download.

## Files
- `design/*.dc.html`: the 10 page references.
- `design/components/dth`, `design/components/bijak`: Figma-extracted bundles, for reference only.
- `design/_ds/`: base stylesheet loaded by the case studies.
- `design/support.js`, `design/image-slot.js`: the prototype runtime. **Do not port these.**

## Production checklist
- All asset references in the 10 pages have been checked and every file is in parts 1–3.
- Rename files containing `@` (Akhbar images, e.g. `character-rider@8x.png` → `character-rider-8x.png`) when copying to `public/`, and update the references.
- Map `.dc.html` links to the routes above; "next project" links: DTH → Engage X, Bijak → Toffee, Toffee → Engage X.
- Resume: serve `assets/Shiva_Kumar_Resume.pdf` at `/Shiva_Kumar_Resume.pdf`.
- SEO: per-page `<title>`/description, Open Graph image, favicon, `sitemap.xml`, `robots.txt`.
- Performance: convert large PNGs to WebP/AVIF via `next/image`, lazy-load below-the-fold media, self-host Montserrat via `next/font`.
- Accessibility: keyboard-accessible menu with focus trap, visible focus rings, alt text as given in the references.
- Deploy: Vercel, custom domain, analytics optional.

## Suggested Claude Code prompt
> Unzip part-1, part-2 and part-3 into one folder. Read `README.md` and the files in `design/`. Scaffold a Next.js + TypeScript + Tailwind static site with the ten routes listed. Build shared components: the round close button, card variants, pill tag and the full-screen menu. Recreate every page pixel-accurately for desktop and mobile, including the hero shimmer, the live token counter, the GSAP/Lenis reveals and the odometer counters. Honour `prefers-reduced-motion`. Copy assets into `public/` (videos to a CDN), add basic SEO metadata, then deploy to Vercel production.
