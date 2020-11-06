import React, {useState} from 'react';
import Button from 'components/Button';
import FadeIn from 'components/FadeIn';
import ResponsiveGrid from 'components/ResponsiveGrid';
import useTranslations from 'hooks/useTranslations';
import styles from './GithubRepositories.module.scss';
import GithubRepositoriesItem from './GithubRepositoriesItem';

export default function GithubRepositories({pageSize = 4, repositories}) {
  const t = useTranslations('GithubRepositories');
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
      {hasMore && (
        <Button className={styles.showMoreButton} onClick={onShowMore}>
          {t('showMore')}
        </Button>
      )}
    </>
  );
}
