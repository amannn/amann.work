import {useTranslations} from 'next-intl';
import React from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Meta from 'components/Meta';
import ProjectsList from 'components/ProjectsList';
import useBackgroundColor from 'hooks/useBackgroundColor';
import styles from './work.module.scss';

// Force SSG as we're fetching data in `_app`
export function getStaticProps() {
  return {props: {}};
}

export default function Work() {
  const t = useTranslations('Work');
  useBackgroundColor('white');

  return (
    <>
      <Meta title={t('title')} />
      <Header
        description={t('description')}
        hasBackground={false}
        title={t('title')}
      />
      <div className={styles.list}>
        <ProjectsList />
      </div>
      <Footer />
    </>
  );
}
