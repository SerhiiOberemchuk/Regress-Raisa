import { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  cacheComponents: true,
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "raisaregres.online" }],
        destination: "https://raisaregres.online/:path*",
        permanent: true,
      },
      {
        source: "/uk",
        destination: "/",
        permanent: true,
      },
      {
        source: "/uk/:path*",
        destination: "/:path*",
        permanent: true,
      },
      {
        source: "/en",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en/:path*",
        destination: "/:path*",
        permanent: true,
      },
      {
        source: "/it",
        destination: "/",
        permanent: true,
      },
      {
        source: "/it/:path*",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
