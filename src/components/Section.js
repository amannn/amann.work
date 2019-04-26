import React from 'react';
import Text from './Text';
import styles from './Section.module.scss';

export default function Section({children, title}) {
  return (
    <div className={styles.root}>
      <div className={styles.titleWrapper}>
        <Text className={styles.title} component="h2" variant="caption">
          {title}
        </Text>
      </div>
      {children}
    </div>
  );
}
