# Handoff: Shiva Kumar — Design Portfolio Website

## Overview
A personal UX portfolio: a homepage (hero, Work, Experience, Contact) plus four case-study pages. Every page shares a floating bottom dock (Work / Experience / Contact), a dark dotted background, framed "Figma-selection" section titles, and scroll-driven motion.

| Page | File | Accent |
|---|---|---|
| Home | `design/Portfolio.dc.html` | per-card brand colours |
| Engage X | `design/EngageX.dc.html` | `#5BC0E8` blue |
| DTH Price Simplification | `design/DTH Price Simplification.dc.html` | `#5BC0E8` blue |
| Bijak Web Design System | `design/Bijak Web Design System.dc.html` | `#56C381` green |
| Toffee Seller App | `design/Toffee Seller App.dc.html` | `#EC5A5A` coral |

## About the Design Files
The files in `design/` are **design references built in HTML** — working prototypes showing the intended look, content and behaviour. They run on a small in-house runtime (`support.js`, the `.dc.html` format) that is **not** meant for production. The task is to **recreate these designs as a real website**. No codebase exists yet, so pick a stack. Recommended:

- **Next.js (App Router) + TypeScript**, static export, deployed on Vercel or GitHub Pages
- **Tailwind CSS** (or CSS Modules) — the designs are plain inline styles, easy to port
- **GSAP + ScrollTrigger** and **Lenis** for motion (already what the prototypes use)
- One route per page: `/`, `/work/engage-x`, `/work/dth-price-simplification`, `/work/bijak-design-system`, `/work/toffee-seller-app`

To view a reference: serve the `design/` folder (`npx serve design`) and open any `.dc.html` file.

