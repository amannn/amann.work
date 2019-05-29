import React from 'react';
import Wrapper from 'components/Wrapper';
import styles from './Section.module.scss';

export default function Section({children, title}) {
  return (
    <div className={styles.root}>
      <Wrapper>
        <div className={styles.title}>{title}</div>
      </Wrapper>
      <div className={styles.children}>{children}</div>
    </div>
  );
}
