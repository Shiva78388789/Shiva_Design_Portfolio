import type { Metadata, Viewport } from 'next';
import PageReady from '@/components/PageReady';
import '@/styles/base.css';

export const metadata: Metadata = {
  title: {
    default: 'Shiva Kumar — Product Designer',
    template: '%s — Shiva Kumar',
  },
  description:
    'UX portfolio of Shiva Kumar: case studies on Engage X, DTH price simplification, the Bijak web design system and the Toffee seller app.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1C1C1C',
};

const FONTS =
  'https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;800' +
  '&family=Caveat:wght@500;600;700' +
  '&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400' +
  '&family=Press+Start+2P' +
  '&family=Permanent+Marker&family=Roboto:wght@400;500;700&family=Rubik:wght@400;500' +
  '&display=swap';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href={FONTS} />
        {/* Hide the page until the motion setup has run, so elements that
            animate in don't flash first. Failsafe after 2.5s. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('dc-preload');setTimeout(function(){document.documentElement.classList.remove('dc-preload')},2500)",
          }}
        />
      </head>
      <body>
        {children}
        <PageReady />
      </body>
    </html>
  );
}
