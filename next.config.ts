import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: { root: __dirname },
  devIndicators: false,



  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "cristianvaduva.com" },
      { protocol: "https", hostname: "**.cristianvaduva.com" },
      { protocol: "https", hostname: "aixluxury.com" },
      { protocol: "https", hostname: "**.aixluxury.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "**.supabase.co" },
      { protocol: "https", hostname: "tet.ro" },
      { protocol: "https", hostname: "**.tet.ro" },
      { protocol: "https", hostname: "**.zf.ro" },
      { protocol: "https", hostname: "**.profit.ro" },
      { protocol: "https", hostname: "**.ft.com" },
      { protocol: "https", hostname: "**.forbes.ro" },
      { protocol: "https", hostname: "**.vercel.app" }
    ],
    unoptimized: false,
  },
  async redirects() {
    return [
      {
        source: "/terms",
        destination: "/terms-of-use",
        permanent: true,
      },
    ];
  },
  async headers() {
    const isDev = process.env.NODE_ENV === "development";
    const scriptSrc = isDev
      ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com;"
      : "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com;";

    const cspHeader = `
      default-src 'self';
      ${scriptSrc}
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' data: blob: https://*.supabase.co https://img.youtube.com https://i.ytimg.com https://*.cristianvaduva.com https://cristianvaduva.com https://*.aixluxury.com https://aixluxury.com https://images.unsplash.com https://*.tet.ro https://tet.ro https://*.zf.ro https://*.profit.ro https://*.ft.com https://*.forbes.ro https://*.vercel.app;
      font-src 'self' data: https://fonts.gstatic.com;
      connect-src 'self' https://*.supabase.co https://*.cristianvaduva.com https://*.aixluxury.com https://va.vercel-scripts.com https://vitals.vercel-insights.com https://*.vercel.app;
      frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com;
      frame-ancestors 'self';
      form-action 'self';
      base-uri 'self';
      object-src 'none';
    `.replace(/\s{2,}/g, " ").trim();

    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=()",
          },
          {
            key: "Content-Security-Policy",
            value: cspHeader,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
