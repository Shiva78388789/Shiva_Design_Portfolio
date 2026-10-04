// @ts-nocheck -- behaviour ported verbatim from the prototype's untyped JS
'use client';

// Behaviour for the EngageX page, ported from design-reference/design/EngageX.dc.html.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DCPage from '@/lib/DCPage';
import { asset } from '@/lib/dc';
import Lenis from 'lenis';
import EngageXView from '@/views/EngageXView';



export default class EngageXPage extends DCPage {

  componentDidMount() {
    this._keys = (e) => {
      if (this.state.lb === null || !this._go) return;
      if (e.key === 'Escape') this.setState({ lb: null });
      if (e.key === 'ArrowRight') this._go(1)();
      if (e.key === 'ArrowLeft') this._go(-1)();
    };
    window.addEventListener('keydown', this._keys);
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
    if (this._keys) window.removeEventListener('keydown', this._keys);
  }
  initMotion() {
    const ST = ScrollTrigger;
    gsap.registerPlugin(ST);
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches && !this._lenis) {
      const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
      this._lenis = lenis; window.__lenis = lenis;
      lenis.on('scroll', ST.update);
      const raf = (t) => { lenis.raf(t); this._raf = requestAnimationFrame(raf); };
      this._raf = requestAnimationFrame(raf);
    }
    const $ = (s) => Array.from(document.querySelectorAll(s));
    this._ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      tl.from('[data-hero="logo"]', { y: 20, opacity: 0, duration: 0.7 })
        .from('[data-char]', { yPercent: 115, duration: 0.9, stagger: 0.045 }, '-=0.35')
        .from('[data-hero="sub"]', { y: 16, opacity: 0, duration: 0.6 }, '-=0.55')
        .from('[data-hero="chip"]', { y: 12, opacity: 0, duration: 0.5, stagger: 0.08 }, '-=0.4')
        .from('header [data-note]', { y: -60, opacity: 0, rotation: (i, el) => +el.dataset.rot + (i % 2 ? 12 : -12), duration: 0.9, stagger: 0.12, ease: 'back.out(1.6)' }, '-=0.7')
        .from('[data-laptop]', { y: 80, opacity: 0, scale: 0.94, duration: 1.1 }, '-=0.6')
        .from('[data-cursor]', { opacity: 0, scale: 0.6, duration: 0.6, stagger: 0.15, ease: 'back.out(2)' }, '-=0.4');

      gsap.to('[data-cursor="1"]', { x: 16, y: -12, duration: 2.6, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 2 });
      gsap.to('[data-cursor="2"]', { x: -14, y: 14, duration: 3.1, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 2.3 });
      gsap.to('[data-laptop]', { yPercent: -6, ease: 'none', scrollTrigger: { trigger: '[data-laptop]', start: 'top bottom', end: 'bottom top', scrub: true } });

