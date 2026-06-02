import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aipowered-assets.com",
      },
    ],
  },
};

export default nextConfig;
