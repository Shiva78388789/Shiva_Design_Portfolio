import { asset } from '@/lib/dc';

const TITLES: Record<string, string> = {
  BOX: 'Select a DTH box',
  BASEPACKS: 'Base packs',
  LANGUAGEPACKS: 'Language packs',
  OTT: 'OTT add-ons',
  ALACARTE: 'A la carte channels',
  VAS: 'VAS add-ons',
  ReviewOrder: 'Review order',
};

/**
 * One 375×812 DTH app screen, exported from Figma
 * (see scripts/export-dth-screens.mjs).
 */
export default function DthScreen({ name }: { name: string }) {
  return (
    <img
      src={asset(`/assets/dth/${name}.png`)}
      alt={`DTH app screen: ${TITLES[name] ?? name}`}
      width={375}
      height={812}
      loading="lazy"
      draggable={false}
      style={{ display: 'block', width: 375, height: 812, maxWidth: 'none' }}
    />
  );
}
