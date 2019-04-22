import React from 'react';
import styles from './PhoneFrame.module.scss';

export default function PhoneFrame({screenBackgroundColor, children}) {
  return (
    <div className={styles.root}>
      <span className={styles.cameraAndSpeaker} />
      <div
        className={styles.children}
        style={{backgroundColor: screenBackgroundColor}}
      >
        {children}
      </div>
      <span className={styles.home} />
    </div>
  );
}
