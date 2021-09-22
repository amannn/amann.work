import {useTranslations} from 'next-intl';
import Link from 'next/link';
import React from 'react';
import CallToAction from 'components/CallToAction';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import ResponsiveGrid from 'components/ResponsiveGrid';
import {ServicesItem} from 'components/Services';
import useBackgroundColor from 'hooks/useBackgroundColor';
import styles from './services.module.scss';

// Force SSG as we're fetching data in `_app`
export function getStaticProps() {
  return {props: {}};
}

export default function Services() {
  const t = useTranslations('Services');
  useBackgroundColor('white');

  return (
    <>
      <Meta title={t('title')} />
      <Layout description={t('description')} title={t('title')}>
        <ResponsiveGrid>
          <ServicesItem title={t('reactApps.title')}>
            {t('reactApps.description')}
          </ServicesItem>
          <ServicesItem title={t('componentLibraries.title')}>
            {t('componentLibraries.description')}
          </ServicesItem>
          <ServicesItem title={t('mobileApps.title')}>
            {t('mobileApps.description')}
          </ServicesItem>
          <ServicesItem title={t('consulting.title')}>
            {t('consulting.description')}
          </ServicesItem>
        </ResponsiveGrid>
        <Link href="/work" passHref>
          <CallToAction className={styles.work}>{t('work')}</CallToAction>
        </Link>
      </Layout>
    </>
  );
}
