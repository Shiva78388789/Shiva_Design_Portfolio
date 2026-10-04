'use client';

// Floating bottom navigation (Work / Experience / Contact).
// React port of design-reference/design/dock-nav.js.

import { Fragment, useCallback, useEffect, useRef, useState, type MouseEvent } from 'react';
import { href } from '@/lib/dc';
import styles from './DockNav.module.css';

type Id = 'work' | 'experience' | 'contact';

const ITEMS: [Id, string][] = [
  ['work', 'Work'],
  ['experience', 'Experience'],
  ['contact', 'Contact'],
];

const ICONS: Record<Id, React.ReactNode> = {
  work: (
    <>
      <rect width="20" height="14" x="2" y="6" rx="2" />
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </>
  ),
  experience: (
    <>
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l4 2" />
    </>
  ),
  contact: (
    <>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </>
  ),
};

declare global {
  interface Window {
    __lenis?: { scrollTo: (target: number, opts?: { duration?: number }) => void };
  }
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY;
  if (window.__lenis) window.__lenis.scrollTo(y, { duration: 1.2 });
  else window.scrollTo({ top: y, behavior: 'smooth' });
}

/**
 * `active` is set on case-study pages; without it the dock runs in home mode
 * (scroll-spy + smooth scrolling to the sections on the same page).
 */
