import React from 'react';
import OpenSourceContributionsItem from './OpenSourceContributionsItem';
import styles from './OpenSourceContributions.module.scss';

export default function OpenSourceContributions({contributions}) {
  return (
    <div className={styles.root}>
      {contributions.nodes.map(contribution => (
        <OpenSourceContributionsItem
          key={contribution.repository.id}
          contribution={contribution}
        />
      ))}
    </div>
  );
}
