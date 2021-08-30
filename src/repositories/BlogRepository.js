import fs from 'fs';
import config from 'config';

export default class BlogRepository {
  static async getPosts() {
    return await Promise.all(
      fs
        .readdirSync(config.POSTS_DIRECTORY)
        .filter((slug) => slug !== 'index.js')
        .map((slug) => {
          const {metadata} = require('pages/blog/' + slug + '/index.mdx');
          return {...metadata, slug, href: `/blog/${slug}`};
        })
        .sort((a, b) => (a.date < b.date ? 1 : -1))
    );
  }
}
