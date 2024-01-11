import {useTranslations} from 'next-intl';
import Image from 'next/legacy/image';
import React from 'react';
import styles from './Logo.module.scss';
import logoImage from './logo.svg';

export default function Logo() {
  const t = useTranslations('Logo');

  return (
    <Image
      alt={t('alt')}
      className={styles.root}
      height={60}
      priority
      src={logoImage}
      width={60}
    />
  );
}
