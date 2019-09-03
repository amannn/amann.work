import React from 'react';
import cx from 'classnames';
import Text from 'components/Text';
import styles from './ProjectButton.module.scss';

export default function ProjectButton({
  className,
  children,
  href,
  target = '_blank'
}) {
  return (
    <a
      className={cx(styles.root, className)}
      href={href}
      rel="noopener"
      target={target}
    >
      <span className={styles.arrow} />
      <Text
        className={styles.text}
        color="accent"
        component="span"
        variant="caption"
      >
        {children}
      </Text>
    </a>
  );
}
