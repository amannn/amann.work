/* eslint-disable jsx-a11y/anchor-has-content */
import cx from 'classnames';
import Link from 'next/link';
import React, {useState, useMemo} from 'react';
import Card from 'components/Card';
import Text from 'components/Text';
import useTranslations from 'hooks/useTranslations';
import styles from './BlogRollItem.module.scss';

export default function BlogRollItem({className, post}) {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const t = useTranslations('BlogRollItem');

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
          <Link href={post.href}>
            <a
              {...props}
              className={cx(styles.root, className, props.className)}
              onBlur={onUnhighlight}
              onFocus={onHighlight}
              onMouseOut={onUnhighlight}
              onMouseOver={onHighlight}
            />
          </Link>
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
          {t('date', {date: new Date(post.date)})}
        </Text>
      </div>
    </Card>
  );
}
