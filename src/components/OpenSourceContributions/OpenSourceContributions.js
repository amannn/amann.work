import React, {cloneElement, useState} from 'react';
import OpenSourceContributionsItem from './OpenSourceContributionsItem';
import styles from './OpenSourceContributions.module.scss';

export default function OpenSourceContributions({
  contributions,
  pageSize = 4,
  showMoreButton
}) {
  const [limit, setLimit] = useState(pageSize);
  const paginatedNodes = contributions.nodes.slice(0, limit);
  const hasMore = paginatedNodes.length < contributions.nodes.length;

  function onShowMore() {
    setLimit(limit + pageSize);
  }

  return (
    <>
      <div className={styles.root}>
        {paginatedNodes.map(contribution => (
          <OpenSourceContributionsItem
            key={contribution.repository.id}
            contribution={contribution}
          />
        ))}
      </div>
      {hasMore &&
        cloneElement(showMoreButton, {
          className: styles.showMoreButton,
          onClick: onShowMore
        })}
    </>
  );
}
