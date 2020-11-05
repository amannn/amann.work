/* eslint-disable import/no-extraneous-dependencies */
const withImages = require('next-images');
const withVideos = require('next-videos');

module.exports = withVideos(
  withImages({
    i18n: {
      locales: ['en', 'de'],
      defaultLocale: 'en'
    }
  })
);
