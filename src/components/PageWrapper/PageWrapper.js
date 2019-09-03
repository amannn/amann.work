import React from 'react';
import Wrapper from 'components/Wrapper';
import styles from './PageWrapper.module.scss';

export default function PageWrapper({children}) {
  return <Wrapper className={styles.root}>{children}</Wrapper>;
}
