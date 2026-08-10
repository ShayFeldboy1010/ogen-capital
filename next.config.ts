import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Hebrew is the default language of the site.
      { source: "/", destination: "/he", permanent: false },
      // "Client stories" and "Testimonials" are hidden until there is real,
      // approved client content to put on them (spec section 10). Any link
      // already shared lands on the home page instead of a 404.
      { source: "/:locale(he|en)/results", destination: "/:locale", permanent: false },
      { source: "/:locale(he|en)/trust", destination: "/:locale", permanent: false },
    ];
  },
};

export default nextConfig;
