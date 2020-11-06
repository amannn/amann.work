import React from 'react';
import BlogRoll from 'components/BlogRoll';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import useTranslations from 'hooks/useTranslations';
import BlogRepository from 'repositories/BlogRepository';

export async function getStaticProps() {
  return {
    props: {
      posts: await BlogRepository.getPosts()
    }
  };
}

export default function BlogPosts({posts}) {
  const t = useTranslations('BlogPosts');

  return (
    <>
      <Meta title={t('title')} />
      <Layout title={t('title')}>
        <BlogRoll posts={posts} />
      </Layout>
    </>
  );
}
