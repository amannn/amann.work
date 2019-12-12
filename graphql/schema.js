module.exports = /* GraphQL */ `
  type GithubUser {
    login: String!
    url: String!
  }

  enum GithubPullRequestStatus {
    OPEN
    CLOSED
    MERGED
  }

  type GithubPullRequest {
    id: ID!
    createdAt: String!
    title: String!
    url: String!
    state: GithubPullRequestStatus!
  }

  type GithubLanguage {
    name: String!
    color: String!
  }

  type GithubLanguageConnection {
    totalCount: Int!
    nodes: [GithubLanguage!]!
  }

  type GithubStargazerConnection {
    totalCount: Int!
  }

  type GithubRepository {
    id: ID!
    name: String!
    description: String!
    url: String!
    owner: GithubUser!
    stargazers: GithubStargazerConnection!
    languages: GithubLanguageConnection!
  }

  type OpenSourceContribution {
    repository: GithubRepository!
    pullRequests: [GithubPullRequest!]!
  }

  type OpenSourceContributionConnection {
    totalCount: Int!
    nodes: [OpenSourceContribution!]!
  }

  type OpenSourceRepositoriesConnection {
    totalCount: Int!
    nodes: [GithubRepository!]!
  }
`;
