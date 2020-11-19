/* eslint-disable css-modules/no-unused-class */
import cx from 'classnames';
import React from 'react';
import styles from './Card.module.scss';

export default function Card({
  children,
  className,
  component: Component = 'div',
  size = 'medium'
}) {
  return (
    <Component
      className={cx(className, styles.root, styles['root_size-' + size])}
    >
      {children}
    </Component>
  );
}
