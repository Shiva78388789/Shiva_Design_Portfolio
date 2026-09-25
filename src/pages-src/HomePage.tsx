// @ts-nocheck -- behaviour ported verbatim from the prototype's untyped JS
'use client';

// Behaviour for the Home page, ported from design-reference/design/Portfolio.dc.html.
import React from 'react';
import gsap from 'gsap';
import DCPage from '@/lib/DCPage';
import { sendContact } from '@/lib/contact';
import HomeView from '@/views/HomeView';



const DEFAULT_THEME = 'dark';

export default class HomePage extends DCPage {

  state = { dark: null };

  initRuler() {
    if (this._rulerInit) return;
    this._rulerInit = true;
    this._onRulerMove = (e) => {
      const r = this._rulerRefs; if (!r) return;
      const t = r.track.current, m = r.mark.current;
      if (t) t.style.transform = 'translateX(' + (-e.clientX * 0.08).toFixed(1) + 'px)';
      if (m) m.style.transform = 'translateX(' + e.clientX.toFixed(1) + 'px)';
    };
    window.addEventListener('mousemove', this._onRulerMove, { passive: true });
  }

  initTextReveal() {
    if (this._revealInit) return;
    const p = document.querySelector('[data-m="revealtext"]');
    if (!p) return;
    this._revealInit = true;
    const words = (p.textContent || '').trim().split(/\s+/);
    p.textContent = '';
    this._revealWords = words.map((w, i) => {
      const sp = document.createElement('span');
      sp.textContent = w + (i < words.length - 1 ? ' ' : '');
      sp.style.display = 'inline-block';
      sp.style.whiteSpace = 'pre';
      sp.style.opacity = '0.12';
      sp.style.transform = 'translateY(14px)';
      sp.style.filter = 'blur(3px)';
      sp.style.transition = 'opacity .45s ease, transform .45s cubic-bezier(.22,.61,.36,1), filter .45s ease';
      p.appendChild(sp);
      return sp;
    });
    this._revealTick = () => {
      const r = p.getBoundingClientRect();
      const vh = window.innerHeight;
      const prog = Math.max(0, Math.min(1, (vh * 0.88 - r.top) / (r.height + vh * 0.34)));
      const n = this._revealWords.length;
      this._revealWords.forEach((sp, i) => {
        const on = prog * n * 1.25 > i;
        sp.style.opacity = on ? '1' : '0.12';
        sp.style.transform = on ? 'translateY(0)' : 'translateY(14px)';
        sp.style.filter = on ? 'blur(0)' : 'blur(3px)';
        sp.style.transitionDelay = on ? Math.min(i * 12, 240) + 'ms' : '0ms';
      });
    };
    const photos = document.querySelectorAll('[data-slide]');
    if (photos.length) {
      const pio = new IntersectionObserver((es) => {
        es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('slid'); pio.unobserve(e.target); } });
      }, { threshold: 0.15 });
      photos.forEach((el) => pio.observe(el));
    }
    window.addEventListener('scroll', this._revealTick, { passive: true });
    window.addEventListener('resize', this._revealTick, { passive: true });
    this._revealTick();
  }

  componentDidMount() {
    setTimeout(() => this.initTextReveal(), 120);
    this.initRuler();
    const saved = localStorage.getItem('sk-portfolio-theme');
    const dark = saved ? saved === 'dark' : DEFAULT_THEME === 'dark';
    // Right-hand photo starts near the viewport's right edge.
    this.setState({ dark, pBx: this.state.pBx ?? Math.max(260, window.innerWidth - Math.min(230, Math.max(150, window.innerWidth * 0.17)) - 60) });

    const els = Array.from(this.el?.querySelectorAll?.('[data-reveal]') || document.querySelectorAll('[data-reveal]'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach((el) => io.observe(el));
    this._io = io;
    this._fallback = setTimeout(() => els.forEach((el) => el.classList.add('in')), 3000);
    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.onScroll();
    this.runTypewriter();

    this._onGaze = (e) => {
      const svg = this._blobRef && this._blobRef.current;
      const g = this._pupilRef && this._pupilRef.current;
      if (!svg || !g) return;
      const r = svg.getBoundingClientRect();
      const cx = r.left + r.width / 2, cy = r.top + r.height * 0.46;
      const dx = e.clientX - cx, dy = e.clientY - cy;
      const d = Math.hypot(dx, dy) || 1;
      const k = Math.min(1, d / 320) * 6.5;
      g.setAttribute('transform', 'translate(' + (dx / d * k).toFixed(2) + ' ' + (dy / d * k).toFixed(2) + ')');
    };
    window.addEventListener('mousemove', this._onGaze, { passive: true });
    this.setupSpinner();
    this._expMq = window.matchMedia('(max-width: 1180px)');
    this._onExpMq = () => this.setState({ expNarrow: this._expMq.matches, expOpen: null });
    this._onExpMq();
    this._expMq.addEventListener('change', this._onExpMq);

    this._youRef = this._youRef || { current: null };
    const fine = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
    if (fine) {
      this._onMove = (e) => {
        const n = this._youRef.current;
        if (!n) return;
        n.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        n.style.opacity = '1';
      };
      this._onOut = () => { if (this._youRef.current) this._youRef.current.style.opacity = '0'; };
      window.addEventListener('mousemove', this._onMove, { passive: true });
      document.addEventListener('mouseleave', this._onOut);
    }
  }

  runTypewriter() {
    this._timers = [];
    const at = (ms, fn) => this._timers.push(setTimeout(fn, ms));
    let t = 450;
    const type = (word, speed) => {
      for (let i = 1; i <= word.length; i++) {
        t += speed;
        at(t, () => this.setState({ typed: word.slice(0, i) }));
      }
    };
    const erase = (word, speed) => {
      for (let i = word.length - 1; i >= 0; i--) {
        t += speed;
        at(t, () => this.setState({ typed: word.slice(0, i) }));
      }
    };
    type('Hi there', 95);
    t += 900;
    erase('Hi there', 55);
    t += 320;
    type('welcome', 110);
    t += 1200;
    at(t, () => this.setState({ phase: 'name' }));
  }

  onScroll = () => {
    const hero = document.getElementById('top');
    const trigger = hero ? hero.offsetHeight - 140 : 320;
    const on = window.scrollY > Math.max(80, trigger);
    if (on !== this.state.glass) this.setState({ glass: on });
    const pin = window.scrollY > (hero ? hero.offsetHeight * 0.1 : 90);
    if (pin !== this.state.pinned) this.setState({ pinned: pin });
  };

  setupSpinner() {
    const el = this._blobRef && this._blobRef.current;
    if (!el || this._spinReady) return;
    const g = gsap;
    if (!g) { this._spinTry = (this._spinTry || 0) + 1; if (this._spinTry < 40) setTimeout(() => this.setupSpinner(), 150); return; }
    this._spinReady = true;

    const st = { r: 0 };
    const apply = () => { el.style.transform = 'rotate(' + st.r + 'deg)'; };
    let tw = null;
    const spinTo = (to, dur) => { if (tw) tw.kill(); tw = g.to(st, { r: to, duration: dur, ease: 'power3.out', onUpdate: apply }); };

    // intro: fast spin that eases to a stop
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { spinTo(1080, 3); io.disconnect(); } });
    }, { threshold: 0.3 });
    io.observe(el);
    this._spinIo = io;

    // hover: gentle drift
    el.addEventListener('pointerenter', () => { if (!this._dragging) spinTo(st.r + 90, 2.2); });

    const ang = (e) => { const b = el.getBoundingClientRect(); return Math.atan2(e.clientY - (b.top + b.height / 2), e.clientX - (b.left + b.width / 2)) * 180 / Math.PI; };
    let last = 0, lastT = 0, vel = 0;

    el.addEventListener('pointerdown', (e) => {
      if (tw) tw.kill();
      this._dragging = true; vel = 0;
      last = ang(e); lastT = performance.now();
      el.setPointerCapture(e.pointerId);
      el.style.cursor = 'grabbing';
    });
    el.addEventListener('pointermove', (e) => {
      if (!this._dragging) return;
      const a = ang(e);
      let d = a - last;
      if (d > 180) d -= 360; else if (d < -180) d += 360;
      const now = performance.now(), dt = Math.max(8, now - lastT);
      vel = d / dt * 1000;
      last = a; lastT = now;
      st.r += d; apply();
    });
    const release = () => {
      if (!this._dragging) return;
      this._dragging = false;
      el.style.cursor = 'grab';
      const throwTo = st.r + Math.max(-1440, Math.min(1440, vel * 0.55));
      spinTo(throwTo, 2.4);
    };
    el.addEventListener('pointerup', release);
    el.addEventListener('pointercancel', release);
  }

  expVals() {
    const open = this.state.expOpen;
    const narrow = this.state.expNarrow ?? false;
    const out = {};
    for (let i = 0; i < 4; i++) {
      const on = open === i;
      out['exp' + i + 'PW'] = narrow ? '100%' : (on ? '352px' : '0px');
      out['exp' + i + 'PH'] = narrow ? (on ? '1400px' : '0px') : 'none';
      out['exp' + i + 'Op'] = on ? 1 : 0;
    }
    return out;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    if (this._onGaze) window.removeEventListener('mousemove', this._onGaze);
    if (this._spinIo) this._spinIo.disconnect();
    if (this._expMq && this._onExpMq) this._expMq.removeEventListener('change', this._onExpMq);
    if (this._onRulerMove) window.removeEventListener('mousemove', this._onRulerMove);
    if (this._revealTick) { window.removeEventListener('scroll', this._revealTick); window.removeEventListener('resize', this._revealTick); }
    if (this._onMove) window.removeEventListener('mousemove', this._onMove);
    if (this._onOut) document.removeEventListener('mouseleave', this._onOut);
    this._io?.disconnect();
    clearTimeout(this._fallback);
    (this._timers || []).forEach(clearTimeout);
  }

  renderVals() {
    const { dark, px = 0, py = 0, pOver = false } = this.state;
    if (!this._rulerRefs) {
      this._rulerRefs = { track: React.createRef(), mark: React.createRef() };
      this._rulerTicks = [];
      for (let x = 0; x <= 3000; x += 100) this._rulerTicks.push({ left: x + 'px', label: String(x) });
    }
    const photoTransform = pOver ? 'rotate(-6deg)' : 'rotate(0deg)';
    const isDark = dark === null ? DEFAULT_THEME === 'dark' : dark;
    return {
      theme: isDark ? 'dark' : 'light',
      rulerTrack: this._rulerRefs.track,
      rulerMark: this._rulerRefs.mark,
      rulerTicks: this._rulerTicks,
      navState: this.state.glass ? 'on' : 'off',
      pinState: this.state.pinned ? 'on' : 'off',
      menuState: this.state.menu ? 'on' : 'off',
      toggleMenu: () => this.setState({ menu: !this.state.menu }),
      cf_name: this.state.cfName ?? '', cf_email: this.state.cfEmail ?? '', cf_msg: this.state.cfMsg ?? '',
      cfSet: (e) => { const n = e.target.name; this.setState({ [n === 'name' ? 'cfName' : n === 'email' ? 'cfEmail' : 'cfMsg']: e.target.value, cfNote: '' }); },
      cfMsg: this.state.cfNote || '', cfTone: this.state.cfTone || 'idle',
      cfSubmit: (e) => {
        e.preventDefault();
        const name = (this.state.cfName || '').trim(), email = (this.state.cfEmail || '').trim(), msg = (this.state.cfMsg || '').trim();
        if (!name || !email || !msg) return this.setState({ cfNote: 'Please fill in all three fields.', cfTone: 'err' });
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return this.setState({ cfNote: 'That email doesn\'t look right.', cfTone: 'err' });
        if (this._cfSending) return;
        this._cfSending = true;
        this.setState({ cfNote: 'Sending…', cfTone: 'idle' });
        sendContact({ name, email, message: msg })
          .then((how) => this.setState({
            cfNote: how === 'sent' ? 'Thanks — your message is on its way. I\'ll get back to you soon.' : 'Thanks — your mail app should open with the message ready to send.',
            cfTone: 'ok', cfName: '', cfEmail: '', cfMsg: '',
          }))
          .catch(() => this.setState({ cfNote: 'Something went wrong sending that. Please email kumarshiva1990@gmail.com instead.', cfTone: 'err' }))
          .finally(() => { this._cfSending = false; });
      },
      xToggle: (e) => { const i = +e.currentTarget.dataset.exp; this.setState((st) => ({ xOpen: (st.xOpen ?? 0) === i ? -1 : i })); },
      x0Open: (this.state.xOpen ?? 0) === 0 ? 'on' : 'off', x1Open: this.state.xOpen === 1 ? 'on' : 'off', x2Open: this.state.xOpen === 2 ? 'on' : 'off', x3Open: this.state.xOpen === 3 ? 'on' : 'off',
      x0Aria: (this.state.xOpen ?? 0) === 0 ? 'true' : 'false', x1Aria: this.state.xOpen === 1 ? 'true' : 'false', x2Aria: this.state.xOpen === 2 ? 'true' : 'false', x3Aria: this.state.xOpen === 3 ? 'true' : 'false',
      soon: (e) => { e.preventDefault(); clearTimeout(this._soonT); this.setState({ soon: true }); this._soonT = setTimeout(() => this.setState({ soon: false }), 2600); },
      soonShow: this.state.soon ? 'on' : 'off',
      closeMenu: () => this.setState({ menu: false }),
      burgerIcon: React.createElement('svg', { width: 17, height: 17, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', 'aria-hidden': true },
        React.createElement('path', { d: 'M3 6h18M3 12h18M3 18h18' })),
      closeIcon: React.createElement('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', 'aria-hidden': true },
        React.createElement('path', { d: 'M18 6 6 18M6 6l12 12' })),
      themeIcon: isDark
        ? React.createElement('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
            React.createElement('circle', { cx: 12, cy: 12, r: 4 }),
            React.createElement('path', { d: 'M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4' }))
        : React.createElement('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true },
            React.createElement('path', { d: 'M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8z' })),
      toggleTheme: () => {
        const next = !isDark;
        localStorage.setItem('sk-portfolio-theme', next ? 'dark' : 'light');
        this.setState({ dark: next });
      },
      photoTransform,
      typed: this.state.typed ?? '',
      showComment: (this.state.phase ?? 'type') !== 'name',
      showName: (this.state.phase ?? 'type') === 'name',
      pinTransform: this.state.pinOpen ? 'scale(1)' : 'scale(.6)',
      pinOpacity: this.state.pinOpen ? 1 : 0,
      youRef: (this._youRef = this._youRef || { current: null }),
      blobRef: (this._blobRef = this._blobRef || { current: null }),
      pupilRef: (this._pupilRef = this._pupilRef || { current: null }),
      pAx: this.state.pAx ?? 60, pAy: this.state.pAy ?? 130,
      pBx: this.state.pBx ?? 900, pBy: this.state.pBy ?? 420,
      onDragStart: (e) => {
        const node = e.currentTarget;
        const key = node.getAttribute('data-drag');
        const host = node.parentElement;
        const hr = host.getBoundingClientRect();
        const nr = node.getBoundingClientRect();
        const offX = e.clientX - nr.left, offY = e.clientY - nr.top;
        node.style.cursor = 'grabbing';
        const move = (ev) => {
          const x = Math.max(0, Math.min(hr.width - nr.width, ev.clientX - hr.left - offX));
          const y = Math.max(0, Math.min(hr.height - nr.height, ev.clientY - hr.top - offY));
          this.setState(key === 'a' ? { pAx: x, pAy: y } : { pBx: x, pBy: y });
        };
        const up = () => {
          node.style.cursor = 'grab';
          window.removeEventListener('pointermove', move);
          window.removeEventListener('pointerup', up);
        };
        window.addEventListener('pointermove', move);
        window.addEventListener('pointerup', up);
      },
      expEnter: (e) => {
        if (this.state.expNarrow) return;
        const card = e.currentTarget;
        const track = card.parentElement;
        const view = track && track.parentElement;
        let shift = 0;
        if (view) {
          const grow = 16 + 352;
          const openW = card.offsetWidth + grow;
          const total = track.scrollWidth + grow;
          const viewW = view.clientWidth;
          const rightNeed = card.offsetLeft + openW - viewW; // keep the panel's right edge in view
          const want = Math.max(card.offsetLeft + openW / 2 - viewW / 2, rightNeed);
          shift = Math.round(Math.min(Math.max(want, 0), Math.max(0, total - viewW)));
        }
        this.setState({ expOpen: Number(card.getAttribute('data-exp')), expShiftPx: shift });
      },
      expLeave: () => { if (!this.state.expNarrow) this.setState({ expOpen: null, expShiftPx: 0 }); },
      expShift: '-' + (this.state.expShiftPx || 0) + 'px',
      expTap: (e) => {
        if (!this.state.expNarrow) return;
        const i = Number(e.currentTarget.getAttribute('data-exp'));
        this.setState({ expOpen: this.state.expOpen === i ? null : i });
      },
      ...this.expVals(),
      revealOpacity: (this.state.phase ?? 'type') === 'name' ? 1 : 0,
      pin2Transform: this.state.pin2Open ? 'scale(1)' : 'scale(.6)',
      pin2Opacity: this.state.pin2Open ? 1 : 0,
      onPin2Enter: () => this.setState({ pin2Open: true }),
      onPin2Leave: () => this.setState({ pin2Open: false }),
      onPinEnter: () => this.setState({ pinOpen: true }),
      onPinLeave: () => this.setState({ pinOpen: false }),
      onPhotoEnter: () => this.setState({ pOver: true }),
      onPhotoLeave: () => this.setState({ pOver: false }),
    };
  }

  render() {
    return <HomeView v={this.renderVals()} />;
  }
}
