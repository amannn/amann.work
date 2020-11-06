/* eslint-disable react/display-name */
import {MDXProvider} from '@mdx-js/react';
import React from 'react';
import Anchor from 'components/Anchor';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import Text from 'components/Text';
import useTranslations from 'hooks/useTranslations';

const components = {
  h1: (props) => <Text marginBottom variant="h1" {...props} />,
  p: (props) => <Text marginBottom variant="body" {...props} />,
  a: (props) => <Anchor {...props} />,
  inlineCode: (props) => (
    <Text component="span" variant="inlineCode" {...props} />
  ),
  pre: (props) => <Text component="pre" variant="code" {...props} />,
  strong: (props) => (
    <Text component="span" variant="body" weight="bold" {...props} />
  )
};

export default function BlogPost({children, frontMatter}) {
  const t = useTranslations('BlogPost');

  return (
    <>
      <Meta description={frontMatter.excerpt} title={frontMatter.title} />
      <Layout
        slim
        subtitle={t('date', {date: frontMatter.date})}
        title={frontMatter.title}
      >
        <MDXProvider components={components}>{children}</MDXProvider>
      </Layout>
    </>
  );
}
