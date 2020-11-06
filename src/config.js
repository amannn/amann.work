import path from 'path';

export default {
  GH_TOKEN: process.env.GH_TOKEN,
  POSTS_DIRECTORY: path.join(process.cwd(), 'src/pages/blog')
};
