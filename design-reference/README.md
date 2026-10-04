# Handoff: Shiva Kumar — Design Portfolio Website

## Overview
Shiva Kumar's personal UX portfolio: a home page plus six case-study pages. Every page has a dark ground (`#1C1C1C`), yellow "sticky note" eyebrows, framed section titles with corner handles, scroll-driven motion, and a floating bottom dock nav. Every page works on desktop and mobile web ("mweb").

| Route (suggested) | Reference file | Accent |
|---|---|---|
| `/` | `design/Portfolio.dc.html` | `#63C4EC` sky + per-card brand colours |
| `/work/engage-x` | `design/EngageX.dc.html` | `#22BDE8` |
| `/work/dth-price-simplification` | `design/DTH Price Simplification.dc.html` | `#DD3732` |
| `/work/bijak-design-system` | `design/Bijak Web Design System.dc.html` | `#51AC65` |
| `/work/toffee-seller-app` | `design/Toffee Seller App.dc.html` | `#F26667` |
| `/work/jugnu` | `design/JugnuCaseStudy.dc.html` | `#63C4EC` |
| `/work/akhbar-bash` | `design/Akhbar Bash Case Study.dc.html` | `#63C4EC` + Claude clay `#D97757` |

Rewrite every internal `href="X.dc.html"` to these routes, and change `HOME` in `dock-nav.js` to `/`.

## About the design files
The files in `design/` are **design references built in HTML**. They are working prototypes that show the intended look, copy and behaviour, and they are **not production code**. They run on a small prototype runtime (`support.js`, the `.dc.html` format) that should not ship.

Your task is to **recreate these designs in a real codebase**. No codebase exists yet, so pick a stack. Recommended:
- **Next.js (App Router) + TypeScript**, static export (Vercel or GitHub Pages)
- **Tailwind CSS** or CSS Modules (the references use plain inline styles, which port easily)
- **Motion:** native `IntersectionObserver` and the Web Animations API cover most of it. Use GSAP + ScrollTrigger only for the scrubbed and pinned sections.

To view a reference, serve the folder (`npx serve design`) and open any `.dc.html` file. Template syntax: `{{ x }}` holes and `<sc-for>`/`<sc-if>` blocks are bound to the `class Component` script at the bottom of each file. `renderVals()` returns the values the template uses.

## Fidelity
**High fidelity.** Colours, type, spacing, copy and motion are final. Recreate them pixel-accurately, and copy all text verbatim.

## Global system
- **Font:** Montserrat 300/400/500/600/700 (Google Fonts). Akhbar Bash also uses **Press Start 2P**, but only for numbers and step counters. The Bijak page loads Roboto, Permanent Marker and Rubik for its specimens.
- **Colours:** ground `#1C1C1C`; text `#F5F5F5`; secondary `#DCDCDC`/`#B5B5B5`; surface `#262626`; deep panel `#0F1D24`; hairline `rgba(245,245,245,0.14)`; rule `#3A3A3A`.
- **Brand accents:** sky `#63C4EC`, cream sticky `#F6DFA6`, mint `#A3E4C1`, coral `#F26667`, sun `#F7D158`, clay `#D97757`.
- **Sticky-note eyebrow:** `#F6DFA6` background, `#1C1C1C` text. Size is 20–22px/500 on desktop and 14–16px on mobile, with 4px 10px padding, rotated between −4° and +6°.
- **Framed title:** 2px `#63C4EC` border with 7px 34px padding. It has four corner squares (20×20 on desktop, 14×14 on mobile) with a 2px sky border and a `#1C1C1C` fill, offset −11px. The h1/h2 is 82px/98px/600 on desktop and 42px/49px on mobile.
- **Radius:** 0 by default. Exceptions: Claude Code image cards (8px), pills (999px), the app icon (22%) and the dock bar.
- **Layout:** content column max 1040px, side margins 32px on desktop and 20px on mobile.
- **Breakpoints:**
  - Home page: a separate mobile layout below 900px. The file contains two complete trees and switches between them on `window.innerWidth`.
  - Case studies: container queries (`container-type:inline-size`) at 1199 / 1023 / 899 / 767px.
