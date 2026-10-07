# Handoff: Shiva Kumar — Design Portfolio Website

## How this package is split (each part < 30 MB)
| Zip | Contents | Approx. size |
|---|---|---|
| **part-1-code** | This README, all 7 page references, JS components, design-system CSS, Figma bundles, and the images for Home, Engage X, DTH, Toffee, Tools, plus the resume PDF | ~19 MB |
| **part-2-images** | `design/components/dth/assets/` (images used by the DTH Figma bundle) and `design/assets/akhbar/images/` | ~20 MB |
| **part-3-video** | `design/assets/akhbar/video/` (6 MP4s + `posters/`) | ~23 MB |

Every zip has the same `design/` root. **Unzip all three into the same folder**, letting them merge, before you start. Upload them to Claude Code one at a time, in order. Claude Code should read this README first, then use parts 2 and 3 only as assets.

## Overview
Shiva Kumar's personal UX portfolio: a home page plus six case-study pages. All pages share these elements:
- Dark ground `#1C1C1C`, plain with no pattern. The old dot-matrix background has been removed everywhere.
- A white **design ruler** fixed to the top of every page.
- Yellow "sticky note" eyebrows.
- Section titles framed with corner handles.
- Scroll-driven motion.
- A floating bottom dock nav.

Every page works on desktop and mobile web.

| Route (suggested) | Reference file |
|---|---|
| `/` | `design/Portfolio.dc.html` |
| `/work/engage-x` | `design/EngageX.dc.html` |
| `/work/dth-price-simplification` | `design/DTH Price Simplification.dc.html` |
| `/work/bijak-design-system` | `design/Bijak Web Design System.dc.html` |
| `/work/toffee-seller-app` | `design/Toffee Seller App.dc.html` |
| `/work/jugnu` | `design/JugnuCaseStudy.dc.html` |
| `/work/akhbar-bash` | `design/Akhbar Bash Case Study.dc.html` |

Rewrite every internal `href="X.dc.html"` to these routes, and change `HOME` in `dock-nav.js` to `/`.

## About the design files
The files in `design/` are **design references built in HTML**. They are working prototypes that show the final look, copy and behaviour, and they are **not production code**. They run on a small prototype runtime (`support.js` and the `.dc.html` format), which must not ship.

**Your task is to recreate these designs in a real codebase.** None exists yet, so this is the recommended stack:
- **Next.js (App Router) + TypeScript**, as a static export deployed to Vercel.
- **Tailwind CSS** or CSS Modules. The references use inline styles, which port directly.
- **Motion:** GSAP + ScrollTrigger (the references already use them) and Lenis for smooth scroll. Use the Web Animations API for the rolling-digit counters.

To view a reference: `npx serve design`, then open any `.dc.html` file.

How a reference file reads:
- `{{ x }}` holes and `<sc-for>`/`<sc-if>` blocks are bound to the `class Component` script at the bottom of each file.
- `renderVals()` returns the values the template uses.
- `<x-import>` mounts a JS/web component from a sibling file.

## Fidelity
**High fidelity.** Colours, type, spacing, copy and motion are final. Recreate them pixel-accurately and keep all copy verbatim, including the existing typos.

## Global system
- **Font:**
  - Montserrat 300–800 (Google Fonts) is used everywhere.
  - Akhbar Bash also uses Press Start 2P, for its numbers.
  - The Bijak page loads Roboto, Permanent Marker and Rubik for its type specimens.
- **Colours:**

  | Role | Value |
  |---|---|
  | Ground | `#1C1C1C` |
  | Text | `#FFFFFF` / `#F5F5F5` |
  | Secondary text | `#D6D6D6`, `#CFCFCF`, `#9A9A9A` |
  | Rule | `#3A3A3A` |
  | Dashed card border | `2px dashed #6A6A6A` |
  | Phone and frame border | `#0F0F0F` / `#4A4A4A` |

- **Accents and sticky notes:**

  | Role | Background | Text |
  |---|---|---|
  | Sky (title frame) | `#4AA8E0` / `#5BC0E8` | |
  | Footer | `#63C4EC` | |
  | Cream note | `#F6DFA6` | `#3D3010`, or `#1D3B1A` on Engage X screen labels |
  | Mint note | `#A8E6BF` | `#15361F` |
  | Blue note | `#7FD3F7` | `#12303D` |
  | Notice / warning band | `#F4C542` | `#2A220A` |
  | Step circles | `#4FAE62` | |

- **Framed section title:**
  - A 1.5px `#4AA8E0` border around the h2, which is 62px/1.16/500 on desktop and 36–38px on mobile.
  - Four 10×10 corner squares with a 1.5px sky border and `#1C1C1C` fill, offset −5px.
  - Animation: the frame scales in (expo.out, 0.7s), then the handles pop (back.out(3)), then the text fades up.
