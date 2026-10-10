// @ts-nocheck -- behaviour ported verbatim from the prototype's untyped JS
'use client';

// Behaviour for the home page, ported from design-reference/design/Portfolio v2.dc.html.
import React from 'react';
import DCPage from '@/lib/DCPage';
import { Odometer } from '@/lib/odometer';
import { fetchTokenTotal } from '@/lib/tokens';
import HomeView from '@/views/HomeView';

export default class HomePage extends DCPage {
  state = { nav: false };
  tokRef = React.createRef();
  componentDidMount() {
    // "Tokens Used" shows Shiva's real Claude Code total (see src/lib/tokens.ts),
    // checked every 30 s while the tab is visible; changes roll in digit by digit.
    this.odo = new Odometer(this.tokRef.current);
    this.odo.placeholder('—');
    let last = null;
    const load = async () => {
      const t = await fetchTokenTotal();
      if (t !== null && t !== last && this.tokRef.current) { last = t; this.odo.set(t); }
    };
    load();
    this.tick = setInterval(() => { if (document.visibilityState === 'visible') load(); }, 30000);
    this.onVis = () => { if (document.visibilityState === 'visible') load(); };
    document.addEventListener('visibilitychange', this.onVis);
    this.onKey = e => { if (e.key === 'Escape') this.setNav(false); };
    window.addEventListener('keydown', this.onKey);
  }
  componentWillUnmount() {
    clearInterval(this.tick);
    document.removeEventListener('visibilitychange', this.onVis);
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
