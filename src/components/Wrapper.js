import React from 'react';
import cx from 'classnames';
import styles from './Wrapper.module.scss';

export default function Wrapper({children, className, style}) {
  return (
    <div className={cx(styles.root, className)} style={style}>
      {children}
    </div>
  );
}
