import React from 'react';
import BlogRollItem from 'components/BlogRollItem';
import styles from './BlogRoll.module.scss';

export default function BlogRoll({posts}) {
  return posts.map(post => (
    <BlogRollItem key={post.id} className={styles.item} post={post} />
  ));
}
