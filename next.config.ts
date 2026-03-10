import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [new URL('https://placehold.co/600x400/**')]
  },
};

export default nextConfig;
