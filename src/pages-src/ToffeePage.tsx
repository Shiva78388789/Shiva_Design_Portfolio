// @ts-nocheck -- behaviour ported verbatim from the prototype's untyped JS
'use client';

// Behaviour for the Toffee page, ported from design-reference/design/Toffee Seller App.dc.html.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import DCPage from '@/lib/DCPage';
import ToffeeView from '@/views/ToffeeView';



export default class ToffeePage extends DCPage {

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
    const C = '#EC5A5A';
    this._ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power4.out' } })
        .from('[data-hero="kicker"]', { y: 16, opacity: 0, duration: 0.6 })
        .from('[data-char]', { yPercent: 115, duration: 0.9, stagger: 0.035 }, '-=0.3')
        .from('[data-hero="chip"]', { y: 12, opacity: 0, duration: 0.5, stagger: 0.08 }, '-=0.5')
        .from('header [data-note]', { y: -60, opacity: 0, rotation: (i, el) => +el.dataset.rot + (i % 2 ? 12 : -12), duration: 0.9, stagger: 0.12, ease: 'back.out(1.6)' }, '-=0.6')
        .from('[data-heroimg]', { y: 80, opacity: 0, duration: 1.1 }, '-=0.6');
      gsap.to('[data-heroimg] img', { yPercent: 6, scale: 1.06, ease: 'none', scrollTrigger: { trigger: '[data-heroimg]', start: 'top bottom', end: 'bottom top', scrub: true } });

