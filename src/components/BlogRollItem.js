import React, {useState} from 'react';
import {Link} from 'gatsby';
import cx from 'classnames';
import Text from 'components/Text';
import styles from './BlogRollItem.module.scss';

export default function BlogRollItem({className, post}) {
  const [isHighlighted, setIsHighlighted] = useState(false);

  function onHighlight() {
    setIsHighlighted(true);
  }

  function onUnhighlight() {
    setIsHighlighted(false);
  }

  return (
    <Link
      className={cx(styles.root, className)}
      onBlur={onUnhighlight}
      onFocus={onHighlight}
      onMouseOut={onUnhighlight}
      onMouseOver={onHighlight}
      to={post.href}
    >
      <div className={styles.inner}>
        <Text
          color={isHighlighted ? undefined : 'accent'}
          component="h2"
          variant="h2"
        >
          {post.title}
        </Text>
        <Text className={styles.description}>{post.excerpt}</Text>
        <Text className={styles.published} color="pale">
          {post.published}
        </Text>
      </div>
    </Link>
  );
}
