/* eslint-disable react/display-name */
import React from 'react';
import {MDXProvider} from '@mdx-js/react';
import Helmet from 'react-helmet';
import Text from 'components/Text';
import LocalizedLayout from 'localized/en/LocalizedLayout';
import Project from 'components/Project/Project';
import styles from './BlogPost.module.scss';

const components = {
  h1: props => <Text marginBottom variant="h1" {...props} />,
  p: props => <Text marginBottom variant="body" {...props} />,
  a: Project.Anchor,
  inlineCode: props => (
    <Text component="span" marginBottom variant="code" {...props} />
  )
};

export default function BlogPost({
  children,
  pageContext: {
    frontmatter: {title, date, excerpt}
  }
}) {
  const formattedDate = date.replace(
    /^(\d+)-(\d+)-(\d+)(.+)/,
    (_, year, month, day) => `${day}.${month}.${year}`
  );

  return (
    <LocalizedLayout>
      <Helmet>
        <title>{title} – Jan Amann</title>
        <meta content={excerpt} name="description" />
      </Helmet>
      <div className={styles.root}>
        <Text component="h1" variant="h1">
          {title}
        </Text>
        <Text className={styles.date} color="pale" variant="label">
          {formattedDate}
        </Text>
        <MDXProvider components={components}>{children}</MDXProvider>
      </div>
    </LocalizedLayout>
  );
}
