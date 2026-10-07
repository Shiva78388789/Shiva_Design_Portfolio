(() => {
  if (customElements.get('site-ruler')) return;
  class SiteRuler extends HTMLElement {
    connectedCallback() {
      if (this.shadowRoot) return;
      const r = this.attachShadow({ mode: 'open' });
      let labels = '';
      for (let i = 0; i < 15; i++) labels += `<span class="n" style="left:${6 + i * 100}px">${i * 100}</span>`;
      r.innerHTML = `<style>
        :host{display:block;height:24px;background:#ffffff}
        .bar{position:fixed;top:0;left:0;right:0;z-index:800;height:24px;background-color:#ffffff;background-image:repeating-linear-gradient(to right,#c8c8c8 0 1px,transparent 1px 10px);background-size:100% 5px;background-repeat:repeat-x;background-position:0 100%;overflow:hidden;pointer-events:none;font-family:'Montserrat',system-ui,sans-serif}
        .in{position:relative;max-width:1440px;height:100%;margin:0 auto}
        .n{position:absolute;top:5px;font-size:8px;line-height:10px;color:#7a7a7a;transform:translateX(-50%)}
        .m{position:absolute;top:0;bottom:0;left:0;width:0;opacity:0;transition:opacity .15s ease}
        .m i{position:absolute;left:-0.5px;bottom:0;width:1px;height:10px;background:#0d99ff}
        .m b{position:absolute;top:4px;left:0;transform:translateX(-50%);padding:1px 4px;border-radius:2px;background:#0d99ff;color:#fff;font-size:8px;line-height:10px;font-weight:600;white-space:nowrap}
      </style><div class="bar" aria-hidden="true"><div class="in">${labels}<div class="m"><i></i><b>0</b></div></div></div>`;
      const inn = r.querySelector('.in'), m = r.querySelector('.m'), lab = m.querySelector('b'), ns = [...r.querySelectorAll('.n')];
      this._move = (e) => {
        const box = inn.getBoundingClientRect(), x = e.clientX - box.left;
        const on = x >= 0 && x <= box.width;
        m.style.opacity = on ? '1' : '0';
        if (!on) return;
        m.style.transform = `translateX(${x}px)`;
        lab.textContent = Math.round(x - 6);
        ns.forEach((s) => { s.style.opacity = Math.abs(s.offsetLeft - x) < 22 ? '0' : '1'; });
      };
      this._leave = () => { m.style.opacity = '0'; ns.forEach((s) => { s.style.opacity = '1'; }); };
      window.addEventListener('pointermove', this._move, { passive: true });
      document.addEventListener('mouseleave', this._leave);
    }
    disconnectedCallback() {
      window.removeEventListener('pointermove', this._move);
      document.removeEventListener('mouseleave', this._leave);
    }
  }
  customElements.define('site-ruler', SiteRuler);
})();
