// @ts-nocheck -- behaviour ported verbatim from the prototype's untyped JS
'use client';

// Behaviour for the Dth page, ported from design-reference/design/DTH Price Simplification.dc.html.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import DCPage from '@/lib/DCPage';
import DthView from '@/views/DthView';



export default class DthPage extends DCPage {

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
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

      const P = '0.18em', C = '1.41em';
      const mask = `linear-gradient(to bottom, transparent 0, #000 ${P}, #000 calc(100% - ${P}), transparent 100%)`;
      $('[data-count]').forEach((el) => {
        if (el.__nf) return; el.__nf = true;
        const grp = el.closest('[data-impact],[data-metrics]');
        const mi = $('[data-count]', grp).indexOf(el);
        const val = String(el.dataset.count), pre = el.dataset.prefix || '';
        el.setAttribute('aria-label', pre + val);
        el.textContent = '';
        el.style.cssText += ';display:inline-flex;font-variant-numeric:tabular-nums';
        const sign = document.createElement('span');
        sign.textContent = pre || '\u200B'; sign.setAttribute('aria-hidden', 'true');
        sign.style.cssText = 'display:inline-block;opacity:0;transform:translateY(0.3em) scale(0.8);transition:opacity .5s ease, transform .9s cubic-bezier(.3,1.5,.5,1)';
        el.appendChild(sign);
        const wheels = [...val].map((ch, di) => {
          const box = document.createElement('span');
          box.setAttribute('aria-hidden', 'true');
          box.style.cssText = `box-sizing:content-box;display:inline-block;vertical-align:top;height:${C};margin:-${P} -0.02em;overflow:hidden;-webkit-mask-image:${mask};mask-image:${mask}`;
          const col = document.createElement('span');
          col.style.cssText = 'display:flex;flex-direction:column;will-change:transform';
          for (let k = 0; k < 20; k++) { const c = document.createElement('span'); c.textContent = k % 10; c.style.cssText = `display:block;height:${C};line-height:${C};text-align:center`; col.appendChild(c); }
          box.appendChild(col); el.appendChild(box);
          return { col, d: +ch, di };
        });
        const play = () => requestAnimationFrame(() => {
          sign.style.opacity = '1'; sign.style.transform = 'none';
          wheels.forEach(({ col, d, di }) => {
            const n = wheels.length, target = 10 + d;
            col.animate([{ transform: 'translateY(0)', filter: 'blur(0px)' }, { filter: 'blur(1.2px)', offset: 0.35 }, { transform: `translateY(calc(-${target} * ${C}))`, filter: 'blur(0px)' }],
              { duration: 1300 + (n - di) * 180, delay: mi * 90 + (n - di - 1) * 60, easing: 'cubic-bezier(0.18, 1.06, 0.3, 1)', fill: 'forwards' });
          });
        });
        ScrollTrigger.create({ trigger: grp, start: 'top 78%', once: true, onEnter: play });
      });
    this._ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power4.out' } })
        .from('[data-char]', { yPercent: 115, duration: 0.9, stagger: 0.12 })
        .from('[data-hero="sub"]', { y: 16, opacity: 0, duration: 0.6 }, '-=0.5')
        .from('header [data-note]', { y: -60, opacity: 0, rotation: (i, el) => +el.dataset.rot + (i % 2 ? 12 : -12), duration: 0.9, stagger: 0.12, ease: 'back.out(1.6)' }, '-=0.5')
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

      const imp = document.querySelector('[data-impact]');
      if (imp) {
        gsap.from('[data-divider]', { scaleY: 0, duration: 1.1, ease: 'power2.inOut', scrollTrigger: { trigger: imp, start: 'top 80%' } });
        gsap.from($('[data-metric]', imp), { y: 30, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: imp, start: 'top 78%' } });
      }
      const da = document.querySelector('[data-da]');
      if (da) {
        const t = gsap.timeline({ scrollTrigger: { trigger: da, start: 'top 80%' } });
        $('[data-da-step]', da).forEach((s) => {
          t.from(s.querySelector('[data-da-circle]'), { scale: 0, duration: 0.4, ease: 'back.out(2.4)' })
           .from($('[data-da-li]', s), { x: -14, opacity: 0, duration: 0.35, stagger: 0.06 }, '-=0.1');
          const ln = s.querySelector('[data-da-line]');
          if (ln) t.from(ln, { scaleX: 0, duration: 0.4, ease: 'power2.inOut' }, '-=0.2');
        });
      }
      $('[data-persona]').forEach((el) => {
        gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 85%' } })
          .from(el, { y: 60, opacity: 0, duration: 0.9, ease: 'power3.out' })
          .from(el.querySelector('img'), { scale: 0.6, opacity: 0, duration: 0.6, ease: 'back.out(2)' }, '-=0.6');
      });
      $('[data-bshot]').forEach((el, i) => gsap.from(el, { y: 60, opacity: 0, rotation: i % 2 ? 3 : -3, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%' } }));
      $('[data-bnote]').forEach((el, i) => gsap.from(el, { y: -30, opacity: 0, rotation: i % 2 ? 6 : -6, duration: 0.7, ease: 'back.out(1.8)', scrollTrigger: { trigger: el, start: 'top 90%' } }));
      $('[data-comp]').forEach((el) => gsap.from(el, { y: 40, opacity: 0, scale: 0.96, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 92%' } }));
      const finals = $('[data-final]');
      if (finals.length) gsap.from(finals, { y: 80, opacity: 0, duration: 0.9, stagger: 0.14, ease: 'power3.out', scrollTrigger: { trigger: finals[0], start: 'top 85%' } });
      const em = document.querySelector('[data-metrics]');
      if (em) gsap.from($('[data-metric]', em), { y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: em, start: 'top 80%' } });

      const next = document.querySelector('[data-next]');
      if (next) {
        gsap.from(next, { y: 60, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: next, start: 'top 85%' } });
        const img = next.querySelector('[data-nextimg]'), cta = next.querySelector('[data-nextcta]'), link = next.querySelector('a');
        link.addEventListener('mouseenter', () => { gsap.to(img, { scale: 1.06, y: -6, duration: 0.6, ease: 'power3.out' }); gsap.to(cta, { x: 6, duration: 0.4 }); });
        link.addEventListener('mouseleave', () => { gsap.to(img, { scale: 1, y: 0, duration: 0.6, ease: 'power3.out' }); gsap.to(cta, { x: 0, duration: 0.4 }); });
      }
    });
  }
  renderVals() { return {}; }

  render() {
    return <DthView v={this.renderVals()} />;
  }
}