      $('[data-title]').forEach((el) => {
        const t = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 82%' } });
        t.from(el.querySelector('[data-frame]'), { scaleX: 0, scaleY: 0.2, duration: 0.7, ease: 'expo.out' })
         .from(el.querySelectorAll('[data-handle]'), { scale: 0, duration: 0.35, stagger: 0.05, ease: 'back.out(3)' }, '-=0.35')
         .from(el.querySelector('[data-ttext]'), { y: 24, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.45');
      });

      $('[data-reveal]').forEach((el) => gsap.from(el, { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } }));
      $('section [data-note]').forEach((el) => gsap.from(el, { y: -40, opacity: 0, rotation: +el.dataset.rot - 14, duration: 0.8, ease: 'back.out(1.8)', scrollTrigger: { trigger: el, start: 'top 90%' } }));

      const imp = document.querySelector('[data-impact]');
      if (imp) {
        gsap.from('[data-divider]', { scaleY: 0, duration: 1.1, ease: 'power2.inOut', scrollTrigger: { trigger: imp, start: 'top 80%' } });
        gsap.from('[data-metric]', { y: 30, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: imp, start: 'top 78%' } });
        const P = '0.18em', H = '1.05em', C = '1.41em';
        const mask = `linear-gradient(to bottom, transparent 0, #000 ${P}, #000 calc(100% - ${P}), transparent 100%)`;
        $('[data-count]').forEach((el, mi) => {
          if (el.__nf) return; el.__nf = true;
          const val = String(el.dataset.count), pre = el.dataset.prefix || '';
          el.setAttribute('aria-label', pre + val);
          el.textContent = '';
          el.style.cssText += ';display:inline-flex;font-variant-numeric:tabular-nums';
          const sign = document.createElement('span');
          sign.textContent = pre; sign.setAttribute('aria-hidden', 'true');
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
          const play = () => {
            requestAnimationFrame(() => {
              sign.style.opacity = '1'; sign.style.transform = 'none';
              wheels.forEach(({ col, d, di }) => {
                const n = wheels.length, target = 10 + d;
                col.animate([{ transform: 'translateY(0)', filter: 'blur(0px)' }, { filter: 'blur(1.2px)', offset: 0.35 }, { transform: `translateY(calc(-${target} * ${C}))`, filter: 'blur(0px)' }],
                  { duration: 1300 + (n - di) * 180, delay: mi * 90 + (n - di - 1) * 60, easing: 'cubic-bezier(0.18, 1.06, 0.3, 1)', fill: 'forwards' });
              });
            });
          };
          if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { sign.style.opacity = '1'; sign.style.transform = 'none'; wheels.forEach(({ col, d }) => { col.style.transform = `translateY(calc(-${d} * ${C}))`; }); return; }
          ScrollTrigger.create({ trigger: imp, start: 'top 78%', once: true, onEnter: play });
        });
      }

      const folders = $('[data-folder]');
      if (folders.length) {
        const ft = gsap.timeline({ scrollTrigger: { trigger: folders[0], start: 'top 82%' } });
        ft.from(folders, { clipPath: 'inset(100% 0% 0% 0%)', y: 30, duration: 0.9, stagger: 0.15, ease: 'power3.inOut' })
          .from('[data-li]', { x: -14, opacity: 0, duration: 0.4, stagger: 0.04, ease: 'power2.out' }, '-=0.4');
      }

