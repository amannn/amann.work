import React from 'react';
import styles from './ImprintLayout.module.scss';

export default function ImprintLayout({children}) {
  return <div className={styles.root}>{children}</div>;
}
