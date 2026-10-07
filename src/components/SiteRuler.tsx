'use client';

import { useEffect, useRef } from 'react';
import styles from './SiteRuler.module.css';

const LABELS = Array.from({ length: 15 }, (_, i) => i * 100);

/**
 * The white design ruler fixed to the top of every case-study page, ported
 * from design-reference/design/site-ruler.js. A blue marker follows the
 * pointer and shows its x position.
 */
export default function SiteRuler() {
  const inRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const inn = inRef.current, m = markRef.current, lab = labelRef.current;
    if (!inn || !m || !lab) return;
    const ns = Array.from(inn.querySelectorAll<HTMLElement>('[data-n]'));
    const move = (e: PointerEvent) => {
      const box = inn.getBoundingClientRect(), x = e.clientX - box.left;
      const on = x >= 0 && x <= box.width;
      m.style.opacity = on ? '1' : '0';
      if (!on) return;
      m.style.transform = `translateX(${x}px)`;
      lab.textContent = String(Math.round(x - 6));
      ns.forEach((s) => { s.style.opacity = Math.abs(s.offsetLeft - x) < 22 ? '0' : '1'; });
    };
    const leave = () => { m.style.opacity = '0'; ns.forEach((s) => { s.style.opacity = '1'; }); };
    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('pointermove', move);
      document.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <div className={styles.host}>
      <div className={styles.bar} aria-hidden="true">
        <div className={styles.in} ref={inRef}>
          {LABELS.map((n, i) => (
            <span key={n} data-n="" className={styles.n} style={{ left: 6 + i * 100 }}>{n}</span>
          ))}
          <div className={styles.m} ref={markRef}><i /><b ref={labelRef}>0</b></div>
        </div>
      </div>
    </div>
  );
}
