import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    preloadEntriesOnStart: true,
  },
  sassOptions: {
    implementation: 'sass-embedded',
  },
};

export default nextConfig;
