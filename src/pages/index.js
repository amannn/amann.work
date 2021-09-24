import {useTranslations} from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import portrait from 'assets/jan-amann.jpg';
import mockupIllustration from 'assets/mockup-illustration.svg';
import Button from 'components/Button';
import CallToAction from 'components/CallToAction';
import CardLink from 'components/CardLink';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Meta from 'components/Meta';
import ProjectsList from 'components/ProjectsList';
import ResponsiveGrid from 'components/ResponsiveGrid';
import Section from 'components/Section';
import Text from 'components/Text';
import Wrapper from 'components/Wrapper';
import styles from './index.module.scss';

// Force SSG as we're fetching data in `_app`
export function getStaticProps() {
  return {props: {}};
}

export default function Index() {
  const t = useTranslations('Index');

  return (
    <>
      <Meta />
      <Header large subtitle={t('header.tagline')} title={t('header.title')}>
        <div className={styles.uiSketch}>
          <Image priority src={mockupIllustration} />
        </div>
      </Header>
      <Section>
        <Wrapper>
          <div className={styles.intro}>
            <div className={styles.introPortrait}>
              <Image
                height={500}
                objectFit="cover"
                objectPosition="left top"
                placeholder="blur"
                src={portrait}
                width={600}
              />
            </div>
            <div className={styles.introText}>
              <Text variant="h3">{t('intro.description')}</Text>
              <Link href="/services" passHref>
                <CallToAction className={styles.introCta}>
                  {t('intro.services')}
                </CallToAction>
              </Link>
            </div>
          </div>
        </Wrapper>
      </Section>
      <Section className={styles.projects} title={t('work.title')}>
        <ProjectsList initialLimit={3} />
      </Section>
      <Wrapper className={styles.links}>
        <ResponsiveGrid>
          <CardLink
            description={t('links.openSource.description')}
            href="/open-source"
            title={t('links.openSource.title')}
          />
          <CardLink
            description={t('links.blog.description')}
            href="/blog"
            title={t('links.blog.title')}
          />
        </ResponsiveGrid>
      </Wrapper>
      <Footer />
    </>
  );
}
