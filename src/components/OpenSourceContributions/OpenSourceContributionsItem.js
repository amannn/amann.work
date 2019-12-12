import React from 'react';
import Text from 'components/Text';
import Icon from 'components/Icon';
import Link from 'components/Link';
import GithubRepository from 'components/GithubRepository';
import styles from './OpenSourceContributionsItem.module.scss';

export default function OpenSourceContributionsItem({contribution}) {
  return (
    <GithubRepository repository={contribution.repository}>
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
            <Link href={pullRequest.url}>{pullRequest.title}</Link>
          </Text>
        ))}
      </div>
    </GithubRepository>
  );
}
