/* eslint-disable jsx-a11y/anchor-has-content */
import cx from 'classnames';
import ConditionalWrap from 'conditional-wrap';
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
  target,
  title,
  ...rest
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
        const isExternal = href.startsWith('http');

        return (
          <ConditionalWrap
            condition={!isExternal}
            wrap={(content) => (
              <Link href={href} legacyBehavior>
                {content}
              </Link>
            )}
          >
            <a
              {...props}
              className={cx(styles.root, className, props.className)}
              href={href}
              onBlur={onUnhighlight}
              onFocus={onHighlight}
              onMouseOut={onUnhighlight}
              onMouseOver={onHighlight}
              target={target}
            />
          </ConditionalWrap>
        );
      },
    [className, href, target]
  );

  return (
    <Card component={MemoizedComponent} {...rest}>
      <div className={styles.inner}>
        {title && (
          <Text
            color={isHighlighted ? undefined : 'primary'}
            component="h2"
            variant="h3"
          >
            {title}
          </Text>
        )}
        {description && (
          <Text className={styles.description}>{description}</Text>
        )}
        {children}
      </div>
    </Card>
  );
}
