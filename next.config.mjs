/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/session',
        destination: '/api/session',
      },
      {
        source: '/api/:path*',
        destination: 'http://63.176.180.142:8001/api/:path*',
        has: [
          {
            type: 'query',
            key: 'exclude',
            value: 'session',
          },
        ],
      },
    ];
  },

  images: {
    // Mevcut domainin kalsın
    domains: ['63.176.180.142'],

    // Buraya hem mevcut ERPNext dosya paterni hem de Googleusercontent paternini ekledim
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '63.176.180.142',
        port: '8001',
        pathname: '/private/files/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },

  // (Mevcut top-level remotePatterns'ını aynen korudum; istersen ileride kaldırabiliriz)
  remotePatterns: [
    {
      protocol: 'http',
      hostname: '63.176.180.142',
      port: '8001',
      pathname: '/private/files/**',
    },
  ],
};

export default nextConfig;
