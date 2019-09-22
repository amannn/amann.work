import React from 'react';
import styles from './Link.module.scss';

export default function Link({children, href, target = '_blank'}) {
  return (
    <a className={styles.root} href={href} target={target}>
      {children}
    </a>
  );
}
