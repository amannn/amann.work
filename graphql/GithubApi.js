const fetch = require('node-fetch');

const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

module.exports = {
  query(query, variables) {
    return fetch('https://api.github.com/graphql', {
      headers: {
        Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`
      },
      body: JSON.stringify({variables, query}),
      method: 'POST'
    }).then(response => response.json());
  }
};
