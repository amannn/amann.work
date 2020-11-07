/* eslint-disable jsx-a11y/anchor-has-content */
import cx from 'classnames';
import Link from 'next/link';
import React, {useState, useMemo} from 'react';
import Card from 'components/Card';
import Text from 'components/Text';
import styles from './CardLink.module.scss';

export default function CardLink({
  children,
  className,
  description,
  href,
  title
}) {
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
          <Link href={href}>
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
    [className, href]
  );

  return (
    <Card component={MemoizedComponent}>
      <div className={styles.inner}>
        <Text
          color={isHighlighted ? undefined : 'accent'}
          component="h2"
          variant="h3"
        >
          {title}
        </Text>
        <Text className={styles.description}>{description}</Text>
        {children}
      </div>
    </Card>
  );
}
