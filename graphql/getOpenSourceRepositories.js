const GithubApi = require('./GithubApi');
const repositoryFragment = require('./repositoryFragment');

const MAINTAINED_REPOSITORIES = [
  'molindo/react-apollo-network-status',
  'amannn/multi-sitemap',
  'amannn/action-semantic-pull-request',
  'amannn/atom-format-javascript-comment',
  'molindo/eslint-config-molindo'
];

const query = /* GraphQL */ `
  query($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      ...repository
    }
  }
  ${repositoryFragment}
`;

module.exports = function getOpenSourceRepositories() {
  return Promise.all(
    MAINTAINED_REPOSITORIES.map(repositoryName => {
      const [owner, name] = repositoryName.split('/');
      return GithubApi.query(query, {name, owner});
    })
  )
    .then(responses => responses.map(response => response.data.repository))
    .then(repositories => ({
      totalCount: repositories.length,
      nodes: repositories
    }));
};
