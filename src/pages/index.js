import Link from 'next/link';
import React from 'react';
import Button from 'components/Button';
import CardLink from 'components/CardLink';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Meta from 'components/Meta';
import ProjectsList from 'components/ProjectsList';
import ResponsiveGrid from 'components/ResponsiveGrid';
import Section from 'components/Section';
import {ServicesItem} from 'components/Services';
import Wrapper from 'components/Wrapper';
import useTranslations from 'hooks/useTranslations';
import styles from './index.module.scss';

export default function Index() {
  const t = useTranslations('Index');

  return (
    <>
      <Meta />
      <Header
        description={t('header.description')}
        showPortrait
        subtitle={t('header.tagline')}
        title={t('header.title')}
      />
      <Section
        description={t('services.description')}
        title={t('services.title')}
      >
        <Wrapper>
          <ResponsiveGrid>
            <ServicesItem title={t('services.reactApps.title')}>
              {t('services.reactApps.description')}
            </ServicesItem>
            <ServicesItem title={t('services.componentLibraries.title')}>
              {t('services.componentLibraries.description')}
            </ServicesItem>
            <ServicesItem title={t('services.mobileApps.title')}>
              {t('services.mobileApps.description')}
            </ServicesItem>
            <ServicesItem title={t('services.consulting.title')}>
              {t('services.consulting.description')}
            </ServicesItem>
          </ResponsiveGrid>
        </Wrapper>
      </Section>
      <Section title={t('work.title')}>
        <ProjectsList limit={3} />
        <Wrapper className={styles.showMoreProjects}>
          <Link href="/work" passHref>
            <Button color="accent" component="a">
              {t('work.showMore')}
            </Button>
          </Link>
        </Wrapper>
      </Section>
      <Wrapper background className={styles.links}>
        <ResponsiveGrid>
          <CardLink
            description={t('links.blog.description')}
            href="/blog"
            title={t('links.blog.title')}
          />
          <CardLink
            description={t('links.openSource.description')}
            href="/open-source"
            title={t('links.openSource.title')}
          />
        </ResponsiveGrid>
      </Wrapper>
      <Footer />
    </>
  );
}
