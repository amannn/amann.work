/* eslint-disable css-modules/no-unused-class */
import React from 'react';
import cx from 'classnames';
import styles from './Text.module.scss';

export default function Text({
  children,
  className,
  component = 'p',
  color = 'default',
  marginBottom,
  variant = 'paragraph'
}) {
  const renderClassName = cx(
    styles.root,
    className,
    styles['root_variant-' + variant],
    styles['root_color-' + color],
    {
      [styles.root_marginBottom]: marginBottom
    }
  );

  return React.createElement(component, {className: renderClassName}, children);
}