- **Sticky note:** rotated −4° to +8°. On scroll it drops in from y −40 with an extra −14° rotation (back.out(1.8), 0.8s).
- **Radius:** 0. Exceptions are the circles (step markers, persona photos), the dock and the Engage X screen frames (22px desktop, 12px mobile).
- **Layout:** content column 840–1080px max, side padding 20px. The mobile breakpoint is 860–900px.
- **Reduced motion:** honour `prefers-reduced-motion` everywhere.

### Top ruler (all pages) — `design/site-ruler.js`
- A fixed bar, 24px tall, white, at `z-index:800`. It is followed by a 24px spacer so page content starts below it.
- Ticks: `repeating-linear-gradient(to right,#c8c8c8 0 1px,transparent 1px 10px)`, 5px tall along the bottom edge.
- Labels 0, 100, 200 … 1400: 8px/10px, `#7a7a7a`, placed at `6 + i*100` px inside a centred container with a 1440px max width.
- **Mouse marker:** a 1px `#0d99ff` line, 10px tall, plus a `#0d99ff` pill label showing `x − 6` (8px/600, white). It follows the pointer. Labels within 22px of the marker hide.
- The home page has its own inline copy of the ruler (desktop and mobile variants). A single shared React `<Ruler/>` should replace both.

## Screens

### Home (`Portfolio.dc.html`)
The sections, in order: hero, work cards, Claude Code band, tools showcase, experience, then the **footer**.

**The "Let's Talk" form is gone.** The footer replaces it:
- Sky `#63C4EC` background.
- **Curtain-lift reveal:** the dark page above it has bottom radii and a shadow, and lifts off the footer as you scroll down.
  - Implementation: CSS `animation-timeline: view()`, with sticky positioning as the fallback.
  - Do **not** drive it with scroll JS, which causes jitter.
- **Contents:**
  - Nav links: Home, About, Tools, Work, Experience.
  - Contact info.
  - Location, with a live India-time (IST) clock.
  - Social links, rolling-text hover, opening in a new tab:
    - LinkedIn → https://www.linkedin.com/in/shiva-kumar-10106b143/
    - Behance → https://www.behance.net/kumarshiva6b36
    - Dribbble → https://dribbble.com/shivakumar
  - A large "SHIVA KUMAR" wordmark with staggered letters (45ms each).
  - Back-to-top.

### Engage X (`EngageX.dc.html`)
The sections, in order: hero, Problem Statement, Impact, Design Approach, Personas, Information Architecture, UI Design, Illustrations, Early Wins.

The "AI Prototype" section has been **removed**.

**Impact:** Business and UX columns with a dashed divider. The numbers use a **rolling-digit odometer**:
- Each digit is a 0–9 ×2 column, masked top and bottom.
- Each column animates to `10+d` over `1300 + (n−di)*180` ms with `cubic-bezier(0.18,1.06,0.3,1)`, blurring 1.2px at 35%.
- The digits are staggered by 90ms. The sign fades in.
- An empty prefix must still render a zero-width space so the baseline stays aligned.
- It triggers once at `top 78%`.

**UI Design:** 6 platform screens **stacked vertically**:
- Screens, in order: Dashboard, Channel Selection, Campaign Creation, Channel Onboarding, Media Library, Scheduler.
- Images: `assets/engagex/ui-1…6-*.png`, each 2076px wide (2x).
- **Frame:** 8px `#4A4A4A` border, 22px radius, 140px gap between screens.
- **Label:** a cream sticky note overlapping the top-left at −26px/−40px. Montserrat 22px/700, text `#1D3B1A`, rotated about −3°, with a soft shadow.
- **Scroll animation:** the frame rises 70px from 0.96 scale (power3.out, 1s), then the note drops in.
- **Mobile:** 4px border, 12px radius, 15px note.

**Early Wins:** a 2×2 grid, centred, 58px/500 numbers with labels below, using the same odometer.

| Number | Label |
|---|---|
| 66% | Reduction in campaign setup time |
| 2X | Better CTR with new channels |
| 20% | Reduction in marketing spends |
| 30 Cr | Revenue generated |

### DTH Price Simplification (`DTH Price Simplification.dc.html`)
This page was **rebuilt to match Figma**. The old Assumptions, Research, Card Exploration, scrolling Final Design and Feedback Rounds sections are gone.

The sections, in order:
1. **Header:** "DTH Price Simplification" (56px/700) and its subtitle on the left. Three notes on the right: Team (mint), Platform (cream), Role (blue).
2. **Hero phones:** three phone frames.
   - Layout: 230 / 270 (centre, sky outline) / 230 wide.
   - The frames render the live `BOX`, `BASEPACKS` and `ReviewOrder` Figma components from `components/dth/`.
   - **For production, export these as images.**
