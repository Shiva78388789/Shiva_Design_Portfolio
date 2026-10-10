// Rolling-digit counter for the "Tokens Used" chip. Each digit is a column of
// 0–9 twice over that slides up to the next value, like the Impact counters
// on the case studies.

const H = 1.3; // em, height of one digit row
const EASE = 'cubic-bezier(0.18,1.06,0.3,1)';
const MASK = 'linear-gradient(to bottom, transparent 0, #000 0.16em, #000 calc(100% - 0.16em), transparent 100%)';
const fmt = new Intl.NumberFormat('en-US');

type Slot = { col: HTMLElement; cur: number; anim?: Animation };

export class Odometer {
  private slots: Slot[] = []; // leftmost first
  private value: number | null = null;
  private reduce: boolean;

  constructor(private el: HTMLElement) {
    this.reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.style.display = 'inline-flex';
    el.style.alignItems = 'center';
  }

  /** Shows a placeholder until the first value arrives. */
  placeholder(text: string) {
    this.el.textContent = text;
    this.el.removeAttribute('aria-label');
    this.slots = [];
    this.value = null;
  }

  set(next: number) {
    const text = fmt.format(next);
    this.el.setAttribute('aria-label', text);
    if (this.reduce) { this.el.textContent = text; this.value = next; return; }

    const digits = text.replace(/\D/g, '');
    const first = this.value === null;
    if (first || digits.length !== this.slots.length) this.build(text, first ? null : fmt.format(this.value!));
    this.value = next;

    const n = this.slots.length;
    this.slots.forEach((slot, i) => {
      const d = +digits[i];
      if (first) {
        // First load: every digit spins up from zero, left to right.
        this.roll(slot, 0, 10 + d, 1300 + (n - i) * 180, i * 90);
      } else if (d !== slot.cur) {
        // Updates only move forward, so 9 → 0 rolls on through.
        this.roll(slot, slot.cur, d > slot.cur ? d : d + 10, 900, (n - 1 - i) * 50);
      }
    });
  }

  private roll(slot: Slot, from: number, to: number, duration: number, delay: number) {
    if (slot.anim) { slot.anim.cancel(); slot.anim = undefined; }
    slot.cur = to % 10;
    const y = (k: number) => `translateY(${-k * H}em)`;
    slot.col.style.transform = y(from);
    const anim = slot.col.animate([{ transform: y(from) }, { transform: y(to) }], {
      duration, delay, easing: EASE, fill: 'forwards',
    });
    slot.anim = anim;
    anim.onfinish = () => {
      slot.col.style.transform = y(to % 10);
      anim.cancel();
      if (slot.anim === anim) slot.anim = undefined;
    };
  }

  // Rebuilds the digit columns for `text`. Digits that existed before keep
  // their current position (matched from the right) so they roll from there.
  private build(text: string, prevText: string | null) {
    const prev = prevText ? prevText.replace(/\D/g, '') : '';
    const count = text.replace(/\D/g, '').length;
    this.el.textContent = '';
    this.slots = [];
    let di = 0;
    for (const ch of text) {
      if (!/\d/.test(ch)) {
        const s = document.createElement('span');
        s.textContent = ch;
        s.setAttribute('aria-hidden', 'true');
        this.el.appendChild(s);
        continue;
      }
      const fromRight = count - 1 - di;
      const pd = prev.length - 1 - fromRight >= 0 ? +prev[prev.length - 1 - fromRight] : 0;
      const box = document.createElement('span');
      box.setAttribute('aria-hidden', 'true');
      box.style.cssText = `display:inline-block;height:${H}em;overflow:hidden;-webkit-mask-image:${MASK};mask-image:${MASK}`;
      const col = document.createElement('span');
      col.style.cssText = `display:block;transform:translateY(${-pd * H}em);will-change:transform`;
      for (let k = 0; k < 20; k++) {
        const row = document.createElement('span');
        row.textContent = String(k % 10);
        row.style.cssText = `display:block;height:${H}em;line-height:${H}em;text-align:center`;
        col.appendChild(row);
      }
      box.appendChild(col);
      this.el.appendChild(box);
      this.slots.push({ col, cur: pd });
      di++;
    }
  }
}
