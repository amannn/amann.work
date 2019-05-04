/* eslint-disable react/display-name */
import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {MDXProvider} from '@mdx-js/react';
import Helmet from 'react-helmet';
import mapPostEdgeToPost from 'utils/mapPostEdgeToPost';
import Text from 'components/Text';
import LocalizedLayout from 'localized/en/LocalizedLayout';
import Anchor from 'components/Anchor';
import BlogRollItem from 'components/BlogRollItem';
import styles from './BlogPost.module.scss';

const components = {
  h1: props => <Text marginBottom variant="h1" {...props} />,
  p: props => <Text marginBottom variant="body" {...props} />,
  a: props => <Anchor {...props} />,
  inlineCode: props => <Text component="span" variant="code" {...props} />,
  strong: props => (
    <Text component="span" variant="body" weight="bold" {...props} />
  )
};

const query = graphql`
  query BlogPost {
    posts: allMdx(sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          parent {
            ... on File {
              relativePath
            }
          }
          id
          frontmatter {
            title
            date(formatString: "MMM D, YYYY")
            excerpt
          }
        }
      }
    }
  }
`;

export default function BlogPost({children, location: {pathname}}) {
  const data = useStaticQuery(query);
  const posts = data.posts.edges.map(mapPostEdgeToPost);
  const normalizedPathname = pathname.replace(/\/$/, '');
  const currentPost = posts.find(post => post.href === normalizedPathname);
  const otherPosts = posts.filter(post => post !== currentPost);
  const suggestedPost = otherPosts.length > 0 ? otherPosts[0] : undefined;

  return (
    <LocalizedLayout>
      <Helmet>
        <title>{currentPost.title} – Jan Amann</title>
        <meta content={currentPost.excerpt} name="description" />
      </Helmet>
      <div className={styles.root}>
        <Text component="h1" variant="h1">
          {currentPost.title}
        </Text>
        <Text className={styles.date} color="accent" variant="label">
          {currentPost.published}
        </Text>
        <MDXProvider components={components}>{children}</MDXProvider>
      </div>
      {suggestedPost && (
        <>
          <Text className={styles.readNext} variant="caption">
            Read next
          </Text>
          <BlogRollItem post={suggestedPost} />
        </>
      )}
    </LocalizedLayout>
  );
}
