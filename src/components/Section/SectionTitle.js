import React from 'react';
import Text from 'components/Text';
import styles from './SectionTitle.module.scss';

export default function SectionTitle({children}) {
  return (
    <Text className={styles.root} component="h2" variant="h2">
      {children.split(' ').map((part, i, array) => (
        <span key={part} className={styles.part}>
          {part}
          {i < array.length - 1 && ' '}
        </span>
      ))}
    </Text>
  );
}
