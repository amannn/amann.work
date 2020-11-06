import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import config from 'config';

export default class BlogRepository {
  static async getPosts() {
    return fs
      .readdirSync(config.POSTS_DIRECTORY)
      .filter((slug) => slug !== 'index.js')
      .map((slug) => {
        const postPath = path.join(config.POSTS_DIRECTORY, `${slug}/index.mdx`);
        const {data} = matter(fs.readFileSync(postPath, 'utf8'));
        return {
          ...data,
          href: `/blog/${slug}`,
          date: data.date.toISOString(),
          slug
        };
      })
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  }
}
