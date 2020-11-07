import cx from 'classnames';
import React from 'react';
import styles from './ResponsiveGrid.module.scss';

export default function ResponsiveGrid({children, className}) {
  return <div className={cx(className, styles.root)}>{children}</div>;
}
