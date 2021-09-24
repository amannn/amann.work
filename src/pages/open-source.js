import {useTranslations} from 'next-intl';
import React from 'react';
import GithubRepositories from 'components/GithubRepositories';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import OpenSourceContributions from 'components/OpenSourceContributions';
import Text from 'components/Text';
import GithubContributionsRepository from 'repositories/GithubContributionsRepository';
import styles from './open-source.module.scss';

export async function getStaticProps() {
  return {
    props: {
      repositories: await GithubContributionsRepository.getOpenSourceRepositories(),
      pullRequestContributions: await GithubContributionsRepository.getPullRequestContributions(),
      generationTime: new Date().toISOString()
    }
  };
}

export default function OpenSource({
  generationTime,
  pullRequestContributions,
  repositories
}) {
  const t = useTranslations('OpenSource');

  return (
    <>
      <Meta title={t('title')} />
      <Layout description={t('description')} title={t('title')}>
        <GithubRepositories repositories={repositories} />
        <Text className={styles.contributions} variant="h2">
          {t('contributions')}
        </Text>
        <OpenSourceContributions
          className={styles.contributionsList}
          pullRequestContributions={pullRequestContributions}
        />
      </Layout>
      <p hidden>{generationTime}</p>
    </>
  );
}
