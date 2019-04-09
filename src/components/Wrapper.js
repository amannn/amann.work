import React from 'react';
import cx from 'classnames';
import styles from './Wrapper.module.scss';

export default function Wrapper({children, className, marginBottom, style}) {
  return (
    <div
      className={cx(styles.root, className, {
        [styles.root_marginBottom]: marginBottom
      })}
      style={style}
    >
      {children}
    </div>
  );
}
