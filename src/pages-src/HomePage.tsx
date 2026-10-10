// @ts-nocheck -- behaviour ported verbatim from the prototype's untyped JS
'use client';

// Behaviour for the home page, ported from design-reference/design/Portfolio v2.dc.html.
import React from 'react';
import DCPage from '@/lib/DCPage';
import HomeView from '@/views/HomeView';

export default class HomePage extends DCPage {
  state = { nav: false };
  tokRef = React.createRef();
  componentDidMount() {
    let n = 123456766;
    const fmt = new Intl.NumberFormat('en-US');
    this.tick = setInterval(() => {
      n += 1 + Math.floor(Math.random() * 37);
      if (this.tokRef.current) this.tokRef.current.textContent = fmt.format(n);
    }, 110);
    this.onKey = e => { if (e.key === 'Escape') this.setNav(false); };
    window.addEventListener('keydown', this.onKey);
  }
  componentWillUnmount() {
    clearInterval(this.tick);
    window.removeEventListener('keydown', this.onKey);
    document.documentElement.style.overflow = '';
  }
  setNav(v) {
    this.setState({ nav: v });
    document.documentElement.style.overflow = v ? 'hidden' : '';
  }
  renderVals() {
    const nav = this.state.nav;
    return {
      tokRef: this.tokRef,
      openNav: () => this.setNav(true),
      closeNav: () => this.setNav(false),
      navOpacity: nav ? 1 : 0,
      navVis: nav ? 'visible' : 'hidden',
      navHidden: nav ? 'false' : 'true',
      navShift: nav ? 'none' : 'translateY(24px)'
    };
  }

  render() {
    return <HomeView v={this.renderVals()} />;
  }
}
