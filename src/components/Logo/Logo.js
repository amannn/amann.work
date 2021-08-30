/* eslint-disable @next/next/no-img-element */
import {useTranslations} from 'next-intl';
import React from 'react';
import styles from './Logo.module.scss';
import logoImage from './logo.svg';

export default function Logo() {
  const t = useTranslations('Logo');

  return (
    <img
      alt={t('alt')}
      className={styles.root}
      height={60}
      src={logoImage}
      width={60}
    />
  );
}
