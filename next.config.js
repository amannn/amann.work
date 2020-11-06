/* eslint-disable import/no-extraneous-dependencies */
const withImages = require('next-images');
const withMdxEnhanced = require('next-mdx-enhanced')({
  layoutPath: 'src/components/BlogPost',
  defaultLayout: true
});
const withVideos = require('next-videos');

module.exports = withMdxEnhanced(
  withVideos(
    withImages({
      pageExtensions: ['js', 'md', 'mdx'],
      i18n: {
        locales: ['en', 'de'],
        defaultLocale: 'en'
      },
      experimental: {
        optimizeFonts: true
      }
    })
  )
);
