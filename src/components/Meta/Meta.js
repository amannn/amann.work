import Head from 'next/head';
import useTranslations from 'hooks/useTranslations';

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
