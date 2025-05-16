/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'calvarybaptistsv.org',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
