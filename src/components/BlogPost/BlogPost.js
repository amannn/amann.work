/* eslint-disable react/display-name */
import {MDXProvider} from '@mdx-js/react';
import {parseISO} from 'date-fns';
import {useIntl} from 'next-intl';
import React from 'react';
import Anchor from 'components/Anchor';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import Text from 'components/Text';

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

export default function BlogPost({children, metadata}) {
  const intl = useIntl();

  return (
    <>
      <Meta description={metadata.excerpt} title={metadata.title} />
      <Layout
        slim
        subtitle={intl.formatDateTime(parseISO(metadata.date), 'date')}
        title={metadata.title}
      >
        <MDXProvider components={components} disableParentContext>
          {children}
        </MDXProvider>
      </Layout>
    </>
  );
}
