import React from 'react';
import {Link} from 'gatsby';
import cx from 'classnames';
import Text from 'components/Text';
import styles from './BlogRollItem.module.scss';

export default function BlogRollItem({className, post}) {
  return (
    <Link className={cx(styles.root, className)} to={post.href}>
      <Text color="accentDark" component="h2" variant="h2">
        {post.title}
      </Text>
      <Text className={styles.description}>
        {post.excerpt}
        <Text color="pale" component="span">
          {' • '}
          {post.published}
        </Text>
      </Text>
    </Link>
  );
}
