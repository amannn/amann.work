import {useTranslations} from 'next-intl';
import Head from 'next/head';

export default function Meta({description, title}) {
  const t = useTranslations('Meta');

  const finalTitle = [title, t('title')]
    .filter((part) => part != null)
    .join(' - ');
  const finalDescription = description || t('description');

  return (
    <Head>
      <title>{finalTitle}</title>
      <meta content={finalDescription} name="description" />
      <meta content={finalTitle} property="og:title" />
      <meta content={finalDescription} property="og:description" />
    </Head>
  );
}
