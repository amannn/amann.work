import React from 'react';
import styles from './Logo.module.scss';
import logoImage from './logo.svg';

export default function Logo() {
  return <img alt="Jan Amann" className={styles.root} src={logoImage} />;
}
