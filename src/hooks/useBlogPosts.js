import {useStaticQuery, graphql} from 'gatsby';

const query = graphql`
  query useBlogPosts {
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

export default function useBlogPosts() {
  const data = useStaticQuery(query);
  return data.posts.edges.map(edge => {
    const {id, frontmatter, parent} = edge.node;

    return {
      id,
      title: frontmatter.title,
      published: frontmatter.date,
      href: '/blog/' + parent.relativePath.split('/')[0],
      excerpt: frontmatter.excerpt
    };
  });
}
