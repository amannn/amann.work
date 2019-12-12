import React, {useState, useMemo} from 'react';
import {Link} from 'gatsby';
import cx from 'classnames';
import Text from 'components/Text';
import Card from 'components/Card';
import styles from './BlogRollItem.module.scss';

export default function BlogRollItem({className, post}) {
  const [isHighlighted, setIsHighlighted] = useState(false);

  function onHighlight() {
    setIsHighlighted(true);
  }

  function onUnhighlight() {
    setIsHighlighted(false);
  }

  const MemoizedComponent = useMemo(
    () =>
      function Component(props) {
        return (
          <Link
            {...props}
            className={cx(styles.root, className, props.className)}
            onBlur={onUnhighlight}
            onFocus={onHighlight}
            onMouseOut={onUnhighlight}
            onMouseOver={onHighlight}
            to={post.href}
          />
        );
      },
    [className, post.href]
  );

  return (
    <Card component={MemoizedComponent}>
      <div className={styles.inner}>
        <Text
          color={isHighlighted ? undefined : 'accent'}
          component="h2"
          variant="h3"
        >
          {post.title}
        </Text>
        <Text className={styles.description}>{post.excerpt}</Text>
        <Text className={styles.published} color="pale">
          {post.published}
        </Text>
      </div>
    </Card>
  );
}
