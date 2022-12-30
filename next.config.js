/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's1.ax1x.com',
        port: '',
        pathname: '/**/**/**/**',
      },
    ],
  },
};

module.exports = nextConfig;
