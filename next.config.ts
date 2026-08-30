import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.qrserver.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/go/google.html",
        destination: "/go/km60",
        permanent: true,
      },
      {
        source: "/go/google-unidade-2.html",
        destination: "/go/morrotes",
        permanent: true,
      },
      {
        source: "/go/instagram.html",
        destination: "/go/instagram",
        permanent: true,
      },
      {
        source: "/go/facebook.html",
        destination: "/go/facebook",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
