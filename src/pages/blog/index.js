import React from 'react';
import Helmet from 'react-helmet';
import LocalizedLayout from 'localized/en/LocalizedLayout';
import BlogRoll from 'components/BlogRoll';
import useBlogPosts from 'hooks/useBlogPosts';

export default function BlogPosts() {
  const posts = useBlogPosts();

  return (
    <LocalizedLayout title="Blog">
      <Helmet>
        <title>Blog – Jan Amann</title>
      </Helmet>
      <BlogRoll posts={posts} />
    </LocalizedLayout>
  );
}
