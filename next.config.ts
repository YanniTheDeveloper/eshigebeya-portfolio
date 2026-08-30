import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export → upload the /out folder to any host (GoDaddy cPanel, etc.)
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
