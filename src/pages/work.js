import React, {useEffect} from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Meta from 'components/Meta';
import ProjectsList from 'components/ProjectsList';
import useTranslations from 'hooks/useTranslations';
import styles from './work.module.scss';

export default function Work() {
  const t = useTranslations('Work');

  // Remove the background color for this page, as the
  // projects list requires a bright background.
  useEffect(() => {
    const {style} = document.documentElement;
    const prev = getComputedStyle(document.documentElement)['background-color'];
    style.backgroundColor = 'white';
    return () => {
      style.backgroundColor = prev;
    };
  }, []);

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
