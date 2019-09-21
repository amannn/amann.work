const path = require('path');
const getOpenSourceContributions = require('./getOpenSourceContributions');

exports.onCreateWebpackConfig = ({actions}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
  });
};

exports.sourceNodes = ({actions}) => {
  const {createTypes} = actions;
  const typeDefs = `
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

    type GithubRepository {
      id: ID!
      name: String!
      description: String!
      url: String!
      owner: GithubUser!
    }
    
    type OpenSourceContribution {
      repository: GithubRepository!
      pullRequests: [GithubPullRequest!]!
    }

    type OpenSourceContributionConnection {
      totalCount: Int!
      nodes: [OpenSourceContribution!]!
    }
  `;

  createTypes(typeDefs);
};

exports.createResolvers = ({createResolvers}) => {
  createResolvers({
    Query: {
      openSourceContributions: {
        type: 'OpenSourceContributionConnection',
        args: {
          skip: 'Int',
          limit: 'Int'
        },
        resolve(source, {skip = 0, limit = 20}) {
          return getOpenSourceContributions().then(data => ({
            ...data,
            nodes: data.nodes.slice(skip, limit)
          }));
        }
      }
    }
  });
};
