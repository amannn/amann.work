import React, {useState} from 'react';
import Button from 'components/Button';
import FadeIn from 'components/FadeIn';
import {useTranslations} from 'next-intl';
import styles from './OpenSourceContributions.module.scss';
import OpenSourceContributionsItem from './OpenSourceContributionsItem';

export default function OpenSourceContributions({
  className,
  pageSize = 10,
  pullRequestContributions
}) {
  const t = useTranslations('OpenSourceContributions');
  const [limit, setLimit] = useState(pageSize);
  const paginatedNodes = pullRequestContributions.nodes.slice(0, limit);
  const hasMore = paginatedNodes.length < pullRequestContributions.nodes.length;

  function onShowMore() {
    setLimit(limit + pageSize);
  }

  return (
    <div className={className}>
      <div className={styles.list}>
        {paginatedNodes.map((pullRequest, index) => (
          <FadeIn
            key={pullRequest.id}
            delay={Math.max((index - (limit - pageSize)) * 0.15, 0)}
          >
            <OpenSourceContributionsItem pullRequest={pullRequest} />
          </FadeIn>
        ))}
      </div>

      {hasMore && (
        <Button className={styles.showMoreButton} onClick={onShowMore}>
          {t('showMore')}
        </Button>
      )}
    </div>
  );
}
