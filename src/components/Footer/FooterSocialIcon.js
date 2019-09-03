import React from 'react';
import styles from './FooterSocialIcon.module.scss';

export default function FooterSocialIcon({children, href, ...rest}) {
  return (
    <a
      className={styles.root}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      {...rest}
    >
      {children}
    </a>
  );
}
