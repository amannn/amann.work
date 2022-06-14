import config from 'config';

export default class GithubRepository {
  static async query(query, variables) {
    return fetch('https://api.github.com/graphql', {
      headers: {
        Authorization: `Bearer ${config.GH_TOKEN}`
      },
      body: JSON.stringify({variables, query}),
      method: 'POST'
    }).then(async (response) => {
      if (!response.ok) {
        throw new Error([response.url, await response.text()].join('\n'));
      }
      return response.json();
    });
  }
}
