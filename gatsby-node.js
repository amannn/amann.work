const path = require('path');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

exports.onCreateWebpackConfig = ({actions}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
  });
};

exports.sourceNodes = ({actions}) => {
  actions.createTypes(schema);
};

exports.createResolvers = ({createResolvers}) => {
  createResolvers(resolvers);
};
