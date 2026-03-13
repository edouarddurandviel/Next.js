import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://placehold.co/600x400/**")],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 14400, // 4 hours
    qualities: [25, 50, 75, 100],
    maximumRedirects: 3,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    dangerouslyAllowLocalIP: true,
  },
};

export default nextConfig;
