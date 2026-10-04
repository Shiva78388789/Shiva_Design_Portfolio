'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { asset } from '@/lib/dc';
import { IMAGE_SLOTS } from '@/content/image-slots';

type Props = {
  id: string;
  /** Image to show when the file exists; falls back to the placeholder if it fails to load. */
  src?: string;
  alt?: string;
  placeholder?: string;
  shape?: string;
  radius?: string;
  style?: CSSProperties;
};

/**
 * Image frame. Shows the image mapped to `id` in src/content/image-slots.ts,
 * or its own `src`, or an empty placeholder frame when there is no image yet.
 */
export default function ImageSlot({ id, src, alt, placeholder, radius, style }: Props) {
  const mapped = IMAGE_SLOTS[id];
  const url = mapped ? asset(mapped) : src;
  const [failed, setFailed] = useState(false);
  const img = useRef<HTMLImageElement>(null);

  // A 404 can happen before hydration attaches onError, so check once mounted.
  useEffect(() => {
    const el = img.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, [url]);

  const base: CSSProperties = {
    display: 'block',
    position: 'relative',
    width: '100%',
    height: '100%',
    aspectRatio: '3 / 2',
    overflow: 'hidden',
    borderRadius: radius ? Number(radius) : undefined,
    ...style,
  };
  if (url && !failed) {
    return (
      <div id={id} style={base}>
        <img
          ref={img}
          src={url}
          alt={alt ?? ''}
          onError={() => setFailed(true)}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    );
  }
  // "Drop the Campaign Dashboard screen" -> "Campaign Dashboard screen"
  const caption = (placeholder || 'Image').replace(/^Drop (the |an? )?/i, '');
  return (
    <div id={id} role={alt ? 'img' : undefined} aria-label={alt} style={{ ...base, background: 'rgba(127,127,127,.08)', font: '13px/1.3 Montserrat, system-ui, sans-serif' }}>
      <div style={{ position: 'absolute', inset: 0, border: '1.5px dashed currentColor', opacity: 0.35, pointerEvents: 'none', borderRadius: 'inherit' }} />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          textAlign: 'center',
          padding: 12,
          boxSizing: 'border-box',
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" style={{ opacity: 0.45 }} aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="1" />
          <circle cx="9" cy="10" r="2" />
          <path d="m21 16-5-5L5 20" />
        </svg>
        <span style={{ maxWidth: '90%', fontWeight: 500, letterSpacing: '.01em', opacity: 0.75, textTransform: 'capitalize' }}>{caption}</span>
      </div>
    </div>
  );
}
