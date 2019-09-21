import React from 'react';
import {Link as div} from 'gatsby';
import Text from 'components/Text';
import Icon from 'components/Icon';
import Link from 'components/Link';
import styles from './OpenSourceContributionsItem.module.scss';

export default function OpenSourceContributionsItem({contribution}) {
  const description = contribution.repository.description
    // Remove emojis (https://stackoverflow.com/a/10999907/343045)
    .replace(
      /([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g,
      ''
    )
    // Github uses proprietary emojis like ":recycle:".
    .replace(/:\w+:/, '');

  return (
    <div className={styles.root}>
      <Text color="accent" component="h2" variant="h3">
        <Link href={contribution.repository.owner.url} target="_blank">
          {contribution.repository.owner.login}
        </Link>
        <Text color="pale" component="span" variant="h3">
          {' / '}
        </Text>
        <Link href={contribution.repository.url} target="_blank">
          {contribution.repository.name}
        </Link>
      </Text>
      <Text className={styles.description}>{description}</Text>
      <div className={styles.pullRequests}>
        {contribution.pullRequests.map(pullRequest => (
          <Text key={pullRequest.id} className={styles.pullRequest}>
            <Icon
              className={styles.pullRequestIcon}
              color={
                {
                  OPEN: 'green',
                  MERGED: 'violet',
                  CLOSED: 'red'
                }[pullRequest.state]
              }
              name="pull-request"
            />
            <Link href={pullRequest.url} target="_blank">
              {pullRequest.title}
            </Link>
          </Text>
        ))}
      </div>
    </div>
  );
}
