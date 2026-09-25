// @ts-nocheck -- behaviour ported verbatim from the prototype's untyped JS
'use client';

// Behaviour for the Dth page, ported from design-reference/design/DTH Price Simplification.dc.html.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import DCPage from '@/lib/DCPage';
import DthView from '@/views/DthView';

const HEUR = [
  { p: 'P0', t: 'Recognition rather than recall / Aesthetic design' },
  { p: 'P0', t: 'Visual heirarchy of information/easy to consume/ reduced cog lode' },
  { p: 'P0', t: 'flexibility efficiency of use' },
  { p: 'P0', t: 'Consistency standard' },
  { p: 'P1', t: 'System status/Feedback batch indicator for how many items added in closed accordian' },
  { p: 'P1', t: 'Efficiency of use To speed up the order creation process' },
  { p: 'P1', t: 'Match b/w system & real world (veg/n.veg labels)' },
  { p: 'P2', t: 'Persuasive triggers Ratings' },
];
const ZOM = [
  { h: 'Discovery', t: 'New offers or features easily discovered on home screen' },
  { h: 'Comms', t: 'User mental model is being used for better understanding' },
  { h: 'User control', t: 'Filters to see only the relevant information Haptic feedback (Vibrate)' },
  { h: 'Match between real and digital world', t: 'Real image of a product' },
  { h: 'Help users', t: 'in recognizing and preventing errors' },
  { h: 'Consistency and standard', t: 'consistent spacing + grouping leads to better scanning' },
];
const CARDS = [
  ['Overall balanced layout', 'Visual order/Balance'],
  ['Visual stimulation', 'Content scanning'],
  ['Compact/ relevant info/ suitalble for listing', 'too much clutter on screen'],
  ['Better comprehension', 'Large card takes more space on the screen.'],
  ['context/image/premium', 'Scanning/not scalable with sub ott, issue with relevant image to use'],
];
const SCREENS = [
  { c: 'BOX', step: 'STEP 1', title: 'Select a DTH box' },
  { c: 'BASEPACKS', step: 'STEP 2', title: 'Base packs' },
  { c: 'LANGUAGEPACKS', step: 'STEP 2', title: 'Language packs' },
  { c: 'OTT', step: 'STEP 2 · ADD-ONS', title: 'OTT' },
  { c: 'ALACARTE', step: 'STEP 2 · ADD-ONS', title: 'A la carte channels' },
  { c: 'VAS', step: 'STEP 2 · ADD-ONS', title: 'VAS' },
  { c: 'ReviewOrder', step: 'STEP 3', title: 'Review order' },
];
const FB = [
  { d: '21 FEB', h: '21st feb feedback', items: ['To keep a more flexible approach for addons selection', 'Benchmark E-commerce addons'] },
  { d: '23 FEB', h: 'Feedback by product, Engineering and design', items: ['Additional language pack will have only one language channel', 'To check the nomenclature of the packs - Giri', 'Use snack bar for add-ons feedback for adding and remove', 'Both the versions will be tested in A/B environment', 'OTT meta info to be provided - Giri', 'X-stream box and add-ons price will be separated', 'VAS info shared - Giri', 'To check DTH experience post acquisition on app - Shiva'] },
  { d: '9 MAR 2022', h: 'MOM for Design and Product discusion', items: ['Update the structure for DTH box selection - P2', 'Number of languages for selection - 9 - P1', '✅Filter for language pack selection - P0', '✅By default keep the accordian lists open - P0', 'Price range filter for ala carte - 0-22 - P1', '✅DTH review - Addons section -chevron next to line item, expanded form. ott pay at the installation comms - P0', 'A la carte - Search zero state - add cross button - multiple states as well - different page info - P0', 'Listing page ui components - P2'] },
  { d: '14 MAR 2022', h: 'Design Feedback', items: ['Filter on ala carte needs to hve one closure button.', 'Language packs context is weak. - WHY? P0', 'Signifier for channels added.'] },
  { d: '14 MAR 2022', h: 'Business Feedback', items: ['To be tested in A/B environment', 'No Add-ons', 'Skippable Add-ons like change plan in SAFO DTH', 'Add on page feedback', 'Individual progress in stepper', 'Continuous scroll to move from one tab to another', 'Ala carte channel already added in any pack. States - P0', 'Base pack = all channels of selected HD language + 2 genres (english entertainment and movies + premium sports) in Rs.550, RS.350 = min. channel combination of SD + HD P0'] },
  { d: '17 MAR 2022', h: 'Growth/engineering Feedback', items: ['✅Mega pack amt. (show overall amt. with dropdown) Airtel black exclusive pack (on review page) - P0', '✅Remove total and non selected adding from review page.P0', '✅Visuals (logos) on the pack - P0', '❓Box image, Netflix example (discuss with Mohit) - P0', '✅Affordance for add ons section - make 3 addons visible in one time. Restructure Order - 1) Ott  2) ala carte and 3) language pack - P0', 'UT with users - P1', 'Scalability of languages / Kannada instead of Urdu - P1', 'Content: comms on pack & box (discuss with content team & mohit) - P0'] },
];

