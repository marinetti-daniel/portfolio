import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  async rewrites() {
    const wordleUrl = process.env.WORDLE_URL ?? "http://localhost:3001";
    return [
      { source: "/wordle", destination: `${wordleUrl}/wordle` },
      { source: "/wordle/:path+", destination: `${wordleUrl}/wordle/:path+` },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
