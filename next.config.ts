/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === 'production';
const basePath = '/deskteam360-test';

const nextConfig = {
  images: {
    unoptimized: true,
  },
  basePath: isProd ? basePath : '',
  assetPrefix: isProd ? basePath : '',
  output: 'export',
  trailingSlash: true,
  generateBuildId: () => 'build',
};

module.exports = nextConfig;
