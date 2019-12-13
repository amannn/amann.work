require('dotenv').config();

const GithubApi = require('./GithubApi');
const repositoryFragment = require('./repositoryFragment');

const EARLIEST_CONTRIBUTION_YEAR = 2013;
// The intention is to show PRs to repositories of others.
const PR_REPO_OWNER_BLACKLIST = ['amannn', 'molindo', 'tools-aoeur'];
// Not particularly interesting PRs.
const PR_ID_BLACKLIST = ['MDExOlB1bGxSZXF1ZXN0MTkyNTAwNjUz'];

const query = /* GraphQL */ `
  query($from: DateTime, $after: String) {
    viewer {
      login
      contributionsCollection(from: $from) {
        pullRequestContributions(first: 100, after: $after) {
          totalCount
          edges {
            cursor
            node {
              pullRequest {
                createdAt
                id
                title
                url
                state
                baseRepository {
                  isPrivate
                  ...repository
                }
              }
            }
          }
        }
      }
    }
  }
  ${repositoryFragment}
`;

async function getPullRequestContributionsPage(from, after) {
  const result = await GithubApi.query(query, {first: 100, from, after});
  return result.data.viewer.contributionsCollection.pullRequestContributions;
}

async function getPullRequestContributions(from) {
  const results = [];

  let cursor;
  let totalCount = Number.POSITIVE_INFINITY;
  while (results.length < totalCount) {
    const result = await getPullRequestContributionsPage(from, cursor);

    totalCount = result.totalCount;
    results.push(...result.edges.map(edge => edge.node));

    if (result.edges.length > 0) {
      cursor = result.edges[result.edges.length - 1].cursor;
    }
  }

  return results;
}

module.exports = async function getOpenSourceContributions() {
  const endYear = new Date().getFullYear();

  let pullRequestContributions = [];
  for (let year = EARLIEST_CONTRIBUTION_YEAR; year <= endYear; year++) {
    const from = `${year}-01-01T00:00:00`;
    const curResults = await getPullRequestContributions(from);
    pullRequestContributions.push(...curResults);
  }

  pullRequestContributions = pullRequestContributions
    .filter(
      result =>
        result.pullRequest.baseRepository.isPrivate === false &&
        !PR_REPO_OWNER_BLACKLIST.includes(
          result.pullRequest.baseRepository.owner.login
        ) &&
        !PR_ID_BLACKLIST.includes(result.pullRequest.id)
    )
    .sort((a, b) =>
      a.pullRequest.createdAt < b.pullRequest.createdAt ? 1 : -1
    );

  const pullRequestContributionsByRepository = pullRequestContributions.reduce(
    (acc, cur) => {
      const pullRequest = {...cur.pullRequest, baseRepository: undefined};
      const existingRepository = acc.find(
        curRepository =>
          curRepository.repository.id === cur.pullRequest.baseRepository.id
      );

      if (existingRepository) {
        existingRepository.pullRequests.push(pullRequest);
      } else {
        acc.push({
          repository: cur.pullRequest.baseRepository,
          pullRequests: [pullRequest]
        });
      }

      return acc;
    },
    []
  );

  return {
    totalCount: pullRequestContributionsByRepository.length,
    nodes: pullRequestContributionsByRepository
  };
};