export default class DthPage extends DCPage {

  state = { card: 0, fb: 0 };
  componentDidMount() {
    let tries = 0;
    const wait = () => {
      if (gsap && ScrollTrigger) this.initMotion();
      else if (tries++ < 100) this._t = setTimeout(wait, 60);
    };
    wait();
  }
  componentWillUnmount() {
    clearTimeout(this._t);
    if (this._raf) cancelAnimationFrame(this._raf);
    if (this._lenis) this._lenis.destroy();
    if (this._ctx) this._ctx.revert();
  }
  componentDidUpdate() {
    const ps = this._prev || this.state;
    this._prev = { ...this.state };
    if (ps.card !== this.state.card && gsap) gsap.fromTo('[data-cbody] > div', { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, stagger: 0.08, ease: 'power3.out' });
    if (ps.fb !== this.state.fb && ScrollTrigger) setTimeout(() => ScrollTrigger.refresh(), 600);
  }
  initMotion() {
    const ST = ScrollTrigger;
    gsap.registerPlugin(ST);
    // Smooth scrolling is skipped for visitors who prefer reduced motion.
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches && !this._lenis) {
      const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
      this._lenis = lenis; window.__lenis = lenis;
      lenis.on('scroll', ST.update);
      const raf = (t) => { lenis.raf(t); this._raf = requestAnimationFrame(raf); };
      this._raf = requestAnimationFrame(raf);
    }
    const $ = (s, r) => Array.from((r || document).querySelectorAll(s));
    this._ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power4.out' } })
        .from('[data-hero="kicker"]', { y: 16, opacity: 0, duration: 0.6 })
        .from('[data-char]', { yPercent: 115, duration: 0.9, stagger: 0.12 }, '-=0.3')
        .from('[data-hero="sub"]', { y: 16, opacity: 0, duration: 0.6 }, '-=0.5')
        .from('[data-hero="chip"]', { y: 12, opacity: 0, duration: 0.5, stagger: 0.08 }, '-=0.4')
        .from('header [data-note]', { y: -60, opacity: 0, rotation: (i, el) => +el.dataset.rot + (i % 2 ? 12 : -12), duration: 0.9, stagger: 0.12, ease: 'back.out(1.6)' }, '-=0.6')
        .from('[data-hphone="1"]', { y: 120, opacity: 0, duration: 1.1 }, '-=0.5')
        .from('[data-hphone="0"]', { x: 120, rotation: 8, opacity: 0, duration: 1 }, '-=0.8')
        .from('[data-hphone="2"]', { x: -120, rotation: -8, opacity: 0, duration: 1 }, '<');
      gsap.to('[data-hphone="0"]', { y: -40, ease: 'none', scrollTrigger: { trigger: '[data-hphone="1"]', start: 'top bottom', end: 'bottom top', scrub: true } });
      gsap.to('[data-hphone="2"]', { y: -70, ease: 'none', scrollTrigger: { trigger: '[data-hphone="1"]', start: 'top bottom', end: 'bottom top', scrub: true } });

