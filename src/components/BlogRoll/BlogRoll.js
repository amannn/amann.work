import React from 'react';
import ResponsiveGrid from 'components/ResponsiveGrid';
import BlogRollItem from './BlogRollItem';

export default function BlogRoll({posts}) {
  return (
    <ResponsiveGrid>
      {posts.map((post) => (
        <BlogRollItem key={post.slug} post={post} />
      ))}
    </ResponsiveGrid>
  );
}
