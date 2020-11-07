import React from 'react';
import Card from 'components/Card';
import Icon from 'components/Icon';
import Link from 'components/Link';
import Text from 'components/Text';
import styles from './OpenSourceContributionsItem.module.scss';

export default function OpenSourceContributionsItem({pullRequest}) {
  return (
    <Card className={styles.root} size="small">
      <Icon
        className={styles.icon}
        color={
          {
            OPEN: 'green',
            MERGED: 'violet',
            CLOSED: 'red'
          }[pullRequest.state]
        }
        name="pull-request"
      />
      <div className={styles.text}>
        <Text color="accent">
          <Link href={pullRequest.baseRepository.owner.url}>
            {pullRequest.baseRepository.owner.login}
          </Link>
          <Text color="pale" component="span">
            {' / '}
          </Text>
          <Link href={pullRequest.baseRepository.url}>
            {pullRequest.baseRepository.name}
          </Link>
        </Text>
        <Text>{pullRequest.title}</Text>
      </div>
    </Card>
  );
}
