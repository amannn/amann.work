import React from 'react';
import BlogRoll from 'components/BlogRoll';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import BlogRepository from 'repositories/BlogRepository';

export async function getStaticProps() {
  return {
    props: {
      posts: await BlogRepository.getPosts()
    }
  };
}

export default function BlogPosts({posts}) {
  return (
    <>
      <Meta title="Blog" />
      <Layout title="Blog">
        <BlogRoll posts={posts} />
      </Layout>
    </>
  );
}
