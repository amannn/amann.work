/* eslint-disable import/no-extraneous-dependencies */
const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
});
const withVideos = require('next-videos');

module.exports = withMDX(
  withVideos({
    reactStrictMode: true,
    pageExtensions: ['js', 'md', 'mdx'],
    i18n: {
      locales: ['en', 'de'],
      defaultLocale: 'en'
    },
    // Runs separately
    eslint: {ignoreDuringBuilds: true}
  })
);
