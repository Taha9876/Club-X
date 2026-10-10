import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Every photo is a local import now, so no remote hosts are allowed.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
