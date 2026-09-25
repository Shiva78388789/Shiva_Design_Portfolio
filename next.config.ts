import type { NextConfig } from 'next';

// Hosted on Vercel at the domain root. Set NEXT_PUBLIC_BASE_PATH only when
// serving the site from a sub-path (e.g. "/portfolio").
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
