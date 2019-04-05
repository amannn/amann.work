import React from 'react';
import logoImage from './images/logo.svg';
import styles from './Logo.module.scss';

export default function Logo() {
  return <img alt="Jan Amann" className={styles.root} src={logoImage} />;
}
