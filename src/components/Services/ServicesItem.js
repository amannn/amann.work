import React from 'react';
import Text from 'components/Text';
import styles from './ServicesItem.module.scss';

export default function ServicesItem({children, title}) {
  return (
    <div className={styles.root}>
      <Text color="accent" variant="h3">
        {title}
      </Text>
      <Text className={styles.children}>{children}</Text>
    </div>
  );
}
