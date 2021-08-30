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
    headers: () => [
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public,max-age=31536000,immutable'
          }
        ]
      }
    ],
    // Runs separately
    eslint: {ignoreDuringBuilds: true}
  })
);
