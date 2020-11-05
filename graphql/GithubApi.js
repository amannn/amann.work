const fetch = require('node-fetch');

const GH_TOKEN = process.env.GH_TOKEN;

module.exports = {
  query(query, variables) {
    return fetch('https://api.github.com/graphql', {
      headers: {
        Authorization: `Bearer ${GH_TOKEN}`
      },
      body: JSON.stringify({variables, query}),
      method: 'POST'
    }).then(response => response.json());
  }
};
