import React from 'react';
import FadeIn from 'components/FadeIn';
import ResponsiveGrid from 'components/ResponsiveGrid';
import BlogRollItem from './BlogRollItem';

export default function BlogRoll({posts}) {
  return (
    <ResponsiveGrid>
      {posts.map((post, index) => (
        <FadeIn key={post.slug} delay={0.3 + index * 0.1}>
          <BlogRollItem post={post} />
        </FadeIn>
      ))}
    </ResponsiveGrid>
  );
}
