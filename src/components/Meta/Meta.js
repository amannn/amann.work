import Head from 'next/head';
import useTranslations from 'hooks/useTranslations';

export default function Meta() {
  const t = useTranslations('Meta');

  return (
    <Head>
      <title>{t('title')}</title>
      <meta content={t('description')} name="description" />
    </Head>
  );
}
