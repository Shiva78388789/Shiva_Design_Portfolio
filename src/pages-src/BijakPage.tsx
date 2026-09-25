// @ts-nocheck -- behaviour ported verbatim from the prototype's untyped JS
'use client';

// Behaviour for the Bijak page, ported from design-reference/design/Bijak Web Design System.dc.html.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import DCPage from '@/lib/DCPage';
import BijakView from '@/views/BijakView';

// The motion setup targets a few elements the final layout dropped.
gsap.config({ nullTargetWarn: false });

const BPS = [
  { label: 'Mobile · 360–600dp', cols: 4, margin: '16px', gutter: '8px', nav: '0px', note: '360 − 32 = 328', sticky: 'At a breakpoint of 360–600dp this grid will use 4 columns' },
  { label: 'Tablet · 600–719dp', cols: 8, margin: '16px', gutter: '8px', nav: '0px', note: '600 − 32 = 568', sticky: 'At a breakpoint of 600dp–719 this grid will use 8 columns. Layout will rearrange with 8 columns after the breakpoint' },
  { label: 'Desktop · 1280dp', cols: 12, margin: '24px', gutter: '10px', nav: '18%', note: '1280 − 48 (Spacing) − 209 (Navigation Drawer) = 1023', sticky: 'At a breakpoint of 1280dp this grid will use 12 columns. Layout will rearrange with 12 columns after the breakpoint' },
];
const SPACING = [8, 12, 16, 20, 24, 28, 32, 40, 48, 56];
const PALETTES = [
  { name: 'Body Text Colors', items: [['#25282B', 'Default Bodytext'], ['#A0A4A8', 'Subdued Bodytext'], ['#BD276D', 'Link Bodytext']] },
  { name: 'Layout Colors', items: [['#FFFFFF', 'Page Background'], ['#F1F4F7', 'Alternative Background']] },
  { name: 'Action Colors', items: [['#219653', 'Primary Action'], ['#CACCCF', 'Neutral Action'], ['#DD3732', 'Negative Action']] },
  { name: 'Status Colors', items: [['#DD3732', 'Critical'], ['#FBAF18', 'Warning'], ['#219653', 'Success'], ['#BD276D', 'Information']] },
  { name: 'Primary Color Palette', items: [['#E7F6EC', ''], ['#56C381', ''], ['#33B86B', ''], ['#219653', ''], ['#198548', '']] },
  { name: 'Neutral Color Palette', items: [['#E8E8E8', ''], ['#CACCCF', ''], ['#A0A4A8', ''], ['#52575C', ''], ['#25282B', '']] },
  { name: 'System Colors - Red', items: [['#FCE9EC', ''], ['#ED646A', ''], ['#DD3732', ''], ['#BD252B', ''], ['#A1131A', '']] },
  { name: 'System Colors - Yellow', items: [['#FFF0D1', ''], ['#FCC047', ''], ['#FBAF18', ''], ['#E39E14', ''], ['#C98C10', '']] },
];
const TYPES = [
  ['Headline 1', '60px', '0.25px'], ['Headline 2', '48px', '0.25px'], ['Headline 3', '34px', '0.25px'], ['Headline 4', '24px', '0px'],
  ['Headline 5', '20px', '0.15px'], ['Subtitle 1', '16px', '0.15px'], ['Subtitle 2', '14px', '0.1px'], ['Body 1', '16px', '0.5px'],
  ['Body 2', '14px', '0.25px'], ['Caption', '12px', '0.4px'], ['Button', '14px', '1.25px'], ['overline', '10px', '1.5px'],
];
const WEIGHTS = [['Regular', 400], ['Medium', 500], ['Bold', 700]];
const BTN_STATES = ['enabled', 'disabled', 'loading'];
const IN_STATES = ['enabled', 'focus', 'disabled', 'error'];
const CURSORS = [
  ['default', 'default'], ['link', 'pointer'], ['scroll', 'all-scroll'], ['help', 'help'], ['wait', 'wait'], ['text', 'text'], ['copy', 'copy'],
  ['not allowed', 'not-allowed'], ['zoom in', 'zoom-in'], ['zoom out', 'zoom-out'], ['grab', 'grab'], ['grabbing', 'grabbing'], ['unavailable', 'not-allowed'],
];
const STAGES = ['Research', 'In Design', 'On - Hold', 'Testing', 'Engineering', 'Developed'];
const CHECK = ['uncheck', 'check', 'indeterminate'];

export default class BijakPage extends DCPage {

