import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@shikijs/langs", "@shikijs/core"],
  },
};

export default nextConfig;
