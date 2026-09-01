import type {NextConfig} from 'next';
const nextConfig: NextConfig = {
  output: 'standalone',
  headers: async () => [
    {
      source: '/((?!_next/static|_next/image|favicon.ico).*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=0, must-revalidate, s-maxage=60, stale-while-revalidate=3600',
        },
      ],
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
    ],
  },
};
export default nextConfig;