  state = { bp: 2, w: 0, bs: 0, is: 0, chk: 1, radio: true, tog: true, toast: null, stage: 1 };
  componentDidMount() {
    let tries = 0;
    const wait = () => {
      if (gsap && ScrollTrigger) this.initMotion();
      else if (tries++ < 100) this._t = setTimeout(wait, 60);
    };
    wait();
    this._st = setInterval(() => this.setState((s) => ({ stage: (s.stage + 1) % STAGES.length })), 1800);
  }
  componentWillUnmount() {
    clearTimeout(this._t); clearTimeout(this._tt); clearInterval(this._st);
    if (this._raf) cancelAnimationFrame(this._raf);
    if (this._lenis) this._lenis.destroy();
    if (this._ctx) this._ctx.revert();
  }
  componentDidUpdate() {
    const ps = this._prev || this.state;
    this._prev = { ...this.state };
    const g = gsap;
    if (!g) return;
    if (ps.stage !== this.state.stage) g.fromTo('[data-cstatus]', { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' });
    if (ps.w !== this.state.w) g.fromTo('[data-tsample]', { x: -8, opacity: 0.4 }, { x: 0, opacity: 1, duration: 0.4, stagger: 0.025, ease: 'power2.out' });
    if (ps.bs !== this.state.bs || ps.is !== this.state.is || ps.chk !== this.state.chk || ps.radio !== this.state.radio || ps.tog !== this.state.tog) {
      document.querySelectorAll('[data-stage]').forEach((el) => g.fromTo(el, { scale: 0.985 }, { scale: 1, duration: 0.4, ease: 'back.out(3)' }));
    }
    if (ps.bp !== this.state.bp) g.fromTo('[data-colcount]', { scale: 1.6, color: '#56C381' }, { scale: 1, color: '#FFFFFF', duration: 0.5, ease: 'back.out(2)' });
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
        .from('[data-char]', { yPercent: 115, duration: 0.9, stagger: 0.1 }, '-=0.3')
        .from('[data-hero="sub"]', { y: 16, opacity: 0, duration: 0.6 }, '-=0.5')
        .from('[data-hero="chip"]', { y: 12, opacity: 0, duration: 0.5, stagger: 0.08 }, '-=0.4')
        .from('header [data-note]', { y: -60, opacity: 0, rotation: (i, el) => +el.dataset.rot + (i % 2 ? 12 : -12), duration: 0.9, stagger: 0.12, ease: 'back.out(1.6)' }, '-=0.6')
        .from('[data-cover]', { y: 90, opacity: 0, rotation: -3, duration: 1.1 }, '-=0.5');

      $('[data-title]').forEach((el) => {
        gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 82%' } })
          .from(el.querySelector('[data-frame]'), { scaleX: 0, scaleY: 0.2, duration: 0.7, ease: 'expo.out' })
          .from($('[data-handle]', el), { scale: 0, duration: 0.35, stagger: 0.05, ease: 'back.out(3)' }, '-=0.35')
          .from(el.querySelector('[data-ttext]'), { y: 24, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.45');
      });
      $('[data-reveal]').forEach((el) => gsap.from(el, { y: 36, opacity: 0, duration: 0.85, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%' } }));
      $('section [data-note]').forEach((el) => gsap.from(el, { y: -40, opacity: 0, rotation: +el.dataset.rot - 14, duration: 0.8, ease: 'back.out(1.8)', scrollTrigger: { trigger: el, start: 'top 92%' } }));

      const stats = document.querySelector('[data-stats]');
      if (stats) {
        const sst = { trigger: stats, start: 'top 82%' };
        gsap.from($('[data-stat]', stats), { y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', scrollTrigger: sst });
        $('[data-count]', stats).forEach((el) => { const end = +el.dataset.count, o = { v: 0 }; el.textContent = '0'; gsap.to(o, { v: end, duration: 1.5, ease: 'power2.out', scrollTrigger: sst, onUpdate: () => { el.textContent = Math.round(o.v); } }); });
      }
      gsap.from('[data-bar]', { scaleX: 0, duration: 0.9, stagger: 0.07, ease: 'power3.out', scrollTrigger: { trigger: '[data-space]', start: 'top 82%' } });
      $('[data-pal]').forEach((p) => gsap.from($('[data-sw]', p), { y: 30, opacity: 0, scale: 0.9, duration: 0.55, stagger: 0.06, ease: 'back.out(1.8)', scrollTrigger: { trigger: p, start: 'top 88%' } }));
      gsap.from('[data-trow]', { x: -30, opacity: 0, duration: 0.5, stagger: 0.05, ease: 'power3.out', scrollTrigger: { trigger: '[data-types]', start: 'top 82%' } });
      $('[data-comp]').forEach((c) => gsap.from(c, { y: 60, opacity: 0, duration: 0.85, ease: 'power3.out', scrollTrigger: { trigger: c, start: 'top 88%' } }));
      gsap.from('[data-cur]', { scale: 0.6, opacity: 0, duration: 0.5, stagger: { each: 0.04, from: 'center' }, ease: 'back.out(2.2)', scrollTrigger: { trigger: '[data-cursors]', start: 'top 85%' } });

      const pipe = document.querySelector('[data-pipe]');
      if (pipe) {
        const dots = $('[data-sdot]', pipe), line = pipe.querySelector('[data-pline]');
        const pt = gsap.timeline({ scrollTrigger: { trigger: pipe, start: 'top 80%' } });
        pt.from($('[data-stg]', pipe), { y: 20, opacity: 0, duration: 0.4, stagger: 0.08, ease: 'power3.out' });
        dots.forEach((d, i) => {
          pt.to(d, { backgroundColor: '#56C381', borderColor: '#56C381', color: '#0E2A19', duration: 0.25 })
            .fromTo(d, { scale: 0.7 }, { scale: 1, duration: 0.45, ease: 'back.out(3)' }, '<');
          if (i < dots.length - 1) pt.to(line, { scaleX: (i + 1) / (dots.length - 1), duration: 0.35, ease: 'power1.inOut' });
        });
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
    const s = this.state, bp = BPS[s.bp];
    return {
      coverStatus: STAGES[s.stage],
      bps: BPS.map((b, i) => ({ i: String(i), label: b.label, on: i === s.bp ? 'on' : 'off' })),
      pickBp: (e) => this.setState({ bp: +e.currentTarget.dataset.bi }),
      cols: Array.from({ length: 12 }, (_, i) => ({ on: i < bp.cols ? 'on' : 'off' })),
      bpCols: String(bp.cols), bpMargin: bp.margin, bpGutter: bp.gutter, navW: bp.nav, bpNav: bp.nav === '0px' ? 'off' : 'on',
      bpNote: bp.note, bpSticky: bp.sticky,
      spacing: SPACING.map((v) => ({ v: v + 'px', w: (v / 56 * 100) + '%' })),
      palettes: PALETTES.map((p) => ({ name: p.name, items: p.items.map(([hex, label]) => ({ hex, label })) })),
      copyHex: (e) => {
        const hex = e.currentTarget.dataset.hex;
        try { navigator.clipboard && navigator.clipboard.writeText(hex); } catch (err) {}
        clearTimeout(this._tt);
        this.setState({ toast: hex });
        this._tt = setTimeout(() => this.setState({ toast: null }), 1600);
      },
      toastOn: s.toast ? 'on' : 'off', toastHex: s.toast || '#FFFFFF', toastMsg: s.toast ? 'Copied ' + s.toast : '',
      weights: WEIGHTS.map((w, i) => ({ i: String(i), label: w[0], on: i === s.w ? 'on' : 'off' })),
      pickWeight: (e) => this.setState({ w: +e.currentTarget.dataset.wi }),
      typeWeight: String(WEIGHTS[s.w][1]),
      types: TYPES.map(([name, size, ls]) => ({ name, size, ls, spec: 'Roboto · ' + size + ' · ' + ls, sample: name === 'overline' || name === 'Button' ? name.toUpperCase() : 'Bijak mandi rates' })),
      btnStates: BTN_STATES.map((b, i) => ({ i: String(i), label: b[0].toUpperCase() + b.slice(1), on: i === s.bs ? 'on' : 'off' })),
      pickBtnState: (e) => this.setState({ bs: +e.currentTarget.dataset.bsi }),
      btnState: BTN_STATES[s.bs],
      inStates: IN_STATES.map((b, i) => ({ i: String(i), label: b[0].toUpperCase() + b.slice(1), on: i === s.is ? 'on' : 'off' })),
      pickInState: (e) => this.setState({ is: +e.currentTarget.dataset.isi }),
      inState: IN_STATES[s.is],
      checkState: CHECK[s.chk], radioState: s.radio ? 'check' : 'uncheck', toggleState: s.tog,
      cycleCheck: () => this.setState((st) => ({ chk: (st.chk + 1) % 3 })),
      toggleRadio: () => this.setState((st) => ({ radio: !st.radio })),
      toggleToggle: () => this.setState((st) => ({ tog: !st.tog })),
      selSummary: 'Checkbox: ' + CHECK[s.chk] + ' · Radio: ' + (s.radio ? 'on' : 'off') + ' · Toggle: ' + (s.tog ? 'Yes' : 'No'),
      cursors: CURSORS.map(([t, css]) => ({ t, css })),
      stages: STAGES.map((t, i) => ({ t, n: String(i + 1) })),
    };
  }

  render() {
    return <BijakView v={this.renderVals()} />;
  }
}