      $('[data-title]').forEach((el) => {
        gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 82%' } })
          .from(el.querySelector('[data-frame]'), { scaleX: 0, scaleY: 0.2, duration: 0.7, ease: 'expo.out' })
          .from($('[data-handle]', el), { scale: 0, duration: 0.35, stagger: 0.05, ease: 'back.out(3)' }, '-=0.35')
          .from(el.querySelector('[data-ttext]'), { y: 24, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.45');
      });
      $('[data-reveal]').forEach((el) => gsap.from(el, { y: 36, opacity: 0, duration: 0.85, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%' } }));

      $('[data-phone]').forEach((el, i) => {
        gsap.from(el, { y: 110, opacity: 0, rotation: i % 2 ? 4 : -4, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } });
        gsap.to(el, { yPercent: -8, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } });
      });

      const pains = document.querySelector('[data-pains]');
      if (pains) {
        const pt = gsap.timeline({ scrollTrigger: { trigger: pains, start: 'top 75%' } });
        pt.from(pains, { opacity: 0, y: 30, duration: 0.6, ease: 'power3.out' });
        $('[data-pain]', pains).forEach((li) => {
          const x = li.querySelector('[data-x]');
          if (x) pt.from(x, { scale: 0, rotation: -180, duration: 0.45, ease: 'back.out(2.4)' }, '>-0.15');
          pt.from(x ? li.lastElementChild : li, { x: -18, opacity: 0, duration: 0.4, ease: 'power2.out' }, '<0.1');
        });
      }

      const drops = $('[data-drop]');
      if (drops.length) {
        gsap.timeline({ scrollTrigger: { trigger: drops[0], start: 'top 80%' } })
          .from(drops[0], { scaleY: 0, duration: 0.5, ease: 'power2.inOut' })
          .from('[data-result]', { scale: 0.6, opacity: 0, duration: 0.5, ease: 'back.out(2.2)' })
          .from(drops[1], { scaleY: 0, duration: 0.4, ease: 'power2.inOut' })
          .from(drops[2], { opacity: 0, y: -6, duration: 0.2 })
          .from('[data-res]', { rotationX: -90, transformOrigin: '50% 0%', opacity: 0, duration: 0.8, stagger: 0.14, ease: 'back.out(1.4)' });
      }

      const q = document.querySelector('[data-q]');
      if (q) gsap.timeline({ scrollTrigger: { trigger: q, start: 'top 80%' } })
        .from('[data-qmark]', { scale: 0.3, rotation: -25, opacity: 0, duration: 1, ease: 'elastic.out(1, 0.55)' })
        .from('[data-qtext]', { y: 26, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.6');

      const steps = document.querySelector('[data-steps]');
      if (steps) {
        const dots = $('[data-dot]', steps), line = steps.querySelector('[data-sline]');
        const stl = gsap.timeline({ scrollTrigger: { trigger: steps, start: 'top 80%' } });
        dots.forEach((d, i) => {
          stl.to(d, { backgroundColor: C, borderColor: C, duration: 0.3, ease: 'power2.out' })
             .fromTo(d, { scale: 0.7 }, { scale: 1, duration: 0.5, ease: 'back.out(3)' }, '<')
             .to(d.querySelector('svg'), { opacity: 1, duration: 0.2 }, '<0.1');
          if (i < dots.length - 1) stl.to(line, { scaleX: (i + 1) / (dots.length - 1), duration: 0.5, ease: 'power1.inOut' });
        });
      }

      const board = document.querySelector('[data-board]');
      if (board) {
        const bst = { trigger: board, start: 'top 82%' };
        gsap.from($('[data-lrow]', board), { x: 40, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out', scrollTrigger: bst });
        $('[data-lcount]', board).forEach((el) => {
          const end = +el.dataset.lcount, o = { v: 0 };
          el.textContent = '0';
          gsap.to(o, { v: end, duration: 1.6, ease: 'power2.out', scrollTrigger: bst, onUpdate: () => { el.textContent = Math.round(o.v); } });
        });
      }

      const appr = $('[data-appr]');
      if (appr.length) gsap.timeline({ scrollTrigger: { trigger: appr[0], start: 'top 82%' } })
        .from(appr, { y: 50, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' })
        .from($('[data-num]'), { yPercent: 60, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'back.out(2)' }, 0.2);

      $('[data-photo]').forEach((el, i) => gsap.from(el, { clipPath: 'inset(0% 0% 100% 0%)', duration: 1, delay: i * 0.12, ease: 'power3.inOut', scrollTrigger: { trigger: el, start: 'top 85%' } }));

      $('[data-persona]').forEach((el) => {
        gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 82%' } })
          .from(el, { y: 60, opacity: 0, duration: 0.8, ease: 'power3.out' })
          .from(el.querySelector('img'), { scale: 0.5, opacity: 0, duration: 0.6, ease: 'back.out(2)' }, '-=0.5')
          .from($('[data-pbox]', el), { y: 30, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out' }, '-=0.3');
      });

      const flow = document.querySelector('[data-flow]');
      if (flow) {
        const ft = gsap.timeline({ scrollTrigger: { trigger: flow, start: 'top 78%' } });
        $('[data-node]', flow).forEach((n) => {
          ft.from(n, { scale: 0.7, opacity: 0, duration: 0.35, ease: 'back.out(2.4)' });
          const a = n.querySelector('[data-arr]');
          if (a) ft.from(a, { scaleX: 0, transformOrigin: '0% 50%', duration: 0.22, ease: 'none' });
        });
      }

      const next = document.querySelector('[data-next]');
      if (next) {
        gsap.from(next, { y: 60, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: next, start: 'top 85%' } });
        const img = next.querySelector('[data-nextimg]'), cta = next.querySelector('[data-nextcta]'), link = next.querySelector('a');
        link.addEventListener('mouseenter', () => { gsap.to(img, { scale: 1.06, y: -6, duration: 0.6, ease: 'power3.out' }); gsap.to(cta, { x: 6, duration: 0.4, ease: 'power3.out' }); });
        link.addEventListener('mouseleave', () => { gsap.to(img, { scale: 1, y: 0, duration: 0.6, ease: 'power3.out' }); gsap.to(cta, { x: 0, duration: 0.4, ease: 'power3.out' }); });
      }
    });
  }
  renderVals() { return {}; }

  render() {
    return <ToffeeView v={this.renderVals()} />;
  }
}
