import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.scdn.co"],
  },
  async redirects() {
    return [
      {
        source: "/ads.txt", // request path
        destination: "https://srv.adstxtmanager.com/19390/genrify.live", // Ezoic URL
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
