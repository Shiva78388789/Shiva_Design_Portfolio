// @ts-nocheck -- behaviour ported verbatim from the prototype's untyped JS
'use client';

// Behaviour for the Home page, ported from design-reference/design/Portfolio.dc.html.
import React from 'react';
import gsap from 'gsap';
import DCPage from '@/lib/DCPage';
import { submitContactForm } from '@/lib/contactForm';
import HomeView from '@/views/HomeView';



export default class HomePage extends DCPage {

  state = { w: 1440, cfNote: '' };
  ftRef = React.createRef(); clockRef = React.createRef();
  componentDidMount() {
    // SSR renders the 1440px layout; settle the real width first so DOM wiring targets the final tree.
    this.setState({ w: window.innerWidth }, () => this.initMount());
  }
  initMount() {
    if (!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) document.querySelectorAll('[data-lm]').forEach((el) => el.animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }], { duration: 3500, iterations: Infinity }));
    this.onResize = () => this.setState({ w: window.innerWidth });
    window.addEventListener('resize', this.onResize);
    this.mouse = { x: -9999, y: -9999 };
    this.onMove = (e) => { this.mouse.x = e.clientX; this.mouse.y = e.clientY; };
    this.onLeave = () => { this.mouse.x = -9999; this.mouse.y = -9999; };
    window.addEventListener('mousemove', this.onMove, { passive: true });
    document.addEventListener('mouseleave', this.onLeave);
    this.vcLast = performance.now(); this.vcScrollY = window.scrollY; this.vcBoost = 0; this.vcDir = -1;
    const loop = () => { this.tickRepel(); this.tickLines(); this.tickVC(); this.raf = requestAnimationFrame(loop); };
    this.raf = requestAnimationFrame(loop);
    this.setupFloat();
    this.setupNotice();
    this.setupFooter();
    setTimeout(() => this.runIntro(), 60);
  }
  componentDidUpdate() { this.setupFloat(); this.setupNotice(); }
  measureFooter() {
    const f = this.ftRef.current; if (!f) return;
    const H = f.offsetHeight, vh = window.innerHeight;
    f.style.setProperty('--ft-m', Math.min(H, vh) + 'px');
    const sd = window.CSS && CSS.supports && CSS.supports('animation-timeline: view()');
    if (!sd) { const fits = H <= vh; f.style.position = fits ? 'sticky' : 'relative'; f.style.bottom = fits ? '0' : ''; }
  }
  setupFooter() {
    const clk = () => { if (this.clockRef.current) this.clockRef.current.textContent = new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit' }); };
    clk(); this.clockT = setInterval(clk, 1000);
    this.measureFooter();
    if (window.ResizeObserver && this.ftRef.current) { this.ftRO = new ResizeObserver(() => this.measureFooter()); this.ftRO.observe(this.ftRef.current); }
    this.onFtResize = () => this.measureFooter(); window.addEventListener('resize', this.onFtResize);
    const f = this.ftRef.current; if (!f || !window.IntersectionObserver) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    this.ftIO = new IntersectionObserver((es) => es.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target.__rvChild || en.target;
      setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'none'; }, +(el.dataset.delay || 0));
      this.ftIO.unobserve(en.target);
    }), { threshold: 0.12 });
    f.querySelectorAll('[data-ft-reveal]').forEach((el) => {
      const line = el.dataset.ftReveal === 'line';
      el.style.transition = 'opacity 1s cubic-bezier(.2,.7,.2,1), transform 1.1s cubic-bezier(.2,.7,.2,1)';
      if (line) { el.style.transform = 'translateY(105%)'; el.parentElement.__rvChild = el; this.ftIO.observe(el.parentElement); }
      else { el.style.opacity = '0'; el.style.transform = 'translateY(40px)'; this.ftIO.observe(el); }
    });
  }
  setupNotice() {
    const g = gsap;
    if (!g) { if (!this.__nt) this.__nt = setTimeout(() => { this.__nt = null; this.setupNotice(); }, 200); return; }
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.querySelectorAll('[data-notice]').forEach((el) => {
      if (el.__gs) return;
      el.__gs = true;
      const track = el.querySelector('[data-notice-track]');
      if (reduce || !track) return;
      g.from(el, { height: 0, duration: 0.6, delay: 0.3, ease: 'power3.out', clearProps: 'height' });
      const loop = g.fromTo(track, { xPercent: 0 }, { xPercent: -50, duration: 40, ease: 'none', repeat: -1 });
      el.addEventListener('mouseenter', () => g.to(loop, { timeScale: 0.2, duration: 0.4 }));
      el.addEventListener('mouseleave', () => g.to(loop, { timeScale: 1, duration: 0.4 }));
    });
  }
  tickVC() {
    const now = performance.now();
    const dt = Math.min(0.05, (now - this.vcLast) / 1000); this.vcLast = now;
    const sy = window.scrollY, dy = sy - this.vcScrollY; this.vcScrollY = sy;
    if (Math.abs(dy) > 0.5) this.vcDir = dy > 0 ? -1 : 1;
    const target = Math.min(14, Math.abs(dy) / Math.max(dt, 0.001) / 120);
    this.vcBoost += (target - this.vcBoost) * 0.08;
    if (this.__reduced === undefined) this.__reduced = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    document.querySelectorAll('[data-vc]').forEach((vc) => {
      const track = vc.firstElementChild; if (!track) return;
      const st = vc.__vc || (vc.__vc = this.initVC(vc));
      const half = track.scrollWidth / 2; if (!half) return;
      st.ts += ((st.hover ? 0.15 : 1) - st.ts) * 0.08;
      const base = vc.dataset.vc === 'mob' ? 34 : 48;
      if (!st.drag && !this.__reduced) { st.x += this.vcDir * base * (1 + this.vcBoost) * st.ts * dt + st.fling * dt; st.fling *= 0.94; }
      st.x = ((st.x % half) - half) % half;
      track.style.transform = `translate3d(${st.x.toFixed(2)}px,0,0)`;
      if (vc.dataset.vc === 'mob') {
        const cx = window.innerWidth / 2;
        vc.querySelectorAll('[data-vc-sharp]').forEach((img) => {
          const r = img.getBoundingClientRect();
          const on = Math.abs(r.left + r.width / 2 - cx) < r.width * 0.55;
          if (img.__on !== on) { img.__on = on; img.style.opacity = on ? '0' : '1'; }
        });
      }
    });
  }
  initVC(vc) {
    const st = { x: 0, ts: 1, hover: false, drag: false, fling: 0, px: 0, pt: 0 };
    vc.addEventListener('mouseenter', () => { st.hover = true; });
    vc.addEventListener('mouseleave', () => { st.hover = false; });
    vc.addEventListener('pointerdown', (e) => { st.drag = true; st.px = e.clientX; st.pt = performance.now(); st.fling = 0; vc.style.cursor = vc.dataset.vc === 'desk' ? 'grabbing' : ''; });
    window.addEventListener('pointermove', (e) => {
      if (!st.drag) return;
      const t = performance.now(), d = e.clientX - st.px;
      st.x += d; st.fling = d / Math.max((t - st.pt) / 1000, 0.008); st.px = e.clientX; st.pt = t;
    });
    const up = () => { if (!st.drag) return; st.drag = false; st.fling = Math.max(-3000, Math.min(3000, st.fling)); vc.style.cursor = vc.dataset.vc === 'desk' ? 'grab' : ''; };
    window.addEventListener('pointerup', up); window.addEventListener('pointercancel', up);
    return st;
  }
  tickLines() {
    const p = document.querySelector('[data-line-reveal]');
    if (!p) return;
    const lines = p.querySelectorAll('[data-line]');
    if (this.__reduced === undefined) this.__reduced = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    if (this.__reduced) return;
    const vh = window.innerHeight;
    const r = p.getBoundingClientRect();
    const start = vh * 0.92, end = vh * 0.4;
    const prog = Math.max(0, Math.min(1, (start - r.top) / (start - end + r.height * 0.5)));
    const n = lines.length, span = 1 / (n * 0.55);
    lines.forEach((el, i) => {
      const s = (i / n) * (1 - span * 0.6);
      let t = Math.max(0, Math.min(1, (prog - s) / span));
      t = 1 - Math.pow(1 - t, 3);
      const key = t.toFixed(3);
      if (el.__t === key) return;
      el.__t = key;
      el.style.transform = `translateY(${(1 - t) * 100}%) rotate(${(1 - t) * 3}deg)`;
      el.style.opacity = String(0.1 + 0.9 * t);
      el.style.filter = t >= 1 ? 'none' : `blur(${((1 - t) * 12).toFixed(2)}px)`;
      el.style.transformOrigin = '0 0';
    });
  }
  runIntro() {
    if (this.__intro) return;
    this.__intro = true;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const top = document.querySelector('#top');
    const h1 = top && top.querySelector('h1');
    if (!h1) return;
    const box = h1.parentElement;
    const rest = [...top.children].filter((c) => c !== box);
    const about = document.querySelector('#about');
    if (about) rest.push(about);
    rest.forEach((el) => { el.style.opacity = '0'; });
    const handles = [...box.querySelectorAll(':scope > span')];
    handles.forEach((h) => { h.style.opacity = '0'; });
    const bc = box.style.borderColor;
    box.style.borderColor = 'transparent';
    h1.style.visibility = 'hidden';
    const W = box.offsetWidth, H = box.offsetHeight;
    const frame = document.createElement('div');
    Object.assign(frame.style, { position: 'absolute', left: '-2px', top: '-2px', width: '0px', height: '0px', border: '2px solid #63c4ec', boxSizing: 'border-box', background: 'rgba(99,196,236,0.08)', pointerEvents: 'none' });
    const cur = document.createElement('div');
    cur.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="#1c1c1c" stroke="#f5f5f5" stroke-width="1.6" stroke-linejoin="round"><path d="M4 4l16 6.5-6.5 2.9L10.6 20z"></path></svg>';
    Object.assign(cur.style, { position: 'absolute', left: '-6px', top: '-6px', zIndex: 5, opacity: '0', pointerEvents: 'none', lineHeight: 0 });
    box.appendChild(frame); box.appendChild(cur);
    const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
    const tween = (dur, fn) => new Promise((res) => { const t0 = performance.now(); const step = (now) => { const t = Math.min(1, (now - t0) / dur); fn(ease(t)); t < 1 ? requestAnimationFrame(step) : res(); }; requestAnimationFrame(step); });
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    (async () => {
      await wait(250);
      await tween(550, (e) => { cur.style.opacity = e; cur.style.transform = `translate(${-60 * (1 - e)}px,${-40 * (1 - e)}px)`; });
      await wait(160);
      await tween(1000, (e) => { const w = W * e, h = H * e; frame.style.width = w + 'px'; frame.style.height = h + 'px'; cur.style.transform = `translate(${w}px,${h}px)`; });
      box.style.borderColor = bc;
      frame.remove();
      handles.forEach((h, i) => { h.style.opacity = ''; h.animate([{ transform: 'scale(0)', opacity: 0 }, { transform: 'scale(1)', opacity: 1 }], { duration: 240, delay: i * 50, easing: 'cubic-bezier(.3,1.6,.5,1)', fill: 'backwards' }); });
      tween(400, (e) => { cur.style.opacity = 1 - e; cur.style.transform = `translate(${W + 30 * e}px,${H + 24 * e}px)`; }).then(() => cur.remove());
      await wait(200);
      const text = h1.textContent;
      const t = h1.cloneNode(false);
      t.style.cssText = h1.style.cssText;
      Object.assign(t.style, { visibility: 'visible', position: 'absolute', left: h1.offsetLeft + 'px', top: h1.offsetTop + 'px', margin: '0' });
      const caret = document.createElement('span');
      Object.assign(caret.style, { display: 'inline-block', width: '3px', height: '0.78em', marginLeft: '4px', background: '#63c4ec', verticalAlign: '-0.06em' });
      caret.animate([{ opacity: 1 }, { opacity: 1, offset: 0.5 }, { opacity: 0, offset: 0.51 }, { opacity: 0 }], { duration: 700, iterations: Infinity });
      const txt = document.createTextNode('');
      t.appendChild(txt); t.appendChild(caret); box.appendChild(t);
      for (let i = 1; i <= text.length; i++) { txt.data = text.slice(0, i); await wait(text[i - 1] === ' ' ? 140 : 75 + Math.random() * 45); }
      await wait(420);
      t.remove();
      h1.style.visibility = '';
      rest.forEach((el, i) => {
        const float = el.hasAttribute('data-float');
        el.style.opacity = '';
        el.animate(float ? [{ opacity: 0 }, { opacity: 1 }] : [{ opacity: 0, transform: 'translateY(14px)' }, { opacity: 1, transform: 'none' }], { duration: 560, delay: i * 110, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'backwards' });
      });
    })();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('mousemove', this.onMove);
    document.removeEventListener('mouseleave', this.onLeave);
    cancelAnimationFrame(this.raf);
    clearInterval(this.clockT); this.ftIO && this.ftIO.disconnect(); this.ftRO && this.ftRO.disconnect(); window.removeEventListener('resize', this.onFtResize);
  }
  setupFloat() {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const cfg = { 1: [3000, 0], 2: [3400, -900], 3: [2800, -1700], 4: [3000, 0], 5: [2800, -1700], 6: [3400, -900] };
    document.querySelectorAll('[data-shimmer]').forEach((btn) => {
      if (btn.__fx) return;
      btn.__fx = true;
      const shine = btn.querySelector('[data-shine]');
      const icon = btn.querySelector('[data-ring]');
      const ring = () => icon && icon.animate([
        { transform: 'rotate(0)' }, { transform: 'rotate(-16deg)' }, { transform: 'rotate(14deg)' },
        { transform: 'rotate(-12deg)' }, { transform: 'rotate(10deg)' }, { transform: 'rotate(-6deg)' },
        { transform: 'rotate(4deg)' }, { transform: 'rotate(0)' }
      ], { duration: 600, easing: 'ease-in-out' });
      let ringTimer = null;
      btn.addEventListener('mouseenter', () => {
        shine && shine.animate([{ transform: 'translateX(-120%) skewX(-18deg)' }, { transform: 'translateX(260%) skewX(-18deg)' }], { duration: 750, easing: 'ease-in-out' });
        ring(); clearInterval(ringTimer); ringTimer = setInterval(ring, 900);
        const lb = btn.querySelector('[data-hover-label]'); if (lb) { lb.style.opacity = '1'; lb.style.transform = 'none'; }
      });
      btn.addEventListener('mouseleave', () => { clearInterval(ringTimer); ringTimer = null; const lb = btn.querySelector('[data-hover-label]'); if (lb && !btn.closest('[data-view="mobile"]')) { lb.style.opacity = '0'; lb.style.transform = 'translateY(6px)'; } });
      if (!(window.matchMedia && window.matchMedia('(hover: hover)').matches)) setInterval(ring, 3000);
    });
    document.querySelectorAll('[data-blip]').forEach((el) => {
      if (el.__fx) return;
      el.__fx = true;
      el.animate([{ opacity: 1 }, { opacity: 0.45 }, { opacity: 1 }], { duration: 2400, iterations: Infinity, easing: 'ease-in-out' });
      const ring = el.querySelector('[data-blip-ring]');
      ring && ring.animate([{ transform: 'scale(1)', opacity: 0.6 }, { transform: 'scale(3)', opacity: 0 }], { duration: 2400, iterations: Infinity, easing: 'ease-out' });
    });
    document.querySelectorAll('[data-mascot]').forEach((el) => {
      if (el.__fx) return;
      el.__fx = true;
      const arm = el.querySelector('[data-wave]');
      const bob = el.querySelector('[data-bob]');
      const bub = el.querySelector('[data-bubble]');
      arm && arm.animate([
        { transform: 'rotate(0deg)', offset: 0 }, { transform: 'rotate(-70deg)', offset: 0.12 },
        { transform: 'rotate(-40deg)', offset: 0.22 }, { transform: 'rotate(-75deg)', offset: 0.32 },
        { transform: 'rotate(-40deg)', offset: 0.42 }, { transform: 'rotate(-70deg)', offset: 0.52 },
        { transform: 'rotate(0deg)', offset: 0.66 }, { transform: 'rotate(0deg)', offset: 1 }
      ], { duration: 2600, iterations: Infinity, easing: 'ease-in-out' });
      bob && bob.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(-4%)' }, { transform: 'translateY(0)' }], { duration: 1300, iterations: Infinity, easing: 'ease-in-out' });
      bub && bub.animate([
        { transform: 'scale(0.6) rotate(-6deg)', opacity: 0, offset: 0 }, { transform: 'scale(1.08) rotate(2deg)', opacity: 1, offset: 0.1 },
        { transform: 'scale(1) rotate(0deg)', opacity: 1, offset: 0.16 }, { transform: 'scale(1) rotate(0deg)', opacity: 1, offset: 0.62 },
        { transform: 'scale(0.9)', opacity: 0, offset: 0.74 }, { transform: 'scale(0.6)', opacity: 0, offset: 1 }
      ], { duration: 2600, iterations: Infinity, easing: 'ease-out' });
    });
    document.querySelectorAll('[data-spin]').forEach((el) => {
      if (el.__fx) return;
      el.__fx = true;
      el.animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }], { duration: 12000, iterations: Infinity, easing: 'linear' });
    });
    document.querySelectorAll('[data-float]').forEach((el) => {
      if (el.__fx) return;
      el.__fx = true;
      const [dur, delay] = cfg[el.getAttribute('data-float')] || [3000, 0];
      el.animate([{ transform: 'translateY(-14px)' }, { transform: 'translateY(14px)' }],
        { duration: dur, delay, iterations: Infinity, direction: 'alternate', easing: 'ease-in-out' });
    });
  }
  tickRuler() {
    const mark = document.querySelector('[data-rmark]');
    if (!mark) return;
    const host = mark.parentElement.getBoundingClientRect();
    const x = this.mouse.x - host.left;
    const on = this.mouse.x > -9000 && x >= 0 && x <= host.width;
    mark.style.opacity = on ? '1' : '0';
    if (!on) return;
    const v = Math.round(x - 6);
    mark.style.transform = `translateX(${x}px)`;
    const label = mark.querySelector('[data-rmark-label]');
    if (label && label.__v !== v) { label.__v = v; label.textContent = v; }
    mark.parentElement.querySelectorAll(':scope > span').forEach((s) => { s.style.opacity = Math.abs(s.offsetLeft - x) < 22 ? '0' : '1'; });
  }
  tickStack() {
    const wrap = document.querySelector('[data-stack]');
    if (!wrap) return;
    const [base, step] = wrap.getAttribute('data-stack').split(',').map(Number);
    const cards = [...wrap.children];
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    cards.forEach((c, i) => {
      if (!c.__stk) {
        c.__stk = true;
        Object.assign(c.style, { position: 'sticky', top: base + i * step + 'px', transformOrigin: '50% 0%', willChange: 'transform' });
      }
    });
    if (reduce) return;
    cards.forEach((c, i) => {
      let depth = 0;
      const h = c.offsetHeight || 1;
      const myTop = c.getBoundingClientRect().top;
      for (let j = i + 1; j < cards.length; j++) {
        const nt = cards[j].getBoundingClientRect().top;
        depth += Math.max(0, Math.min(1, (myTop + h - nt) / h));
      }
      const sc = 1 - depth * 0.045;
      const d = Math.min(depth, 3);
      const br = Math.max(0.3, 1 - d * 0.24);
      const bl = d * 2.4;
      c.style.transform = depth ? `scale(${sc.toFixed(4)})` : '';
      c.style.filter = depth ? `brightness(${br.toFixed(3)}) blur(${bl.toFixed(2)}px)` : '';
    });
  }
  tickRepel() {
    this.tickRuler();
    this.tickStack();
    const canHover = !this.isMob && window.matchMedia && window.matchMedia('(hover: hover)').matches;
    const R = 170, MAX = 70;
    document.querySelectorAll('[data-repel]').forEach((el) => {
      const st = el.__rp || (el.__rp = { x: 0, y: 0, tx: 0, ty: 0 });
      st.tx = 0; st.ty = 0;
      const pill = el.querySelector('span');
      if (canHover && pill) {
        const r = pill.getBoundingClientRect();
        const cx = r.left + r.width / 2 - st.x, cy = r.top + r.height / 2 - st.y;
        const dx = cx - this.mouse.x, dy = cy - this.mouse.y;
        const d = Math.hypot(dx, dy) || 1;
        if (d < R) {
          const f = Math.pow(1 - d / R, 1.4) * MAX;
          st.tx = (dx / d) * f; st.ty = (dy / d) * f;
        }
      }
      st.x += (st.tx - st.x) * 0.1; st.y += (st.ty - st.y) * 0.1;
      if (Math.abs(st.x) < 0.05 && Math.abs(st.y) < 0.05 && !st.tx && !st.ty) { st.x = 0; st.y = 0; }
      el.style.transform = `translate(${st.x.toFixed(2)}px, ${st.y.toFixed(2)}px) rotate(${(st.x * 0.12).toFixed(2)}deg)`;
    });
  }
  renderVals() {
    const vp = 'auto';
    const mob = vp === 'mobile' || (vp === 'auto' && this.state.w < 768);
    this.isMob = mob;
    const rulerDesk = Array.from({ length: 15 }, (_, i) => ({ n: i * 100, x: 6 + i * 100 }));
    const rulerMob = [600, 700, 800, 900].map((n, i) => ({ n, x: `calc(50% + ${-111 + i * 100}px)` }));
    return {
      isDesk: !mob, isMob: mob,
      showRuler: true,
      showDock: true,
      rulerDesk, rulerMob,
      ftRef: this.ftRef, clockRef: this.clockRef,
      ftLinks: [['Home', '#top'], ['About', '#about'], ['Tools', '#tools'], ['Work', '#work'], ['Experience', '#experience']].map(([label, href]) => ({ label, href })),
      ftSocials: [['LinkedIn', 'https://www.linkedin.com/in/shiva-kumar-10106b143/'], ['Behance', 'https://www.behance.net/kumarshiva6b36'], ['Dribbble', 'https://dribbble.com/shivakumar']].map(([label, href]) => ({ label, href })),
      wordmark: 'SHIVA KUMAR'.split('').map((c, i) => ({ c: c === ' ' ? '\u00a0' : c, d: i * 45 })),
      toTop: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
      hasNote: !!this.state.cfNote, cfNote: this.state.cfNote,
      onSubmit: (e) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        const name = String(f.get('name') || '').trim();
        const email = String(f.get('email') || '').trim();
        const msg = String(f.get('message') || '').trim();
        if (!name || !email || !msg) return this.setState({ cfNote: 'Please fill in all three fields.' });
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return this.setState({ cfNote: 'That email doesn\'t look right.' });
        submitContactForm(this, e.currentTarget, name, email, msg);
      }
    };
  }

  render() {
    return <HomeView v={this.renderVals()} />;
  }
}
