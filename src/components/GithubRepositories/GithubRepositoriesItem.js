import React from 'react';
import GithubRepository from 'components/GithubRepository';
import Icon from 'components/Icon';
import Text from 'components/Text';
import styles from './GithubRepositoriesItem.module.scss';

export default function GithubRepositoriesItem({repository}) {
  const primaryLanguage = repository.languages.nodes[0];

  function formatStargazers({totalCount}) {
    if (totalCount < 1000) {
      return totalCount;
    } else if (totalCount < 100000) {
      return (totalCount / 1000).toFixed(1) + 'k';
    } else {
      return Math.floor(totalCount / 1000) + 'k';
    }
  }

  return (
    <GithubRepository key={repository.id} repository={repository}>
      <div className={styles.meta}>
        {primaryLanguage && (
          <div>
            <span
              className={styles.languageColor}
              style={{backgroundColor: primaryLanguage.color}}
            />
            <Text component="span">{primaryLanguage.name}</Text>
          </div>
        )}
        <Text className={styles.stargazers}>
          <Icon className={styles.stargazersIcon} color="grey" name="star" />
          {formatStargazers(repository.stargazers)}
        </Text>
      </div>
    </GithubRepository>
  );
}
