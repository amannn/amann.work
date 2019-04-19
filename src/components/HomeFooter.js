import React from 'react';
import Footer from 'components/Footer';
import styles from './HomeFooter.module.scss';

export default function HomeFooter(props) {
  return <Footer className={styles.root} {...props} />;
}
