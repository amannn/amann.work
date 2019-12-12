import React from 'react';
import styles from './Card.module.scss';

export default function Card({children, component: Component = 'div'}) {
  return <Component className={styles.root}>{children}</Component>;
}
