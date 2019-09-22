import {useStaticQuery, graphql} from 'gatsby';

const query = graphql`
  query useOpenSourceContributions {
    openSourceContributions(limit: 30) {
      totalCount
      nodes {
        repository {
          id
          name
          description
          url
          owner {
            url
            login
          }
        }
        pullRequests {
          id
          createdAt
          title
          url
          state
        }
      }
    }
  }
`;

export default function useOpenSourceContributions() {
  const data = useStaticQuery(query);
  return data.openSourceContributions;
}
