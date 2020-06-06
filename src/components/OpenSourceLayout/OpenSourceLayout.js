import React from 'react';
import Text from '../Text';
import styles from './OpenSourceLayout.module.scss';

export default function OpenSourceLayout({
  librariesTitle,
  libraries,
  contributionsTitle,
  contributions
}) {
  return (
    <>
      <Text className={styles.libraries} variant="h3">
        {librariesTitle}
      </Text>
      {libraries}
      <Text className={styles.contributions} variant="h3">
        {contributionsTitle}
      </Text>
      {contributions}
    </>
  );
}
