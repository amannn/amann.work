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
      experimental: {
        reactMode: 'concurrent'
      },
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
            },
            // https://github.com/framer/motion/issues/441#issuecomment-684689731
            {
              key: 'Cross-Origin-Opener-Policy',
              value: 'same-origin'
            },
            {
              key: 'Cross-Origin-Embedder-Policy',
              value: 'require-corp'
            }
          ]
        }
      ]
    })
  )
);
