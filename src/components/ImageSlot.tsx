import type { CSSProperties } from 'react';
import { asset } from '@/lib/dc';
import { IMAGE_SLOTS } from '@/content/image-slots';

type Props = {
  id: string;
  placeholder?: string;
  shape?: string;
  radius?: string;
  style?: CSSProperties;
};

/**
 * Image frame. Renders the image configured for `id` in
 * src/content/image-slots.ts, or an empty placeholder frame.
 */
export default function ImageSlot({ id, placeholder, radius, style }: Props) {
  const src = IMAGE_SLOTS[id];
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
  if (src) {
    return (
      <div id={id} style={base}>
        <img
          src={asset(src)}
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    );
  }
  // "Drop the Campaign Dashboard screen" -> "Campaign Dashboard screen"
  const caption = (placeholder || 'Image').replace(/^Drop (the |an? )?/i, '');
  return (
    <div id={id} style={{ ...base, background: 'rgba(127,127,127,.08)', font: '13px/1.3 Montserrat, system-ui, sans-serif' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          border: '1.5px dashed currentColor',
          opacity: 0.35,
          pointerEvents: 'none',
        }}
      />
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
