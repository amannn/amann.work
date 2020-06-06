/* eslint-disable css-modules/no-unused-class */
import React from 'react';
import cx from 'classnames';
import Text from 'components/Text';
import styles from './Button.module.scss';

export default function Button({
  children,
  className = undefined,
  color = 'white',
  component: Component = 'button',
  onClick
}) {
  return (
    <Component
      className={cx(styles.root, className, styles['root_color-' + color])}
      onClick={onClick}
    >
      <Text
        className={styles.text}
        color={color === 'white' ? 'accent' : 'white'}
        component="span"
        variant="caption"
      >
        {children}
      </Text>
    </Component>
  );
}
