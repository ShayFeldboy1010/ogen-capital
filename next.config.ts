import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Placeholder photography until the client provides real images.
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
  async redirects() {
    return [
      // Hebrew is the default language of the site.
      { source: "/", destination: "/he", permanent: false },
    ];
  },
};

export default nextConfig;
