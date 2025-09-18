/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/deskteam360-test' : '',
  assetPrefix: isProd ? '/deskteam360-test' : '',
  output: 'export',
  trailingSlash: true,
};

module.exports = {
  ...nextConfig,
};
