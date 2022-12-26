/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const {configureSitemap} = require('@sergeymyssak/nextjs-sitemap');

configureSitemap({
  baseUrl: 'https://amann.work',
  langs: ['en', 'de'],
  excludeExtensions: ['scss', 'mp4', 'png'],
  targetDirectory: path.join(process.cwd(), 'public'),
  pagesDirectory: path.join(process.cwd(), 'src/pages')
})
  .generateSitemap()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Sitemap created\n');
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
