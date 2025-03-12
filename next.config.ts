import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'biblio.by',
        port: '',
        pathname: '/media/catalog/product/cache/**',
      },
    ],
  },
};

export default nextConfig;
