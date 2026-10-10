// @ts-nocheck -- behaviour ported verbatim from the prototype's untyped JS
'use client';

// Behaviour for the Akhbar page, ported from design-reference/design/Akhbar Bash Case Study.dc.html.
import DCPage from '@/lib/DCPage';
import AkhbarView from '@/views/AkhbarView';



export default class AkhbarPage extends DCPage {

  state = { w: 1440, city: 0, cur: '', bar: false, lb: null };
  componentDidMount() {
    // SSR renders the 1440px layout; settle the real width first so DOM wiring targets the final tree.
    this.setState({ w: window.innerWidth }, () => this.initMount());
  }
  initMount() {
    this.reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saveData = navigator.connection && navigator.connection.saveData;
    this.onResize = () => this.setState({ w: window.innerWidth });
    window.addEventListener('resize', this.onResize);
    const root = document.querySelector('[data-vp]');
    this.root = root;
    // reveal
    if (!this.reduce && 'IntersectionObserver' in window) {
      const els = [...root.querySelectorAll('[data-reveal]')].filter((el) => el.getBoundingClientRect().top > window.innerHeight);
      els.forEach((el) => { el.style.opacity = '0'; el.style.transform = 'translateY(16px)'; });
      this.io = new IntersectionObserver((es) => es.forEach((e) => { if (!e.isIntersecting) return; const el = e.target; this.io.unobserve(el); el.style.transition = 'opacity 400ms cubic-bezier(0.45,0,0.2,1), transform 400ms cubic-bezier(0.45,0,0.2,1)'; el.style.opacity = '1'; el.style.transform = 'none'; }), { rootMargin: '0px 0px -10% 0px' });
      els.forEach((el) => this.io.observe(el));
    }
    // videos
    const setIcon = (b, playing) => { if (!b) return; b.querySelector('[data-i-play]').style.display = playing ? 'none' : 'block'; b.querySelector('[data-i-pause]').style.display = playing ? 'block' : 'none'; b.setAttribute('aria-label', playing ? 'Pause video' : 'Play video'); };
    const auto = !(this.reduce || saveData);
    root.querySelectorAll('video[data-auto]').forEach((v) => {
      v.muted = true;
      const b = v.parentElement.querySelector('[data-vtoggle]');
      v.__user = !auto; setIcon(b, false);
      b && b.addEventListener('click', () => { if (v.paused) { v.__user = false; v.play().catch(() => {}); } else { v.__user = true; v.pause(); } });
      v.addEventListener('play', () => setIcon(b, true)); v.addEventListener('pause', () => setIcon(b, false));
    });
    this.vio = new IntersectionObserver((es) => es.forEach((e) => { const v = e.target; if (e.isIntersecting && !v.__user) v.play().catch(() => {}); else if (!e.isIntersecting && !v.paused) v.pause(); }), { threshold: 0.5 });
    root.querySelectorAll('video[data-auto]').forEach((v) => this.vio.observe(v));
    // count-up
    if (!this.reduce) {
      const nums = [...root.querySelectorAll('[data-count]')];
      nums.forEach((el) => { el.textContent = '0' + (el.dataset.suffix || ''); });
      const cio = new IntersectionObserver((es) => es.forEach((e) => { if (!e.isIntersecting) return; cio.unobserve(e.target); const el = e.target, end = +el.dataset.count, suf = el.dataset.suffix || ''; let i = 0; const N = 12; const t = setInterval(() => { i++; el.textContent = Math.round(end * i / N) + suf; if (i >= N) clearInterval(t); }, 50); }), { threshold: 0.6 });
      nums.forEach((el) => cio.observe(el));
    }
    // panning cities (mobile)
    if (!this.reduce) root.querySelectorAll('[data-pantrack]').forEach((tr, i) => { tr.parentElement.style.overflowX = 'hidden'; tr.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-1080px)' }], { duration: 40000, iterations: Infinity, delay: -i * 6000 }); });
    // rail position + buttons
    const rail = root.querySelector('[data-rail]'), pos = root.querySelector('[data-rail-pos]');
    if (rail) {
      const n = rail.children.length;
      const upd = () => { const w = rail.children[0].offsetWidth + 12; const i = Math.min(n, Math.round(rail.scrollLeft / w) + 1); if (pos) pos.textContent = i + ' / ' + n; };
      rail.addEventListener('scroll', upd, { passive: true });
      const go = (d) => { const w = rail.children[0].offsetWidth + 12; rail.scrollBy({ left: d * w, behavior: this.reduce ? 'auto' : 'smooth' }); };
      root.querySelector('[data-rail-prev]')?.addEventListener('click', () => go(-1));
      root.querySelector('[data-rail-next]')?.addEventListener('click', () => go(1));
      rail.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1); });
    }
    // lightbox
    const open = (src, alt) => this.setState({ lb: { src, alt } });
    root.querySelectorAll('[data-zoom]').forEach((img) => { img.addEventListener('click', () => open(img.src, img.alt)); img.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(img.src, img.alt); } }); });
    root.querySelectorAll('[data-open]').forEach((b) => b.addEventListener('click', () => open(b.dataset.open, b.dataset.openAlt)));
    this.onKey = (e) => { if (e.key === 'Escape' && this.state.lb) this.setState({ lb: null }); };
    window.addEventListener('keydown', this.onKey);
    // progress rail + sticky bar
    this.onScroll = () => {
      const secs = root.querySelectorAll('[data-railsec]'); let cur = '';
      secs.forEach((s) => { if (s.getBoundingClientRect().top < window.innerHeight * 0.4) cur = s.dataset.railsec; });
      const hero = root.querySelector('#hero'), foot = root.querySelector('#footer');
      const bar = hero && foot && hero.getBoundingClientRect().bottom < 0 && foot.getBoundingClientRect().top > window.innerHeight;
      if (cur !== this.state.cur || bar !== this.state.bar) this.setState({ cur, bar });
    };
    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.onScroll();
  }
  componentWillUnmount() { window.removeEventListener('resize', this.onResize); window.removeEventListener('scroll', this.onScroll); window.removeEventListener('keydown', this.onKey); this.io && this.io.disconnect(); this.vio && this.vio.disconnect(); }
  componentDidUpdate() {
    if (this._appliedCity !== this.state.city && this.root) {
      this._appliedCity = this.state.city;
      this.root.querySelectorAll('[data-cityimg]').forEach((im) => { im.style.opacity = +im.dataset.cityimg === this.state.city ? '1' : '0'; });
      this.root.querySelectorAll('[data-citycapd]').forEach((c) => { c.style.display = +c.dataset.citycapd === this.state.city ? 'block' : 'none'; });
    }
  }
  renderVals() {
    const vp = 'auto';
    const mob = vp === 'mobile' || (vp === 'auto' && this.state.w < 768);
    const names = ["Delhi","Mumbai","Pune","Bengaluru","Gurugram","Noida"];
    const labels = ["The spark","Process","Character","World building","Motion","Game design","Experience design","Local, not generic","Brand","Under the hood","Craft","Working with Claude","Outcome"];
    return {
      vp,
      cityTabs: names.map((name, i) => { const sel = i === this.state.city; return { name, num: '0' + (i + 1), sel: String(sel), bg: sel ? '#2e2e2e' : 'transparent', bc: sel ? '#f5f5f5' : '#3a3a3a', pick: () => this.setState({ city: i }) }; }),
      showRail: (true) && !mob && vp !== 'mobile' && this.state.w >= 1024,
      rail: ["01","02","03","04","05","06","07","08","09","10","11","12","13"].map((n, i) => { const on = n === this.state.cur; return { n, href: '#' + ['spark','process','character','world','motion','game-design','experience','cities','brand','engineering','craft','claude','outcome'][i], label: n + ' ' + labels[i], c: on ? '#63c4ec' : '#7a7a7a', w: on ? '24px' : '12px' }; }),
      showBar: mob && this.state.bar,
      hasLb: !!this.state.lb, lbSrc: this.state.lb ? this.state.lb.src : '', lbAlt: this.state.lb ? this.state.lb.alt : '',
      closeLb: () => this.setState({ lb: null })
    };
  }

  render() {
    return <AkhbarView v={this.renderVals()} />;
  }
}
