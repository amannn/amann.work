import {useTranslations} from 'next-intl';
import Link from 'next/link';
import React from 'react';
import Anchor from 'components/Anchor';
import Layout from 'components/Layout';
import Meta from 'components/Meta';

// Force SSG as we're fetching data in `_app`
export function getStaticProps() {
  return {props: {}};
}

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <>
      <Meta title={t('title')} />
      <Layout
        description={t.rich('description', {
          // eslint-disable-next-line react/display-name
          home: (children) => (
            <Link href="/" passHref>
              <Anchor key="privacyLink" rel={null} target={null}>
                {children}
              </Anchor>
            </Link>
          )
        })}
        title={t('title')}
      />
    </>
  );
}
