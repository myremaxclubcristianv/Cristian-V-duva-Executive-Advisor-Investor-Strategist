import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "**.zf.ro" },
      { protocol: "https", hostname: "**.profit.ro" },
      { protocol: "https", hostname: "**.ft.com" },
      { protocol: "https", hostname: "**.forbes.ro" }
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
};

export default nextConfig;
