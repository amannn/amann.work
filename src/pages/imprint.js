import {useTranslations} from 'next-intl';
import React from 'react';
import Anchor from 'components/Anchor';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import Text from 'components/Text';
import styles from './imprint.module.scss';

// Force SSG as we're fetching data in `_app`
export function getStaticProps() {
  return {props: {}};
}

export default function Imprint() {
  const t = useTranslations('Imprint');

  return (
    <>
      <Meta title={t('title')} />
      <Layout title={t('title')}>
        <Text component="h2" variant="h3">
          {t('name')}
        </Text>
        <Text className={styles.line} marginBottom>
          {t('subline')}
        </Text>
        <Text className={styles.line} marginBottom>
          {t('address')}
        </Text>
        <Text className={styles.line} marginBottom>
          {t('contact')}
        </Text>
        <Text className={styles.line} marginBottom>
          {t('uid')}
        </Text>
        <Text className={styles.line}>
          {t.rich('privacy', {
            // eslint-disable-next-line react/display-name
            privacyLink: (children) => (
              <Anchor href={t('privacyHref')}>{children}</Anchor>
            )
          })}
        </Text>
      </Layout>
    </>
  );
}
