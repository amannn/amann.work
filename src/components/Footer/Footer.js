import React from 'react';
import Wrapper from 'components/Wrapper';
import styles from './Footer.module.scss';

export default function Footer({children, menu, social}) {
  return (
    <div className={styles.root}>
      <Wrapper>
        {children}
        <div className={styles.navigation}>
          <div>{menu}</div>
          <div>{social}</div>
        </div>
      </Wrapper>
    </div>
  );
}
