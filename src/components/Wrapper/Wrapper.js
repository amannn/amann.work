import cx from 'classnames';
import React from 'react';
import styles from './Wrapper.module.scss';

export default function Wrapper({
  background,
  children,
  className,
  innerClassName,
  padding,
  slim,
  style
}) {
  return (
    <div
      className={cx(styles.root, className, {
        [styles.root_background]: background,
        [styles.root_padding]: padding,
        [styles.root_slim]: slim
      })}
      style={style}
    >
      <div className={cx(styles.inner, innerClassName)}>{children}</div>
    </div>
  );
}
