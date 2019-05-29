import React from 'react';
import cx from 'classnames';
import styles from './Wrapper.module.scss';

export default function Wrapper({
  background,
  children,
  className,
  innerClassName,
  padding,
  style
}) {
  return (
    <div
      className={cx(styles.root, className, {
        [styles.root_background]: background,
        [styles.root_padding]: padding
      })}
      style={style}
    >
      <div className={cx(styles.inner, innerClassName)}>{children}</div>
    </div>
  );
}
