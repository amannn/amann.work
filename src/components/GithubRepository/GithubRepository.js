import React from 'react';
import Card from 'components/Card';
import Link from 'components/Link';
import Text from 'components/Text';
import styles from './GithubRepository.module.scss';

export default function GithubRepository({
  children,
  descriptionMaxLength = 85,
  repository
}) {
  function formatDescription(description) {
    description = description
      // Remove emojis (https://stackoverflow.com/a/41543705/343045)
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ''
      )
      // Github uses proprietary emojis like ":recycle:".
      .replace(/:\w+:/, '');

    if (description.length > descriptionMaxLength) {
      description = description.slice(0, descriptionMaxLength) + '…';
    }

    return description;
  }

  return (
    <Card>
      <Text color="primary" component="h2" variant="h3">
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
