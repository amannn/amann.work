import React from 'react';
import styles from './SocialIcon.module.scss';

export default function SocialIcon({children, href}) {
  return (
    <a
      className={styles.root}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}
