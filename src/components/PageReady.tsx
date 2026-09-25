'use client';

import { useEffect } from 'react';

/**
 * Reveals the page once it has mounted. Rendered after the page in the root
 * layout, so its effect runs after the page's own mount-time motion setup.
 */
export default function PageReady() {
  useEffect(() => {
    const id = requestAnimationFrame(() => document.documentElement.classList.remove('dc-preload'));
    return () => cancelAnimationFrame(id);
  }, []);
  return null;
}