      gsap.from('[data-proto]', { y: 70, opacity: 0, scale: 0.97, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '[data-proto]', start: 'top 85%' } });
      const ui = document.querySelector('[data-ui]');
      if (ui) {
        const names = ["Campaign Dashboard","Create Campaign","Audience Segments","Schedule Campaign","Campaign Reporting"];
        const n = names.length, track = ui.querySelector('[data-ui-track]');
        const label = ui.querySelector('[data-ui-label]'), count = ui.querySelector('[data-ui-count]'), note = ui.querySelector('[data-ui-note]');
        const dots = Array.from(ui.querySelectorAll('[data-ui-dot]'));
        let cur = 0;
        const setActive = (i) => {
          if (i === cur) return;
          cur = i;
          dots.forEach((d, j) => { d.style.width = j === i ? '22px' : '8px'; d.style.background = j === i ? '#5BC0E8' : '#555555'; });
          count.textContent = String(i + 1).padStart(2, '0') + ' / ' + String(n).padStart(2, '0');
          gsap.timeline()
            .to(note, { y: -14, rotation: -6, opacity: 0, duration: 0.18, ease: 'power2.in', onComplete: () => { label.textContent = names[i]; } })
            .fromTo(note, { y: 18, rotation: 3, opacity: 0 }, { y: 0, rotation: -2, opacity: 1, duration: 0.45, ease: 'back.out(2)' });
        };
        gsap.to(track, { xPercent: -100 * (n - 1), ease: 'none', scrollTrigger: { trigger: ui, start: 'top top', end: 'bottom bottom', scrub: 0.6, onUpdate: (self) => setActive(Math.min(n - 1, Math.round(self.progress * (n - 1)))) } });
      }
      const bento = document.querySelector('[data-bento]');
      if (bento) {
        const tiles = Array.from(bento.querySelectorAll('[data-bt]'));
        gsap.set(tiles, { clipPath: 'inset(50% 50% 50% 50%)' });
        const bt = gsap.timeline({ scrollTrigger: { trigger: bento, start: 'top 78%' } });
        bt.to(tiles, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.9, ease: 'expo.inOut', stagger: { each: 0.07, from: 'start', grid: 'auto' } })
          .from(bento.querySelectorAll('[data-bt-img]'), { scale: 1.35, rotation: (i) => (i % 2 ? 6 : -6), opacity: 0, duration: 0.9, ease: 'back.out(1.6)', stagger: 0.07 }, 0.25);
        gsap.to(bento.querySelectorAll('[data-bt-img]'), { y: (i) => (i % 3 - 1) * -18, ease: 'none', scrollTrigger: { trigger: bento, start: 'top bottom', end: 'bottom top', scrub: true } });
        tiles.forEach((t) => {
          const img = t.querySelector('[data-bt-img]'), glow = t.querySelector('[data-bt-glow]'), nm = t.querySelector('[data-bt-name]');
          t.addEventListener('mouseenter', () => {
            gsap.to(t, { scale: 1.02, zIndex: 2, duration: 0.4, ease: 'power3.out' });
            gsap.to(glow, { opacity: 1, duration: 0.3 });
            gsap.to(nm, { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' });
            gsap.to(tiles.filter((o) => o !== t), { opacity: 0.55, duration: 0.35 });
          });
          t.addEventListener('mousemove', (e) => {
            const r = t.getBoundingClientRect(), px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
            t.style.setProperty('--mx', (px + 0.5) * 100 + '%'); t.style.setProperty('--my', (py + 0.5) * 100 + '%');
            gsap.to(t, { rotateY: px * 10, rotateX: -py * 10, duration: 0.5, ease: 'power2.out' });
            gsap.to(img, { x: px * 18, y: py * 18, scale: 1.08, duration: 0.6, ease: 'power2.out' });
          });
          t.addEventListener('mouseleave', () => {
            gsap.to(t, { rotateX: 0, rotateY: 0, scale: 1, zIndex: 0, duration: 0.7, ease: 'elastic.out(1, 0.6)' });
            gsap.to(img, { x: 0, y: 0, scale: 1, duration: 0.7, ease: 'power3.out' });
            gsap.to(glow, { opacity: 0, duration: 0.3 });
            gsap.to(nm, { opacity: 0, y: 8, duration: 0.25 });
            gsap.to(tiles, { opacity: 1, duration: 0.35 });
          });
          t.addEventListener('click', () => this.setState({ lb: +t.dataset.bt }));
        });
      }
      const wins = document.querySelector('[data-wins]');
      if (wins) {
        const wst = { trigger: wins, start: 'top 80%' };
        gsap.from(wins.querySelectorAll('[data-win-div]'), { scaleY: 0, duration: 1.1, ease: 'power2.inOut', stagger: 0.1, scrollTrigger: wst });
        gsap.from(wins.querySelectorAll('[data-win]'), { y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', scrollTrigger: wst });
        wins.querySelectorAll('[data-wcount]').forEach((el) => {
          const end = +el.dataset.wcount, pre = el.dataset.prefix, o = { v: 0 };
          el.textContent = pre + '0';
          gsap.to(o, { v: end, duration: 1.6, ease: 'power2.out', scrollTrigger: wst, onUpdate: () => { el.textContent = pre + Math.round(o.v); } });
        });
      }
      const iaw = document.querySelector('[data-iawrap]');
      if (iaw) {
        const it = gsap.timeline({ scrollTrigger: { trigger: iaw, start: 'top 75%' } });
        it.from('[data-ia-root]', { y: -50, opacity: 0, duration: 0.6, ease: 'bounce.out' })
          .from('[data-ia-stem]', { scaleY: 0, duration: 0.25, ease: 'none' })
          .from(iaw.querySelectorAll('[data-ia-col] > [data-ia-bus]'), { scaleX: 0, duration: 0.5, ease: 'power2.out' });
        iaw.querySelectorAll('[data-ia-col]').forEach((col, ci) => {
          const ct = gsap.timeline();
          col.querySelectorAll('[data-ia-stub],[data-ia-node],[data-ia-sub] > [data-ia-bus],[data-ia-spine],[data-ia-kid]').forEach((el) => {
            if (el.hasAttribute('data-ia-stub') || el.hasAttribute('data-ia-spine')) ct.from(el, { scaleY: 0, duration: 0.18, ease: 'none' }, '>-0.05');
            else if (el.hasAttribute('data-ia-bus')) ct.from(el, { scaleX: 0, duration: 0.2, ease: 'none' }, '<');
            else if (el.hasAttribute('data-ia-node')) ct.from(el, { y: -40, opacity: 0, duration: 0.5, ease: 'bounce.out' }, '>-0.05');
            else ct.from(el, { y: -26, opacity: 0, duration: 0.42, ease: 'back.out(2.2)' }, '>-0.3');
          });
          it.add(ct, 1.1 + ci * 0.22);
        });
      }
      $('[data-persona]').forEach((el, i) => {
        const t = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 85%' } });
        t.from(el, { y: 60, opacity: 0, duration: 0.9, ease: 'power3.out' })
         .from(el.querySelector('img'), { scale: 0.6, opacity: 0, duration: 0.6, ease: 'back.out(2)' }, '-=0.6')
         .from(el.querySelectorAll('div,p'), { y: 12, opacity: 0, duration: 0.45, stagger: 0.03, ease: 'power2.out' }, '-=0.45');
      });
    });
  }
  state = { lb: null };
  componentDidUpdate() {
    const ps = this._prev || { lb: null };
    this._prev = { ...this.state };
    if (ps.lb === null && this.state.lb !== null && gsap) {
      gsap.from('[data-lb]', { opacity: 0, duration: 0.3 });
      gsap.from('[data-lb-card]', { scale: 0.8, y: 40, rotation: -3, duration: 0.6, ease: 'back.out(1.7)' });
      if (this._lenis) this._lenis.stop();
    } else if (ps.lb !== null && this.state.lb !== null && ps.lb !== this.state.lb && gsap) {
      gsap.fromTo('[data-lb-card] img', { opacity: 0, x: this._dir * 40 }, { opacity: 1, x: 0, duration: 0.4, ease: 'power3.out' });
    } else if (ps.lb !== null && this.state.lb === null && this._lenis) this._lenis.start();
  }
  renderVals() {
    const names = ["Omnichannel Campaigns","Analytics Deep-dive","Secure Access","Performance Review","Media Upload","API Failure","Billing Servers","In-app Chat","Notifications","Insights","Segment Approved","User Lists"];
    const lb = this.state.lb, n = names.length;
    const go = (d) => (e) => { e && e.stopPropagation(); this._dir = d; this.setState((st) => ({ lb: (st.lb + d + n) % n })); };
    this._go = go;
    return {
      lbOpen: lb !== null,
      lbSrc: lb !== null ? asset('/assets/engagex/ill/' + (lb + 1) + '.png') : '',
      lbName: lb !== null ? names[lb] : '',
      lbCount: lb !== null ? String(lb + 1).padStart(2, '0') + ' / ' + n : '',
      closeLb: () => this.setState({ lb: null }),
      prevLb: go(-1), nextLb: go(1),
      stop: (e) => e.stopPropagation(),
    };
  }

  render() {
    return <EngageXView v={this.renderVals()} />;
  }
}
