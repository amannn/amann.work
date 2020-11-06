import config from 'config';

export default class GithubRepository {
  static async query(query, variables) {
    return fetch('https://api.github.com/graphql', {
      headers: {
        Authorization: `Bearer ${config.GH_TOKEN}`
      },
      body: JSON.stringify({variables, query}),
      method: 'POST'
    }).then((response) => response.json());
  }
}