export default function DockNav({ active }: { active?: Id }) {
  const onHome = !active;
  const [current, setCurrent] = useState<Id | null>(active ?? null);
  const [hidden, setHidden] = useState(false);
  const [pops, setPops] = useState<Record<string, number>>({});
  const [ripples, setRipples] = useState<{ key: number; id: Id; style: React.CSSProperties }[]>([]);
  const pillRef = useRef<HTMLSpanElement>(null);
  const linkRefs = useRef<Partial<Record<Id, HTMLAnchorElement | null>>>({});
  const lock = useRef(0);

  const pillPos = useRef<{ x: number; w: number } | null>(null);
  const pillAnim = useRef<Animation | null>(null);

  // Liquid pill: stretches between items, pops in the first time it appears.
  const movePill = useCallback((id: Id | null, instant: boolean) => {
    const p = pillRef.current;
    if (!p) return;
    const a = id ? linkRefs.current[id] : null;
    if (!a) {
      p.style.opacity = '0';
      pillPos.current = null;
      return;
    }
    const to = { x: a.offsetLeft, w: a.offsetWidth };
    const from = pillPos.current;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    p.style.width = to.w + 'px';
    p.style.transform = `translateX(${to.x}px)`;
    p.style.opacity = '1';
    pillPos.current = to;
    if (instant || !from || reduce || (from.x === to.x && from.w === to.w)) {
      if (!from && !instant && !reduce) {
        p.animate(
          [
            { transform: `translateX(${to.x}px) scale(.6)`, opacity: 0 },
            { transform: `translateX(${to.x}px) scale(1.06)`, opacity: 1, offset: 0.7 },
            { transform: `translateX(${to.x}px) scale(1)`, opacity: 1 },
          ],
          { duration: 420, easing: 'cubic-bezier(.3,1.4,.5,1)' },
        );
      }
      return;
    }
    pillAnim.current?.cancel();
    const L = Math.min(from.x, to.x);
    const R = Math.max(from.x + from.w, to.x + to.w);
    const right = to.x > from.x;
    pillAnim.current = p.animate(
      [
        { transform: `translateX(${from.x}px) scale(1,1)`, width: from.w + 'px' },
        { transform: `translateX(${right ? from.x : L}px) scale(1,.86)`, width: (R - L) * 0.7 + 'px', offset: 0.35 },
        { transform: `translateX(${right ? R - (R - L) * 0.7 : L}px) scale(1,.9)`, width: (R - L) * 0.7 + 'px', offset: 0.6 },
        { transform: `translateX(${to.x}px) scale(1.04,1.06)`, width: to.w + 'px', offset: 0.82 },
        { transform: `translateX(${to.x}px) scale(1,1)`, width: to.w + 'px' },
      ],
      { duration: 620, easing: 'cubic-bezier(.45,0,.2,1)' },
    );
  }, []);

  // Glass bar follows the pointer with a soft lens and a slight squash.
  const barRef = useRef<HTMLElement>(null);
  const lensRef = useRef<HTMLSpanElement>(null);
  const onBarMove = (e: React.PointerEvent) => {
    const bar = barRef.current;
    const lens = lensRef.current;
    if (!bar || !lens) return;
    const r = bar.getBoundingClientRect();
    lens.style.transform = `translate(${e.clientX - r.left}px,${e.clientY - r.top}px)`;
    bar.style.transform = `scale(1.03) translateX(${((e.clientX - r.left) / r.width - 0.5) * 4}px)`;
  };
  const setBarTransform = (t: string) => () => {
    if (barRef.current) barRef.current.style.transform = t;
  };

  const first = useRef(true);
  useEffect(() => {
    movePill(current, first.current);
    first.current = false;
  }, [current, movePill]);

  useEffect(() => {
    const onResize = () => movePill(current, true);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [current, movePill]);

  // Auto-hide on scroll down (tablet/mobile), always visible near the bottom.
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const d = y - lastY;
      if (Date.now() < lock.current) {
        lastY = y;
        setHidden(false);
        return;
      }
      if (window.innerHeight + y >= document.documentElement.scrollHeight - 120) {
        lastY = y;
        setHidden(false);
        return;
      }
      if (Math.abs(d) < 6) return;
      setHidden(window.innerWidth <= 1180 && d > 0 && y > 200);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Home: scroll-spy + honour an initial #hash.
  useEffect(() => {
    if (!onHome) return;
    const hash = location.hash.slice(1);
    let hashTimer: ReturnType<typeof setTimeout> | undefined;
    if (ITEMS.some(([id]) => id === hash)) hashTimer = setTimeout(() => scrollToSection(hash), 450);

    let io: IntersectionObserver | null = null;
    let tries = 0;
    let retry: ReturnType<typeof setTimeout> | undefined;
    let pollTimer: ReturnType<typeof setTimeout> | undefined;
    let onScroll: (() => void) | null = null;
    const watch = () => {
      const els = ITEMS.map(([id]) => document.getElementById(id)).filter((e): e is HTMLElement => !!e);
      if (!els.length) {
        if (++tries < 40) retry = setTimeout(watch, 150);
        return;
      }
      const vis = new Map<string, number | null>();
      io = new IntersectionObserver(
        (ents) => {
          ents.forEach((en) => vis.set(en.target.id, en.intersectionRatio > 0 ? en.boundingClientRect.top : null));
          if (Date.now() < lock.current) return;
          let best: Id | null = null;
          let bestTop = -Infinity;
          vis.forEach((top, id) => {
            if (top !== null && top <= window.innerHeight * 0.45 && top > bestTop) {
              best = id as Id;
              bestTop = top;
            }
          });
          if (best) setCurrent(best);
          else if (![...vis.values()].some((v) => v !== null && v < window.innerHeight * 0.45)) setCurrent(null);
        },
        { threshold: [0, 0.01, 0.25, 0.5, 0.75, 1], rootMargin: '0px 0px -40% 0px' },
      );
      els.forEach((e) => io!.observe(e));
      onScroll = () => {
        clearTimeout(pollTimer);
        pollTimer = setTimeout(() => {
          els.forEach((e) => {
            io?.unobserve(e);
            io?.observe(e);
          });
        }, 120);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
    };
    watch();
    return () => {
      clearTimeout(hashTimer);
      clearTimeout(retry);
      clearTimeout(pollTimer);
      io?.disconnect();
      if (onScroll) window.removeEventListener('scroll', onScroll);
    };
  }, [onHome]);

  const onClick = (e: MouseEvent<HTMLAnchorElement>, id: Id) => {
    const a = e.currentTarget;
    const r = a.getBoundingClientRect();
    const s = Math.max(r.width, r.height) * 1.6;
    const key = Date.now() + Math.random();
    setRipples((rs) => [
      ...rs,
      { key, id, style: { width: s, height: s, left: e.clientX - r.left - s / 2, top: e.clientY - r.top - s / 2 } },
    ]);
    setTimeout(() => setRipples((rs) => rs.filter((x) => x.key !== key)), 650);
    setPops((p) => ({ ...p, [id]: (p[id] || 0) + 1 }));
    setCurrent(id);
    e.preventDefault();
    if (onHome) {
      lock.current = Date.now() + 1600;
      scrollToSection(id);
      history.replaceState(null, '', '#' + id);
    } else {
      const to = a.getAttribute('href')!;
      document.documentElement.style.transition = 'opacity .28s ease';
      document.documentElement.style.opacity = '0';
      setTimeout(() => {
        location.href = to;
      }, 280);
    }
  };

  // Restore the page if it comes back from the bfcache after a fade-out.
  useEffect(() => {
    const onShow = () => {
      document.documentElement.style.opacity = '';
      document.documentElement.style.transition = '';
    };
    window.addEventListener('pageshow', onShow);
    return () => window.removeEventListener('pageshow', onShow);
  }, []);

  return (
    <div className={styles.host} data-hidden={hidden ? '' : undefined}>
      <nav
        className={styles.bar}
        aria-label="Site"
        ref={barRef}
        onPointerMove={onBarMove}
        onPointerLeave={setBarTransform('')}
        onPointerDown={setBarTransform('scale(0.97)')}
        onPointerUp={setBarTransform('scale(1.03)')}
      >
        <span className={styles.lens} ref={lensRef} aria-hidden="true" />
        <span className={styles.pill} ref={pillRef} />
        {ITEMS.map(([id, label], i) => (
          <Fragment key={id}>
            {i > 0 && <span className={styles.sep} aria-hidden="true" />}
            <a
              ref={(el) => {
                linkRefs.current[id] = el;
              }}
              data-id={id}
              href={onHome ? '#' + id : href('/#' + id)}
              aria-current={current === id ? 'true' : 'false'}
              className={pops[id] ? (pops[id] % 2 ? styles.pop : styles.pop2) : undefined}
              onClick={(e) => onClick(e, id)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {ICONS[id]}
              </svg>
              <span>{label}</span>
              {ripples
                .filter((r) => r.id === id)
                .map((r) => (
                  <span key={r.key} className={styles.ripple} style={r.style} />
                ))}
            </a>
          </Fragment>
        ))}
      </nav>
    </div>
  );
}
