import type { NextConfig } from 'next';

// Set NEXT_PUBLIC_BASE_PATH when the site is served from a sub-path
// (e.g. GitHub Pages project sites: "/Shiva_Design_Portfolio").
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
