import React from 'react';
import BlogRollItem from 'components/BlogRollItem';
import styles from './BlogRoll.module.scss';

export default function BlogRoll({posts}) {
  return (
    <div className={styles.root}>
      {posts.map(post => (
        <BlogRollItem key={post.id} post={post} />
      ))}
    </div>
  );
}
