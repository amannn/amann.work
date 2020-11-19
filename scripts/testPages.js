/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const path = require('path');
const Url = require('url');
const puppeteer = require('puppeteer');
const parseXml = require('xml2js').parseStringPromise;

const BASE_URL = 'http://localhost:3000';

async function getUrls() {
  const sitemap = fs.readFileSync(
    path.join(process.cwd(), 'public/sitemap.xml'),
    'utf8'
  );

  const sitemapContent = await parseXml(sitemap);
  return sitemapContent.urlset.url.map((cur) => Url.parse(cur.loc[0]).pathname);
}

async function testUrl(url, browser) {
  const page = await browser.newPage();
  const response = await page.goto(BASE_URL + url);
  console.log('Testing ' + url);

  if (response.status() !== 200) {
    throw new Error('Failed to render: ' + url);
  }
}

async function run() {
  const urls = await getUrls();

  const browser = await puppeteer.launch();
  try {
    for (const url of urls) {
      await testUrl(url, browser);
    }
    console.log('\nAll pages can be loaded.');
  } finally {
    await browser.close();
  }
}

run().catch((error) => {
  throw error;
});
