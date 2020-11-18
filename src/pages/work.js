import React from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Meta from 'components/Meta';
import ProjectsList from 'components/ProjectsList';
import useBackgroundColor from 'hooks/useBackgroundColor';
import useTranslations from 'hooks/useTranslations';
import styles from './work.module.scss';

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
