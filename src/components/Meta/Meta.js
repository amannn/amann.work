import {useTranslations} from 'next-intl';
import Head from 'next/head';

export default function Meta({description, title}) {
  const t = useTranslations('Meta');

  return (
    <Head>
      <title>
        {[title, t('title')].filter((part) => part != null).join(' - ')}
      </title>
      <meta content={description || t('description')} name="description" />
    </Head>
  );
}
