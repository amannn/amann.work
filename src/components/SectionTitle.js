import React from 'react';
import Text from './Text';
import styles from './SectionTitle.module.scss';

export default function SectionTitle({children}) {
  return (
    <div className={styles.root}>
      <Text className={styles.text} component="h2" variant="caption">
        {children}
      </Text>
    </div>
  );
}
