import React from 'react';
import cx from 'classnames';
import Text from 'components/Text';
import styles from './Button.module.scss';

export default function Button({
  children,
  className = undefined,
  component: Component = 'button',
  onClick
}) {
  return (
    <Component className={cx(styles.root, className)} onClick={onClick}>
      <Text
        className={styles.text}
        color="accent"
        component="span"
        variant="caption"
      >
        {children}
      </Text>
    </Component>
  );
}