- **Focus:** `outline: 2px solid #63C4EC; outline-offset: 2px`.
- **Reduced motion:** honour `prefers-reduced-motion` everywhere. Disable reveals, rotations, count-ups and autoplay.

## Screens

### Home (`Portfolio.dc.html`)
1. **Hero (`#top`)**
   - "my name is" sticky note above a framed name.
   - A line reading "I design …" with inline pinwheel images.
   - **Contact me** button in the white liquid-metal style:
     - A 999px pill with 2px padding. The outer ring is a `conic-gradient` of whites and greys, blurred 3px and rotated continuously (3.5s per turn, linear, infinite).
     - The inner face is `linear-gradient(180deg,#fff,#F1F1F3 55%,#DEDEE2)` with `#1C1C1C` 13px/700 text.
     - On hover a shimmer sweeps across the face and the phone icon rings.
   - Floating decorative images around the hero drift gently and move away from the cursor on desktop.
2. **Work (`#work`)**
   - "explore my work" note above four project cards: Engage X, DTH Price Simplification, Bijak Web Design System, Toffee Seller App.
   - Each card has an h3 (60px/72px/400 on desktop, 32px/40px on mobile), a subtitle, a "View project →" button (`#0F1D24` background, accent-coloured text) and two tags.
3. **Claude Code (`#claude`)**
   - A clay `#D97757` band with a waving mascot and speech bubble above its top edge.
   - Caption: "Tools and Prototypes I build with Claude Code".
   - Two 8px-radius image cards: a 2-column grid on desktop (290px tall), stacked on mobile (298px tall).
   - Card 1 links to Akhbar Bash and card 2 to Jugnu.
   - On hover a sky shimmer sweeps across the card and a "VIEW PROJECT →" label fades in at the bottom left. On mobile the label is always visible.
4. **Tools showcase:** on scroll, the Figma, Notion, Jira and Framer logos (12px-radius squares) fly in from different directions, line up in a row, shimmer, and scroll up with the page.
5. **Experience (`#experience`):** a list of companies, each row showing company, role and years.
6. **Contact (`#contact`)**
   - "Let's Talk" framed title and a form: name, email, message.
   - Validation: all three fields are required, and the email must match `^[^\s@]+@[^\s@]+\.[^\s@]+$`.
   - The prototype opens a `mailto:kumarshiva1990@gmail.com` draft. **For production, wire it to a form backend** (Formspree, Resend or an API route).

### Engage X, DTH, Bijak, Toffee
These four pages follow the same pattern: a hero, framed sections, a next-project card, then "← Back to portfolio".
- **Engage X**
  - Impact section: metrics with a NumberFlow-style rolling-digit count-up.
  - Information architecture tree, an embedded Figma Make prototype, and pinned horizontal scrolling through the UI screens.
  - Illustrations bento grid with a lightbox.
- **DTH Price Simplification**
  - The app screens are rendered from `components/dth/` (a Figma extract). **For production, export them as images.**
  - Pack cards that flip and count up.
  - Card-exploration option switcher.
  - Feedback timeline.
- **Bijak Web Design System**
  - Interactive grid, spacing, colour (click to copy the hex), typography and component state demos, rendered from `components/bijak/`.
  - **For production, rebuild these as real React components.**
- **Toffee Seller App:** pain points, feature rows with phone parallax, claim-status stepper, leaderboard, personas and a user-flow diagram.

### Jugnu (`JugnuCaseStudy.dc.html`)
- A character-design case study made of framed sections with body copy, figures, a learnings list, a glass-recipe panel and use-case cards.
- A Spline 3D embed closes the page. It can be switched off in the prototype's settings.
- On mobile, stats sit two to a row and the hero details stack.
- **The figures are empty image placeholders** (`<image-slot id="jugnu-01…10">` pointing at `assets/jugnu/*`, which does not exist yet). Ask the author for the final images.

