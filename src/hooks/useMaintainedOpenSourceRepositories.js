import {useStaticQuery, graphql} from 'gatsby';

const query = graphql`
  query useMaintainedOpenSourceRepositories {
    maintainedOpenSourceRepositories(limit: 30) {
      totalCount
      nodes {
        id
        ...GithubRepository_repository
      }
    }
  }
`;

export default function useMaintainedOpenSourceRepositories() {
  const data = useStaticQuery(query);
  return data.maintainedOpenSourceRepositories;
}
