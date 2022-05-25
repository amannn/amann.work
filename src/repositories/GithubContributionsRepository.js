import GithubRepository from './GithubRepository';

const MAINTAINED_REPOSITORIES = [
  'amannn/next-intl',
  'molindo/react-apollo-network-status',
  'amannn/next-query-params',
  'amannn/action-semantic-pull-request',
  'amannn/next-client-script',
  'amannn/multi-sitemap',
  'amannn/react-hooks',
  'amannn/atom-format-javascript-comment',
  'molindo/eslint-config-molindo'
];

const repositoryFragment = /* GraphQL */ `
  fragment repository on Repository {
    id
    name
    owner {
      login
      url
    }
    url
    description
    stargazers {
      totalCount
    }
    languages(first: 1, orderBy: {field: SIZE, direction: DESC}) {
      totalCount
      nodes {
        color
        name
      }
    }
  }
`;

export default class GithubContributionsRepository {
  static async getOpenSourceRepositories(opts = {}) {
    let {limit, skip} = opts;
    skip ??= 0;
    limit ??= 20;

    const query = /* GraphQL */ `
      query($owner: String!, $name: String!) {
        repository(owner: $owner, name: $name) {
          ...repository
        }
      }
      ${repositoryFragment}
    `;

    return Promise.all(
      MAINTAINED_REPOSITORIES.map((repositoryName) => {
        const [owner, name] = repositoryName.split('/');
        return GithubRepository.query(query, {name, owner});
      })
    )
      .then((responses) =>
        responses.map((response) => response.data.repository).slice(skip, limit)
      )
      .then((repositories) => ({
        totalCount: repositories.length,
        nodes: repositories
      }));
  }

  static async getPullRequestContributions(opts = {}) {
    let {limit, skip} = opts;
    skip ??= 0;
    limit ??= 150;

    const EARLIEST_CONTRIBUTION_YEAR = 2013;
    // The intention is to show PRs to repositories of others.
    const PR_REPO_OWNER_IGNORELIST = [
      'amannn',
      'molindo',
      'tools-aoeur',
      'CaritasDeutschland',
      'virtualidentityag'
    ];

    // Not particularly interesting PRs.
    const PR_ID_IGNORELIST = [
      'MDExOlB1bGxSZXF1ZXN0NTYwMDU5MTcx',
      'MDExOlB1bGxSZXF1ZXN0NTEzMDI3MzY2',
      'MDExOlB1bGxSZXF1ZXN0NTEyMzM0MTg4',
      'MDExOlB1bGxSZXF1ZXN0MTkyNTAwNjUz',
      'MDExOlB1bGxSZXF1ZXN0MzYwOTI4MzYw',
      'MDExOlB1bGxSZXF1ZXN0NDc0Nzk1MDc3',
      'MDExOlB1bGxSZXF1ZXN0NzEyMDk0NTI1'
    ];

    const endYear = new Date().getFullYear();

    let pullRequestContributions = [];
    for (let year = EARLIEST_CONTRIBUTION_YEAR; year <= endYear; year++) {
      const from = `${year}-01-01T00:00:00`;
      const curResults = await GithubContributionsRepository.getPullRequestContributionsPart(
        from
      );
      pullRequestContributions.push(...curResults);
    }

    pullRequestContributions = pullRequestContributions
      .filter(
        (result) =>
          result.pullRequest.baseRepository.isPrivate === false &&
          !PR_REPO_OWNER_IGNORELIST.includes(
            result.pullRequest.baseRepository.owner.login
          ) &&
          !PR_ID_IGNORELIST.includes(result.pullRequest.id)
      )
      .sort((a, b) =>
        a.pullRequest.createdAt < b.pullRequest.createdAt ? 1 : -1
      )
      .map((cur) => cur.pullRequest);

    return {
      totalCount: pullRequestContributions.length,
      nodes: pullRequestContributions.slice(skip, limit)
    };
  }

  static async getContributionsByRepository(opts = {}) {
    let {limit, skip} = opts;
    skip ??= 0;
    limit ??= 20;

    const pullRequestContributionsByRepository = (
      await this.getPullRequestContributions()
    ).nodes
      .reduce((acc, cur) => {
        const pullRequest = {...cur, baseRepository: null};
        const existingRepository = acc.find(
          (curRepository) =>
            curRepository.repository.id === cur.baseRepository.id
        );

        if (existingRepository) {
          existingRepository.pullRequests.push(pullRequest);
        } else {
          acc.push({
            repository: cur.baseRepository,
            pullRequests: [pullRequest]
          });
        }

        return acc;
      }, [])
      .slice(skip, limit);

    return {
      totalCount: pullRequestContributionsByRepository.length,
      nodes: pullRequestContributionsByRepository
    };
  }

  static async getPullRequestContributionsPage(from, after) {
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

    const result = await GithubRepository.query(query, {
      first: 100,
      from,
      after
    });
    return result.data.viewer.contributionsCollection.pullRequestContributions;
  }

  static async getPullRequestContributionsPart(from) {
    const results = [];

    let cursor;
    let totalCount = Number.POSITIVE_INFINITY;
    while (results.length < totalCount) {
      const result = await GithubContributionsRepository.getPullRequestContributionsPage(
        from,
        cursor
      );

      totalCount = result.totalCount;
      results.push(...result.edges.map((edge) => edge.node));

      if (result.edges.length > 0) {
        cursor = result.edges[result.edges.length - 1].cursor;
      }
    }

    return results;
  }
}
