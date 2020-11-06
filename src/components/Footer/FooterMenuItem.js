import Link from 'next/link';
import React from 'react';
import Text from 'components/Text';
import styles from './FooterMenuItem.module.scss';

export default function FooterMenuItem({children, href}) {
  return (
    <Link href={href}>
      <a className={styles.root}>
        <Text color="white" component="span" variant="label">
          {children}
        </Text>
      </a>
    </Link>
  );
}