### Akhbar Bash (`Akhbar Bash Case Study.dc.html`)
**Page order:**
- Hero: autoplaying video, 1688:780 on desktop and 1:1 on mobile.
- 5-column metadata row.
- A deep `#0F1D24` stats band of 6 numbers, which count up in arcade style (12 steps, 50ms each, Press Start 2P, colour `#F7D158`).
- Sections 01–13, the play-the-game call to action, "keep exploring" links, and the contact section.

**Desktop:**
- A fixed section progress rail on the left, shown only at 1024px and wider.
- City switcher tabs: 6 tabs that crossfade the backdrop (200ms) and swap the caption.

**Mobile:**
- Process steps become a vertical timeline.
- The screen gallery becomes a scroll-snap rail with a "1 / 12" counter.
- The street, cast and sprite strips scroll sideways.
- The city strips pan continuously (40s loop, staggered).
- A sticky **PLAY THE GAME** bar appears between the hero and the footer, sitting above the dock.

**Videos:**
- They play only while at least 50% visible and pause when off screen.
- Each has a 44px play/pause button.
- With reduced motion or Save-Data on, they show the poster image instead.
- The full-level video is click to play.

**Other details:**
- Design boards open in a full-screen lightbox (Esc closes it).
- Pixel art always uses `image-rendering: pixelated`.

## Shared interactions
- **Reveal on scroll:** opacity 0 → 1 and translateY 16px → 0, over 400ms with `cubic-bezier(.45,0,.2,1)`, triggered at about 10% from the bottom of the viewport.
- **Line-by-line text reveal:** headline and lead text appear one line at a time, with each line going from blur to sharp (GSAP SplitText-style).
- **Dock nav (`dock-nav.js`)**
  - A web component pinned at the bottom centre, with Work, Experience and Contact.
  - An active pill springs between items (`cubic-bezier(.3,1.35,.4,1)`).
  - On the home page it highlights the section in view. On case-study pages a click goes to `/#section`.
  - It can be ported to React almost directly.

## State
- **Home:** viewport width (to pick the layout) and the contact-form status note.
- **Akhbar Bash:** active city, active rail section, whether the sticky bar shows, and the lightbox `{src, alt} | null`.
- **Engage X:** active illustration in the lightbox.
- **DTH:** card option and which feedback item is open.
- **Bijak:** breakpoint, font weight, and the button, input, checkbox, radio and toggle states.

## Not included (size limit)
To keep this package under 30 MB, these heavy files are **not bundled**. Get them from the author and drop them in at the same paths:
- `assets/akhbar/video/*.mp4`: `hero-loop.mp4`, `hero-loop-square.mp4`, `controls-demo.mp4`, `first-launch-flow.mp4`, `menus-tour.mp4`, `gameplay-full-level.mp4`. Their poster JPGs are included in `assets/akhbar/video/posters/` with matching names, so build each `<video>` with its poster first.
- `assets/Shiva_Kumar_Resume.pdf`: linked from the home page.

For production, host the videos on a CDN (Cloudflare R2, Mux or Vercel Blob) instead of committing them to the repo.

## Assets (`design/assets/`)
- `home/`: hero and card imagery.
- `engagex/`, `toffee/`: case-study images.
- `akhbar/`: images and video posters, all supplied by the author. The videos themselves are not included (see above).

Still missing:
- **Jugnu images:** not supplied yet.
- **Toffee screens:** cropped from a Behance export and soft. Replace them with the originals if available.

## Files
- `design/*.dc.html`: the seven page references.
- `design/dock-nav.js`: the bottom navigation web component.
- `design/image-slot.js`: the image placeholder used by Jugnu (prototype only).
- `design/components/dth`, `design/components/bijak`: Figma-extracted bundles (reference only).
- `design/_ds/`: base stylesheet loaded by the older pages.
- `design/support.js`: the prototype runtime. Do not port it.

## Suggested Claude Code prompt
> Read `README.md` and the files in `design/`. Scaffold a Next.js + TypeScript + Tailwind static site with the seven routes listed, port `dock-nav.js`, recreate every page pixel-accurately for desktop and mobile, honour `prefers-reduced-motion`, and replace the contact `mailto:` with a form backend.
