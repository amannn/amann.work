import React from 'react';
import cx from 'classnames';
import styles from './ContentWrapper.module.scss';

export default function ContentWrapper({children, className}) {
  return <div className={cx(styles.root, className)}>{children}</div>;
}
