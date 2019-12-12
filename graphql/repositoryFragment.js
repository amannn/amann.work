module.exports = /* GraphQL */ `
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
