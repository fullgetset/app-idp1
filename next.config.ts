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
      {
        protocol: 'https',
        hostname: 'rust.litnet.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
