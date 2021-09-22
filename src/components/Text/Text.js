/* eslint-disable css-modules/no-unused-class */
import cx from 'classnames';
import React from 'react';
import EnvUtils from 'utils/EnvUtils';
import styles from './Text.module.scss';

const isWindows = EnvUtils.isWindows();

export default function Text({
  children,
  className,
  color = 'default',
  component = 'p',
  marginBottom,
  variant = 'paragraph',
  weight
}) {
  const renderClassName = cx(
    styles.root,
    className,
    isWindows && styles.root_windows,
    styles['root_variant-' + variant],
    styles['root_color-' + color],
    {
      [styles['root_weight-' + weight]]: weight,
      [styles.root_marginBottom]: marginBottom
    }
  );

  return React.createElement(component, {className: renderClassName}, children);
}
