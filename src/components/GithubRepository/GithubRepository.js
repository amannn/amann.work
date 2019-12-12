import React from 'react';
import {graphql} from 'gatsby';
import Card from 'components/Card';
import Text from 'components/Text';
import Link from 'components/Link';
import styles from './GithubRepository.module.scss';

export default function GithubRepository({children, repository}) {
  function formatDescription(description) {
    return (
      description
        // Remove emojis (https://stackoverflow.com/a/10999907/343045)
        .replace(
          /([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g,
          ''
        )
        // Github uses proprietary emojis like ":recycle:".
        .replace(/:\w+:/, '')
    );
  }

  return (
    <Card>
      <Text color="accent" component="h2" variant="h3">
        <Link href={repository.owner.url}>{repository.owner.login}</Link>
        <Text color="pale" component="span" variant="h3">
          {' / '}
        </Text>
        <Link href={repository.url}>{repository.name}</Link>
      </Text>
      <Text className={styles.description}>
        {formatDescription(repository.description)}
      </Text>
      {children}
    </Card>
  );
}

export const repositoryFragment = graphql`
  fragment GithubRepository_repository on GithubRepository {
    name
    description
    url
    owner {
      url
      login
    }
    stargazers {
      totalCount
    }
    languages {
      nodes {
        name
        color
      }
    }
  }
`;
