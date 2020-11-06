import React from 'react';
import Text from 'components/Text';
import styles from './Figure.module.scss';

export default function Figure({caption, children}) {
  return (
    <figure className={styles.root}>
      {children}
      {caption && (
        <Text
          className={styles.caption}
          color="pale"
          component="figcaption"
          variant="label"
        >
          {caption}
        </Text>
      )}
    </figure>
  );
}
