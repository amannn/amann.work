/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {graphql} from 'gatsby';
import Helmet from 'react-helmet';
import LocalizedLayout from 'localized/en/LocalizedLayout';
import BlogRoll from 'components/BlogRoll';

export default function BlogPosts({data}) {
  const posts = data.posts.edges.map(({node: {id, frontmatter, parent}}) => ({
    id,
    title: frontmatter.title,
    published: frontmatter.date,
    href: 'blog/' + parent.relativePath.split('/')[0],
    excerpt: frontmatter.excerpt
  }));

  return (
    <LocalizedLayout title="Blog">
      <Helmet>
        <title>Blog – Jan Amann</title>
      </Helmet>
      <BlogRoll posts={posts} />
    </LocalizedLayout>
  );
}

export const query = graphql`
  query BlogPosts {
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
            date(formatString: "D.M.YYYY")
            excerpt
          }
        }
      }
    }
  }
`;
