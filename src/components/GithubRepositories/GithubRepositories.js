import React, {cloneElement, useState} from 'react';
import ResponsiveGrid from 'components/ResponsiveGrid';
import FadeIn from 'components/FadeIn';
import GithubRepositoriesItem from './GithubRepositoriesItem';
import styles from './GithubRepositories.module.scss';

export default function GithubRepositories({
  repositories,
  pageSize = 2,
  showMoreButton
}) {
  const [limit, setLimit] = useState(pageSize);
  const paginatedNodes = repositories.nodes.slice(0, limit);
  const hasMore = paginatedNodes.length < repositories.nodes.length;

  function onShowMore() {
    setLimit(limit + pageSize);
  }

  return (
    <>
      <ResponsiveGrid>
        {paginatedNodes.map((repository, index) => (
          <FadeIn
            key={repository.id}
            delay={Math.max((index - (limit - pageSize)) * 0.15, 0)}
          >
            <GithubRepositoriesItem repository={repository} />
          </FadeIn>
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