3. **Confidentiality Notice:** a yellow band.
4. **Problem Statement:** body text, What/When/Why cards (`#7FD3F7`), and the TRAI Guidelines band. There is no Goal section.
5. **Impact:** Business and UX columns with odometer numbers.
   - Business: −20%, +9%, +15%, −6%.
   - UX: +80%, 3 min, −25%, 8.
6. **Design Approach:** 3 steps (Research / Design / Evaluate). Each has a green circle, a connector line and a checklist.
7. **Personas:** 2 dashed cards with 120px circular photos (`assets/dth/persona-1/2.png`).
8. **Benchmarking:**
   - Left: a 2×3 grid of competitor screenshots (`bench-1…6.png`).
   - Right: four cream notes (Logos, Size, Grouping, Flexibility and control) and two mint "Frame" cards (FREEDOM, EASE).
9. **Component Exploration:** green "Version" notes, each above a 3-column row of card images:
   - Version 1: `v1-1…5`, in columns of 2 + 2 + 1.
   - Version 2: `v2-1…3`.
   - Version 3: `v3-1…3`.
   - Bottom Sheet: `bs-1…3`.
10. **Final Screens:** 3 phones, 330×715, showing the same live components at 0.88 scale. Below 1080px they become a scroll-snap row.
11. **Early Metrics:** a 2×2 odometer grid.

    | Number | Label |
    |---|---|
    | −12% | Pricing and billing-related care calls |
    | +4% | Pack upgrade conversion |
    | +7% | Long term recharge adoption |
    | 4% | Churn within 60 days of recharge |

12. Next project card (Engage X) and "← Back to portfolio".

**Mobile:**
- Everything stacks to 1 column.
- The side hero phones are hidden.
- Benchmark notes form a 2-column grid, with the Frame cards full width.
- The component exploration column is 420px max.

### Bijak, Toffee, Jugnu, Akhbar Bash
These pages are unchanged apart from the global changes (ruler added, dot background removed).
- **Bijak:** its interactive demos are rendered from `components/bijak/`. Rebuild them as real React components.
- **Jugnu:** the sections that had image figures have been removed: directions, shape, finish, expressions, icons, spec, spline-states and name. The page has no image placeholders left; the 3D embed and the text sections remain.
- **Akhbar Bash:**
  - Videos play only while at least 50% visible, and show their poster when `prefers-reduced-motion` or Save-Data is on.
  - The page has a progress rail (desktop), a city switcher, and a sticky **PLAY THE GAME** bar on mobile.
  - For production, host the videos on a CDN (Vercel Blob, Cloudflare R2 or Mux).

## Shared interactions
- **Reveal:** y 36–40 → 0 with opacity, power3.out over about 0.85s, triggered at `top 88–90%`.
- **Smooth scroll:** Lenis (`lerp 0.1`) wired to ScrollTrigger.
- **Dock nav (`dock-nav.js`):**
  - A glass pill fixed at the bottom centre, with Work, Experience and Contact.
  - A springy active pill marks the current item.
  - On case-study pages its links go to `/#section`.

## State
- **Home:** viewport width (desktop or mobile tree), clock time.
- **Engage X:** illustration lightbox index.
- **Akhbar Bash:** active city, active rail section, sticky bar visibility, lightbox.
- **Bijak:** demo control states.

## Assets
- `assets/home/`, `assets/tools/`: home page imagery and tool logos.
- `assets/engagex/`: laptop hero, personas, illustrations (`ill/`), and UI screens (`ui-*.png`).
- `assets/dth/`: personas, benchmarks and component cards. These were cropped at 2x from the Figma export. Replace them with original exports if available.
- `assets/toffee/`: Toffee screens.
- `assets/akhbar/`: images and video (in parts 2 and 3).
- `assets/Shiva_Kumar_Resume.pdf`: linked from the home page.

## Files
- `design/*.dc.html`: the 7 page references.
- `design/site-ruler.js`: the top ruler web component.
- `design/dock-nav.js`: the bottom dock web component.
- `design/image-slot.js`: the image placeholder (prototype only).
- `design/components/dth`, `design/components/bijak`: Figma-extracted bundles, for reference only.
- `design/_ds/`: base stylesheet.
- `design/support.js`: the prototype runtime. Do not port it.

## Suggested Claude Code prompt
> Unzip part-1, part-2 and part-3 into one folder. Read `README.md` and the files in `design/`. Scaffold a Next.js + TypeScript + Tailwind static site with the seven routes listed. Port `site-ruler.js` and `dock-nav.js` to React components used on every page. Recreate every page pixel-accurately for desktop and mobile, including the GSAP/Lenis motion, the rolling-digit counters and the footer curtain reveal. Honour `prefers-reduced-motion`. Copy assets into `public/`, then deploy to Vercel production.