      $('[data-title]').forEach((el) => {
        gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 82%' } })
          .from(el.querySelector('[data-frame]'), { scaleX: 0, scaleY: 0.2, duration: 0.7, ease: 'expo.out' })
          .from($('[data-handle]', el), { scale: 0, duration: 0.35, stagger: 0.05, ease: 'back.out(3)' }, '-=0.35')
          .from(el.querySelector('[data-ttext]'), { y: 24, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.45');
      });
      $('[data-reveal]').forEach((el) => gsap.from(el, { y: 36, opacity: 0, duration: 0.85, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%' } }));
      $('section [data-note]').forEach((el) => gsap.from(el, { y: -40, opacity: 0, rotation: +el.dataset.rot - 14, duration: 0.8, ease: 'back.out(1.8)', scrollTrigger: { trigger: el, start: 'top 90%' } }));
      $('[data-card]').forEach((el, i) => gsap.from(el, { y: 50, opacity: 0, duration: 0.8, delay: (i % 3) * 0.1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } }));

      const packs = $('[data-pack]');
      if (packs.length) {
        const pst = { trigger: packs[0], start: 'top 85%' };
        gsap.from(packs, { rotationY: -70, transformOrigin: '0% 50%', opacity: 0, duration: 0.9, stagger: 0.18, ease: 'power3.out', scrollTrigger: pst });
        $('[data-count]').forEach((el) => { const end = +el.dataset.count, o = { v: 0 }; el.textContent = '0'; gsap.to(o, { v: end, duration: 1.4, ease: 'power2.out', scrollTrigger: pst, onUpdate: () => { el.textContent = Math.round(o.v); } }); });
      }
      const langs = $('[data-lang]');
      if (langs.length) gsap.from(langs, { y: -30, opacity: 0, rotation: () => gsap.utils.random(-12, 12), duration: 0.6, stagger: 0.06, ease: 'back.out(2.2)', scrollTrigger: { trigger: '[data-langs]', start: 'top 88%' } });

      const heur = $('[data-hcard]');
      if (heur.length) gsap.from(heur, { x: (i) => (i % 2 ? 40 : -40), opacity: 0, duration: 0.6, stagger: 0.07, ease: 'power3.out', scrollTrigger: { trigger: '[data-heur]', start: 'top 82%' } });
      const zom = $('[data-zcard]');
      if (zom.length) gsap.from(zom, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.8, stagger: 0.08, ease: 'power3.inOut', scrollTrigger: { trigger: '[data-zom]', start: 'top 82%' } });

      const ui = document.querySelector('[data-ui]');
      if (ui) {
        const names = SCREENS.map((s) => s.title), n = names.length, track = ui.querySelector('[data-ui-track]');
        const label = ui.querySelector('[data-ui-label]'), count = ui.querySelector('[data-ui-count]'), note = ui.querySelector('[data-ui-note]');
        const dots = $('[data-ui-dot]', ui);
        let cur = 0;
        const setActive = (i) => {
          if (i === cur) return; cur = i;
          dots.forEach((d, j) => { d.style.width = j === i ? '22px' : '8px'; d.style.background = j === i ? '#5BC0E8' : '#555555'; });
          count.textContent = String(i + 1).padStart(2, '0') + ' / ' + String(n).padStart(2, '0');
          gsap.timeline()
            .to(note, { y: -14, rotation: -6, opacity: 0, duration: 0.18, ease: 'power2.in', onComplete: () => { label.textContent = names[i]; } })
            .fromTo(note, { y: 18, rotation: 3, opacity: 0 }, { y: 0, rotation: -2, opacity: 1, duration: 0.45, ease: 'back.out(2)' });
        };
        gsap.to(track, { xPercent: -100 * (n - 1), ease: 'none', scrollTrigger: { trigger: ui, start: 'top top', end: 'bottom bottom', scrub: 0.6, onUpdate: (self) => setActive(Math.min(n - 1, Math.round(self.progress * (n - 1)))) } });
      }

      const fbw = document.querySelector('[data-fbwrap]');
      if (fbw) {
        gsap.from('[data-fbline]', { scaleY: 0, duration: 1.2, ease: 'power2.inOut', scrollTrigger: { trigger: fbw, start: 'top 80%' } });
        gsap.from($('[data-fbrow]', fbw), { x: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: fbw, start: 'top 80%' } });
      }

      const next = document.querySelector('[data-next]');
      if (next) {
        gsap.from(next, { y: 60, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: next, start: 'top 85%' } });
        const img = next.querySelector('[data-nextimg]'), cta = next.querySelector('[data-nextcta]'), link = next.querySelector('a');
        link.addEventListener('mouseenter', () => { gsap.to(img, { scale: 1.06, y: -6, duration: 0.6, ease: 'power3.out' }); gsap.to(cta, { x: 6, duration: 0.4 }); });
        link.addEventListener('mouseleave', () => { gsap.to(img, { scale: 1, y: 0, duration: 0.6, ease: 'power3.out' }); gsap.to(cta, { x: 0, duration: 0.4 }); });
      }
    });
  }
  renderVals() {
    const card = this.state.card, fb = this.state.fb;
    return {
      heuristics: HEUR,
      zomato: ZOM,
      cards: CARDS.map((c, i) => ({ i: String(i), n: String(i + 1), on: i === card ? 'on' : 'off' })),
      cardPro: CARDS[card][0], cardCon: CARDS[card][1],
      pickCard: (e) => this.setState({ card: +e.currentTarget.dataset.ci }),
      screens: SCREENS,
      feedback: FB.map((f, i) => ({ ...f, i: String(i), on: i === fb ? 'on' : 'off' })),
      toggleFb: (e) => { const i = +e.currentTarget.dataset.fi; this.setState((s) => ({ fb: s.fb === i ? -1 : i })); },
    };
  }

  render() {
    return <DthView v={this.renderVals()} />;
  }
}
