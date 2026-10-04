(() => {
  if (customElements.get('dock-nav')) return;
  const ICONS = {
    work: '<rect width="20" height="14" x="2" y="6" rx="2"></rect><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
    experience: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path>',
    contact: '<rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>',
  };
  const ITEMS = [['work', 'Work'], ['experience', 'Experience'], ['contact', 'Contact']];
  const HOME = 'Portfolio.dc.html';
  const css = `
  :host{position:fixed;left:50%;bottom:max(18px, env(safe-area-inset-bottom));z-index:900;transform:translate(-50%,0);font-family:'Montserrat',system-ui,sans-serif;transition:transform .5s cubic-bezier(.2,.9,.25,1), opacity .3s ease}
  :host([data-hidden]){transform:translate(-50%,140%);opacity:0}
  .bar{position:relative;display:flex;align-items:center;gap:2px;padding:6px;border-radius:999px;isolation:isolate;
    background:linear-gradient(180deg,rgba(255,255,255,.16),rgba(255,255,255,.06));
    -webkit-backdrop-filter:blur(18px) saturate(190%) brightness(1.08);backdrop-filter:blur(18px) saturate(190%) brightness(1.08);
    box-shadow:inset 0 1px 0 rgba(255,255,255,.45),inset 0 -1px 0 rgba(255,255,255,.08),inset 0 0 0 1px rgba(255,255,255,.14),0 10px 30px rgba(0,0,0,.35),0 2px 6px rgba(0,0,0,.2);
    transition:transform .45s cubic-bezier(.3,1.5,.5,1)}
  .bar::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:-1;
    background:radial-gradient(120% 90% at 50% -30%,rgba(255,255,255,.35),transparent 55%),radial-gradient(80% 60% at 50% 140%,rgba(255,255,255,.12),transparent 60%)}
  .lens{position:absolute;top:0;left:0;width:120px;height:120px;margin:-60px 0 0 -60px;border-radius:50%;pointer-events:none;z-index:0;opacity:0;
    background:radial-gradient(closest-side,rgba(255,255,255,.28),rgba(255,255,255,.08) 55%,transparent 72%);mix-blend-mode:plus-lighter;transition:opacity .3s ease}
  .bar:hover .lens{opacity:1}
  .pill{position:absolute;top:6px;left:0;height:calc(100% - 12px);width:0;border-radius:999px;opacity:0;pointer-events:none;z-index:0;transform-origin:center;
    background:linear-gradient(180deg,rgba(255,255,255,.34),rgba(255,255,255,.14));
    -webkit-backdrop-filter:blur(6px) saturate(220%);backdrop-filter:blur(6px) saturate(220%);
    box-shadow:inset 0 1px 0 rgba(255,255,255,.7),inset 0 -1px 1px rgba(255,255,255,.2),inset 0 0 0 1px rgba(255,255,255,.22),0 4px 14px rgba(0,0,0,.25);transition:opacity .25s}
  a{position:relative;z-index:1;display:flex;align-items:center;gap:8px;height:40px;padding:0 16px;border-radius:999px;color:rgba(255,255,255,.82);text-decoration:none;font-size:13px;font-weight:600;letter-spacing:.01em;white-space:nowrap;-webkit-tap-highlight-color:transparent;transition:color .3s ease;outline:none;cursor:pointer;user-select:none;text-shadow:0 1px 2px rgba(0,0,0,.25)}
  a:hover{color:#fff}
  a[aria-current="true"]{color:#fff}
  a:focus-visible{box-shadow:0 0 0 2px rgba(255,255,255,.8) inset}
  svg{width:18px;height:18px;flex:0 0 auto;transition:transform .35s cubic-bezier(.3,1.6,.4,1)}
  a:active svg{transform:scale(.82)}
  a.pop svg{animation:pop .5s cubic-bezier(.3,1.6,.4,1)}
  @keyframes pop{0%{transform:scale(.75) rotate(-8deg)}60%{transform:scale(1.12) rotate(3deg)}100%{transform:scale(1)}}
  .sep{width:1px;height:20px;background:rgba(255,255,255,.18);margin:0 2px;position:relative;z-index:1}
  .ripple{position:absolute;border-radius:50%;background:rgba(255,255,255,.35);transform:scale(0);animation:rip .6s ease-out forwards;pointer-events:none}
  @keyframes rip{to{transform:scale(1);opacity:0}}
  @media (max-width:600px){
    :host{bottom:max(12px, env(safe-area-inset-bottom))}
    .bar{padding:5px;border-radius:26px}
    .pill{top:5px;height:calc(100% - 10px);border-radius:21px}
    a{flex-direction:column;justify-content:center;gap:3px;height:54px;min-width:84px;padding:0 10px;font-size:10.5px;border-radius:21px}
    svg{width:20px;height:20px}
    .sep{display:none}
    .lens{display:none}
  }
  @media (min-width:601px) and (max-width:1180px){
    a{height:44px;padding:0 18px;font-size:13.5px}
  }
  @media (prefers-reduced-motion:reduce){.pill,svg,:host,.bar{transition:none!important}a.pop svg{animation:none}}
  `;

  class DockNav extends HTMLElement {
    connectedCallback() {
      if (this._init) return;
      this._init = true;
      const root = this.attachShadow({ mode: 'open' });
      this._onHome = /portfolio\.dc\.html$/i.test(decodeURIComponent(location.pathname)) || this.hasAttribute('home');
      const sep = '<span class="sep" aria-hidden="true"></span>';
      root.innerHTML = `<style>${css}</style><nav class="bar" aria-label="Site"><span class="lens" aria-hidden="true"></span><span class="pill"></span>${ITEMS.map(([id, label], i) => `${i ? sep : ''}<a data-id="${id}" href="${this._onHome ? '#' + id : HOME + '#' + id}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[id]}</svg><span>${label}</span></a>`).join('')}</nav>`;
      this._pill = root.querySelector('.pill');
      this._links = Array.from(root.querySelectorAll('a'));
      this._links.forEach((a) => a.addEventListener('click', (e) => this._click(e, a)));
      this._bar = root.querySelector('.bar');
      this._lens = root.querySelector('.lens');
      this._bar.addEventListener('pointermove', (e) => {
        const r = this._bar.getBoundingClientRect();
        this._lens.style.transform = `translate(${e.clientX - r.left}px,${e.clientY - r.top}px)`;
        const nx = (e.clientX - r.left) / r.width - 0.5;
        this._bar.style.transform = `scale(1.03) translateX(${nx * 4}px)`;
      });
      this._bar.addEventListener('pointerleave', () => { this._bar.style.transform = ''; });
      this._bar.addEventListener('pointerdown', () => { this._bar.style.transform = 'scale(0.97)'; });
      this._bar.addEventListener('pointerup', () => { this._bar.style.transform = 'scale(1.03)'; });
      this._onResize = () => this._movePill(this._active, true);
      window.addEventListener('resize', this._onResize);
      if (this._onHome) {
        this._watch();
        if (location.hash && ITEMS.some(([id]) => '#' + id === location.hash)) {
          const id = location.hash.slice(1);
          setTimeout(() => this._scrollTo(id), 450);
        }
      } else {
        this.setActive(this.getAttribute('active') || 'work');
      }
      this._lastY = window.scrollY;
      this._onScroll = () => {
        const y = window.scrollY, d = y - this._lastY;
        if (this._lock && Date.now() < this._lock) { this._lastY = y; this.removeAttribute('data-hidden'); return; }
        if (window.innerHeight + y >= document.documentElement.scrollHeight - 120) { this._lastY = y; this.removeAttribute('data-hidden'); return; }
        if (Math.abs(d) < 6) return;
        if (window.innerWidth <= 1180 && d > 0 && y > 200) this.setAttribute('data-hidden', '');
        else this.removeAttribute('data-hidden');
        this._lastY = y;
      };
      window.addEventListener('scroll', this._onScroll, { passive: true });
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('scroll', this._onScroll);
      if (this._io) this._io.disconnect();
    }
    setActive(id, animate = true) {
      if (this._active === id) return;
      this._active = id;
      this._links.forEach((a) => a.setAttribute('aria-current', a.dataset.id === id ? 'true' : 'false'));
      this._movePill(id, !animate);
    }
    _movePill(id, instant) {
      const a = this._links && this._links.find((l) => l.dataset.id === id);
      const p = this._pill;
      if (!a) { p.style.opacity = '0'; this._pillPos = null; return; }
      const to = { x: a.offsetLeft, w: a.offsetWidth };
      const from = this._pillPos;
      const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      p.style.width = to.w + 'px';
      p.style.transform = `translateX(${to.x}px)`;
      p.style.opacity = '1';
      this._pillPos = to;
      if (instant || !from || reduce || (from.x === to.x && from.w === to.w)) {
        if (!from && !instant && !reduce) p.animate([{ transform: `translateX(${to.x}px) scale(.6)`, opacity: 0 }, { transform: `translateX(${to.x}px) scale(1.06)`, opacity: 1, offset: .7 }, { transform: `translateX(${to.x}px) scale(1)`, opacity: 1 }], { duration: 420, easing: 'cubic-bezier(.3,1.4,.5,1)' });
        return;
      }
      if (this._pillAnim) this._pillAnim.cancel();
      const L = Math.min(from.x, to.x), R = Math.max(from.x + from.w, to.x + to.w);
      const right = to.x > from.x;
      this._pillAnim = p.animate([
        { transform: `translateX(${from.x}px) scale(1,1)`, width: from.w + 'px' },
        { transform: `translateX(${right ? from.x : L}px) scale(1,.86)`, width: (R - L) * 0.7 + 'px', offset: .35 },
        { transform: `translateX(${right ? R - (R - L) * 0.7 : L}px) scale(1,.9)`, width: (R - L) * 0.7 + 'px', offset: .6 },
        { transform: `translateX(${to.x}px) scale(1.04,1.06)`, width: to.w + 'px', offset: .82 },
        { transform: `translateX(${to.x}px) scale(1,1)`, width: to.w + 'px' }
      ], { duration: 620, easing: 'cubic-bezier(.45,0,.2,1)' });
    }
    _click(e, a) {
      const r = a.getBoundingClientRect(), s = Math.max(r.width, r.height) * 1.6, dot = document.createElement('span');
      dot.className = 'ripple';
      dot.style.cssText = `width:${s}px;height:${s}px;left:${e.clientX - r.left - s / 2}px;top:${e.clientY - r.top - s / 2}px`;
      a.appendChild(dot); setTimeout(() => dot.remove(), 650);
      a.classList.remove('pop'); a.offsetWidth; a.classList.add('pop');
      const id = a.dataset.id;
      this.setActive(id);
      if (this._onHome) {
        e.preventDefault();
        this._lock = Date.now() + 1600;
        this._scrollTo(id);
        history.replaceState(null, '', '#' + id);
      } else {
        e.preventDefault();
        const href = a.getAttribute('href');
        document.documentElement.style.transition = 'opacity .28s ease';
        document.documentElement.style.opacity = '0';
        setTimeout(() => { location.href = href; }, 280);
      }
    }
    _scrollTo(id) {
      const el = document.getElementById(id);
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.scrollY;
      if (window.__lenis) window.__lenis.scrollTo(y, { duration: 1.2 });
      else window.scrollTo({ top: y, behavior: 'smooth' });
    }
    _watch() {
      const els = ITEMS.map(([id]) => document.getElementById(id)).filter(Boolean);
      if (!els.length) { if ((this._tries = (this._tries || 0) + 1) < 40) setTimeout(() => this._watch(), 150); return; }
      const vis = new Map();
      this._io = new IntersectionObserver((ents) => {
        ents.forEach((en) => vis.set(en.target.id, en.intersectionRatio > 0 ? en.boundingClientRect.top : null));
        if (this._lock && Date.now() < this._lock) return;
        let best = null, bestTop = -Infinity;
        vis.forEach((top, id) => { if (top !== null && top <= window.innerHeight * 0.45 && top > bestTop) { best = id; bestTop = top; } });
        if (best) this.setActive(best);
        else if (![...vis.values()].some((v) => v !== null && v < window.innerHeight * 0.45)) { this._active = null; this._links.forEach((a) => a.setAttribute('aria-current', 'false')); this._pill.style.opacity = '0'; }
      }, { threshold: [0, 0.01, 0.25, 0.5, 0.75, 1], rootMargin: '0px 0px -40% 0px' });
      els.forEach((e) => this._io.observe(e));
      this._poll = () => { if (this._io) { els.forEach((e) => { this._io.unobserve(e); this._io.observe(e); }); } };
      window.addEventListener('scroll', () => { clearTimeout(this._pt); this._pt = setTimeout(this._poll, 120); }, { passive: true });
    }
  }
  customElements.define('dock-nav', DockNav);
})();
