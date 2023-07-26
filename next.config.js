/** @type {import('next').NextConfig} */



module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },

  images: {
    domains: ['lh3.googleusercontent.com', 'firebasestorage.googleapis.com']
  }



}