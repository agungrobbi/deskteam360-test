/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  images: {
    unoptimized: true,
  },
  basePath: '/deskteam360-test',
  output: 'export',
  trailingSlash: true,
};

module.exports = nextConfig;
