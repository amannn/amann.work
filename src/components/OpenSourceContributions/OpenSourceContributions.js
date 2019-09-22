import React, {cloneElement, useState} from 'react';
import ResponsiveGrid from 'components/ResponsiveGrid';
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
      <ResponsiveGrid>
        {paginatedNodes.map(contribution => (
          <OpenSourceContributionsItem
            key={contribution.repository.id}
            contribution={contribution}
          />
        ))}
      </ResponsiveGrid>
      {hasMore &&
        cloneElement(showMoreButton, {
          className: styles.showMoreButton,
          onClick: onShowMore
        })}
    </>
  );
}
