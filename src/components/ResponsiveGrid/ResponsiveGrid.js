import React from 'react';
import styles from './ResponsiveGrid.module.scss';

export default function ResponsiveGrid({children}) {
  return <div className={styles.root}>{children}</div>;
}
