import React from 'react';
import CardLink from 'components/CardLink';
import Icon from 'components/Icon';
import Text from 'components/Text';
import styles from './OpenSourceContributionsItem.module.scss';

export default function OpenSourceContributionsItem({pullRequest}) {
  return (
    <CardLink href={pullRequest.url} size="small" target="_blank">
      <div className={styles.inner}>
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
          <Text color="primary">
            <span>{pullRequest.baseRepository.owner.login}</span>
            <Text color="pale" component="span">
              {' / '}
            </Text>
            <span>{pullRequest.baseRepository.name}</span>
          </Text>
          <Text>{pullRequest.title}</Text>
        </div>
      </div>
    </CardLink>
  );
}
