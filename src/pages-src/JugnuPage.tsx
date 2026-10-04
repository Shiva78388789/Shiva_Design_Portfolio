// @ts-nocheck -- behaviour ported verbatim from the prototype's untyped JS
'use client';

// Behaviour for the Jugnu page, ported from design-reference/design/JugnuCaseStudy.dc.html.
import DCPage from '@/lib/DCPage';
import { submitContactForm } from '@/lib/contactForm';
import JugnuView from '@/views/JugnuView';



export default class JugnuPage extends DCPage {

  state = { l1: false, l2: false, cfNote: '' };
  componentDidMount() {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return;
    const els = [...document.querySelectorAll('[data-reveal]')].filter((el) => el.getBoundingClientRect().top > window.innerHeight);
    els.forEach((el) => { el.style.opacity = '0'; el.style.transform = 'translateY(16px)'; });
    this.io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        this.io.unobserve(el);
        el.style.transition = 'opacity 400ms cubic-bezier(0.45,0,0.2,1), transform 400ms cubic-bezier(0.45,0,0.2,1)';
        el.style.opacity = '1'; el.style.transform = 'none';
      });
    }, { rootMargin: '0px 0px -10% 0px' });
    els.forEach((el) => this.io.observe(el));
  }
  componentWillUnmount() { this.io && this.io.disconnect(); }
  renderVals() {
    return {
      notLoaded1: !this.state.l1, notLoaded2: !this.state.l2,
      onLoad1: () => this.setState({ l1: true }), onLoad2: () => this.setState({ l2: true }),
      showClosing: true,
      vp: 'auto',
      hasNote: !!this.state.cfNote, cfNote: this.state.cfNote,
      onSubmit: (e) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        const name = String(f.get('name') || '').trim(), email = String(f.get('email') || '').trim(), msg = String(f.get('message') || '').trim();
        if (!name || !email || !msg) return this.setState({ cfNote: 'Please fill in all three fields.' });
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return this.setState({ cfNote: 'That email doesn\'t look right.' });
        submitContactForm(this, e.currentTarget, name, email, msg);
      }
    };
  }

  render() {
    return <JugnuView v={this.renderVals()} />;
  }
}
