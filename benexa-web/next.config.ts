// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@appletosolutions/reactbits"],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "gsap/ScrollTrigger": "gsap/dist/ScrollTrigger",
    };
    return config;
  },
};

export default nextConfig;