## Fidelity
**High-fidelity.** Colours, type, spacing, copy and motion are final. Recreate pixel-accurately. Copy text verbatim (case-study text was copied from the author's own material, typos included — keep it unless the author asks).

## Global system
- **Font:** Montserrat 400/500/600/700/800 (Google Fonts). Bijak page also loads Roboto, Permanent Marker, Rubik for its specimens.
- **Page ground:** `#1C1C1C` with dotted grid — `radial-gradient(circle, rgba(243,242,242,0.18) 1.3px, transparent 1.3px)`, `background-size: 28px 28px`, `background-position: -14px -14px`.
- **Text:** `#FFFFFF`; secondary `#D6D6D6`; muted `#9A9A9A`.
- **Dividers / boxes:** `2px dashed #6A6A6A` (cards), `#3A3A3A` solid rules, `#262626` inner panels.
- **Radius:** 0 everywhere (only exceptions: circular avatars/steps, the dock bar at 13px).
- **Section title component:** centred box, max 500px, 1.5px solid accent border, four 10×10 corner handles (1.5px accent border, `#1C1C1C` fill) offset −5px, h2 `clamp(38px,6vw,62px)` / 500 / line-height 1.16.
- **Sticky notes:** `#7FD3F7` (ink `#12303D`), `#A8E6BF` (`#15361F`), `#F6DFA6` (`#3D3010`), `#FFE94D` marker notes; rotated −4°…+3°; 15px/700 title + 14px/500 body; 12px padding.
- **Content column:** 840–880px max, 20px side padding on mobile.
- **Breakpoints:** ≤900/860px = mobile layout, ≤560px = small phone.

## Screens
### Home (`Portfolio.dc.html`)
- Hero, then **Work**: stacked sticky project cards (each `position:sticky`, tops 70/118/166/214/262px, increasing z-index) so cards pile up while scrolling. Card = coloured panel, folder-tab label "PROJECT 0N", h3 `clamp(34px,5cqw,64px)`/400, subtitle, dark "View project →" button, two folder-tab tags, image frame with blue `#1473E6` selection outline + white corner squares and a "IMAGE.JPG" chip.
  - 01 Engage X `#22BDE8`, 02 Price simplification `#111111`, 03 Bijak Web Design System `#51834A`, 04 Toffee Seller App `#EFB420`, 05 Claude Code projects `#D97757` (button shows "Case study coming soon" toast).
- **Experience**: accordion list (Airtel, Bijak, Toffee Insurance, BYO). Row = company (24–38px/500), role, years, chevron. Open row gets blue Figma selection outline + corner handles; projects list with 6px blue square bullets. Only one open at a time (Airtel default). "Download resume" solid `#1473E6` button → `assets/Shiva_Kumar_Resume.pdf`.
- **Contact / Let's talk**: form (Your name, Your email, Description, Submit). Currently validates then opens `mailto:kumarshiva1990@gmail.com`. **For production, wire to a form backend** (Formspree/Resend/Next API route).
- Toast: fixed bottom 96px, "Case study coming soon".

### Case studies (shared pattern)
Hero (kicker, letter/word rise title, chips, three sticky notes) → sections with framed titles → next-project card (image left, title/description/CTA right; hover lifts image, nudges CTA) → "← Back to portfolio".

- **Engage X:** laptop hero with floating cursor tags ("Please refer PRD" `#E0217A`, "Detach Instance" `#2BA84A`), confidentiality notice `#F4C542`, Problem/Goal, Impact (2×4 metrics count-up, dashed divider), Design Approach folders, Proto Personas, Information Architecture tree (root → 8 branches; mobile = vertical indented tree), AI Prototype (Figma Make iframe embed), UI Design (pinned horizontal scroll through 5 screen slots with "Now viewing" note that flips per screen), Illustrations bento (12 images, clip reveal, 3D tilt hover, lightbox with arrows/Esc), Early Wins (4 metrics).
- **DTH Price Simplification:** three live phone screens in hero, Problem (WHAT/WHEN/WHY cards), Rs 350 / Rs 500 pack cards (flip + count-up), TRAI note, Assumptions + 9 language chips, Research (heuristic P0/P1/P2 cards, Zomato audit), Card Exploration (Option 1–5 segmented → Pros/Cons), Final Design (pinned horizontal scroll through 7 screens), Feedback Rounds timeline accordion.
  - App screens are rendered from `design/components/dth/Components.bundle.js` (extracted from Figma). **For production, export these 7 frames from Figma as PNG/WebP** and use images.
- **Bijak Web Design System:** status-cycling cover card, Overview stats (count-up), Grid & Layouts (segmented 4/8/12 columns animate), Spacing bars (8–56), Colour Palette (click swatch → copies hex + toast), Typography (12 Roboto styles, weight switch), live Components (button/input state switches, checkbox/radio/toggle tap), Cursor States (13 tiles, real CSS cursors), Governance pipeline (6 stages).
  - Live components come from `design/components/bijak/Components.bundle.js`. Rebuild them as real React components in the new codebase.
- **Toffee Seller App:** coral accent; old-app pain points (✕ spin in), "As a result…" connector + flip-in result cards, big "?" spring, 4 feature rows with phone parallax, live claim-status stepper, animated leaderboard, Our Approach, Research (logos, affinity photos, personas), User Flow diagram drawn step by step.

## Interactions & Motion
- **Smooth scroll:** Lenis `{ lerp: 0.1, smoothWheel: true }`, exposed as `window.__lenis` so the dock can use `lenis.scrollTo(y, { duration: 1.2 })`.
- **Reveals:** `y: 36, opacity: 0, duration: 0.85, ease: power3.out`, trigger `top 90%`.
- **Title frames:** frame `scaleX 0 → 1` (0.7s expo.out) → handles pop (back.out(3), 0.05 stagger) → text rises.
- **Hero:** chars/words `yPercent: 115` stagger, notes drop with `back.out(1.6)` and settle at their rotation.
- **Count-ups:** 0 → value, 1.4–1.6s power2.out.
- **Pinned horizontal scroll:** outer height `N × 100vh`, inner `position: sticky; height: 100vh`, track `xPercent: -100*(N-1)` scrubbed.
- **Dock nav (`design/dock-nav.js`):** white bar, blue `#0D99FF` pill springs between items (`cubic-bezier(.3,1.35,.4,1)`), ripple + icon pop on click, scroll-spy on home, auto-hides on scroll down at ≤1180px, always visible near page bottom. On case-study pages clicking fades the page and navigates to `/#section`.
- Respect `prefers-reduced-motion`.

## State
- Experience: `openIndex` (default 0). Contact form: name/email/message + status message.
- Engage X lightbox: `activeIllustration | null`.
- DTH: `cardOption`, `feedbackOpen`.
- Bijak: `breakpoint`, `weight`, `buttonState`, `inputState`, `checkbox`, `radio`, `toggle`, `coverStage` (auto-cycles 1.8s), `toast`.

## Assets
`design/assets/` — Engage X laptop/logo/personas/illustrations (`assets/engagex/`), Toffee crops (`assets/toffee/`), resume PDF. Some portfolio image frames are empty drop-slots (`<image-slot>`); ask the author for final imagery. Toffee screens were cropped from a Behance export and are soft — replace with originals if available.

## Files
- `design/*.dc.html` — page references
- `design/dock-nav.js` — bottom navigation web component (can be ported to React as-is)
- `design/components/dth`, `design/components/bijak` — Figma-extracted component bundles (reference only)
- `design/_ds/` — base stylesheet used by the prototypes
- `screenshots/` — reference captures at desktop width: `01–04-home.png`, `01–04-engagex.png`, `01–04-bijak.png`, `01–04-toffee.png` (hero → mid-page → end). DTH was too heavy to capture automatically — open `design/DTH Price Simplification.dc.html` to view it. The Engage X Figma Make iframe doesn't appear in captures.

## Suggested Claude Code prompt
> Read `README.md` and the files in `design/`. Scaffold a Next.js + TypeScript + Tailwind site with the five routes listed, port the dock nav, recreate every page pixel-accurately with GSAP/ScrollTrigger + Lenis motion, export static, then create a new GitHub repo named `shiva-portfolio` with `gh repo create shiva-portfolio --public --source=. --push`.
