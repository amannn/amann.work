/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {graphql} from 'gatsby';
import Helmet from 'react-helmet';
import LocalizedLayout from 'localized/en/LocalizedLayout';
import BlogRoll from 'components/BlogRoll';
import mapPostEdgeToPost from 'utils/mapPostEdgeToPost';

export default function BlogPosts({data}) {
  const posts = data.posts.edges.map(mapPostEdgeToPost);

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
  query Blog {
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
