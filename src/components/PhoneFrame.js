import React from 'react';
import styles from './PhoneFrame.module.scss';

export default function PhoneFrame({children}) {
  return (
    <div className={styles.root}>
      <span className={styles.cameraAndSpeaker} />
      {children}
      <span className={styles.home} />
    </div>
  );
}
