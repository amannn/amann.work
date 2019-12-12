const getOpenSourceContributions = require('./getOpenSourceContributions');
const getOpenSourceRepositories = require('./getOpenSourceRepositories');

module.exports = {
  Query: {
    maintainedOpenSourceRepositories: {
      type: 'OpenSourceRepositoriesConnection',
      args: {
        skip: 'Int',
        limit: 'Int'
      },
      resolve(source, {skip = 0, limit = 20}) {
        return getOpenSourceRepositories().then(data => ({
          ...data,
          nodes: data.nodes.slice(skip, limit)
        }));
      }
    },

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
};
