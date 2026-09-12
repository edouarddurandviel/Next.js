/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/600x400/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 14400,
    qualities: [25, 50, 75, 100],
    maximumRedirects: 3,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    dangerouslyAllowLocalIP: true,
  },
};

export default nextConfig;