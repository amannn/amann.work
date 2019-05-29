import React from 'react';
import Text from 'components/Text';
import styles from './Title.module.scss';

export default function Title({children}) {
  return (
    <Text component="h2" variant="h2">
      <span className={styles.title}>{children}</span>
    </Text>
  );
}
