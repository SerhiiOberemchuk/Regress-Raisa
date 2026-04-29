import { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  cacheComponents: true,
  reactCompiler: true,
};

export default nextConfig;
