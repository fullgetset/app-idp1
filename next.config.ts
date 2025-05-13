import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
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
  async headers() {
    return [
      {
        source: '/(.*)', // Защита всех страниц
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' }, // Запрещает загрузку в iframe
          { key: 'Content-Security-Policy', value: "frame-ancestors 'none'" }, // Полный запрет встраивания
        ],
      },
    ];
  },
};

export default nextConfig;
