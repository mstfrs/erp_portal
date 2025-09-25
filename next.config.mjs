/** @type {import('next').NextConfig} */
const nextConfig = {
async rewrites() {
    return [
      {
        source: '/api/session',
        destination: '/api/session', // Bu isteği yönlendirmeden olduğu gibi bırakıyoruz.
                                   // Eğer /pages/api/session.js dosyanız varsa, bu oraya gidecektir.
                                   // Alternatif olarak, bu kuralı hiç eklemeyebilirsiniz.
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
    domains: ["63.176.180.142"], // ERPNext server IP / domain buraya eklenmeli
  },
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
