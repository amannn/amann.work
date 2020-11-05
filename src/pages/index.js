/* eslint-disable react/display-name */
import {useRouter} from 'next/router';
import React from 'react';
import Button from 'components/Button';
import DeviceFrame from 'components/DeviceFrame';
import Header, {HeaderMenuItem} from 'components/Header';
import LightboxDeviceVideo from 'components/LightboxDeviceVideo';
import Meta from 'components/Meta';
import Project, {
  ProjectAnchor,
  ProjectLink,
  ProjectParagraph,
  ProjectTestimonial,
  ProjectVisual
} from 'components/Project';
import Projects from 'components/Projects';
import ResponsiveGrid from 'components/ResponsiveGrid';
import Section from 'components/Section';
import {ServicesItem} from 'components/Services';
import Wrapper from 'components/Wrapper';
import useTranslations from 'hooks/useTranslations';

export default function Index() {
  const t = useTranslations('Index');
  const router = useRouter();
  const otherLocale = router.locales.find((cur) => cur !== router.locale);

  return (
    <>
      <Meta />
      <Header
        description={t('header.description')}
        menu={
          <>
            <HeaderMenuItem href="/blog">Blog</HeaderMenuItem>
            <HeaderMenuItem href="#contact">Contact</HeaderMenuItem>
            <HeaderMenuItem color="pale" href="/" locale={otherLocale}>
              {otherLocale.toUpperCase()}
            </HeaderMenuItem>
          </>
        }
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
      <Section title={t('projects.title')}>
        <Projects
          showMoreButton={
            <Button color="accent">{t('projects.showMore')}</Button>
          }
        >
          <Project
            cta={
              <ProjectLink href={t('projects.setlistEdit.cta.href')}>
                {t('projects.setlistEdit.cta.label')}
              </ProjectLink>
            }
            id={t('projects.setlistEdit.id')}
            intro="Millions of setlists at your finger tips"
            testimonial={
              <ProjectTestimonial
                image={
                  <img
                    alt={t('projects.setlistEdit.testimonial.personName')}
                    src={require('../assets/christof-flachsmann.jpg')}
                  />
                }
                personLink={t('projects.setlistEdit.testimonial.personLink')}
                personName={t('projects.setlistEdit.testimonial.personName')}
                personTitle={t('projects.setlistEdit.testimonial.personTitle')}
                quote={t('projects.setlistEdit.testimonial.quote')}
              />
            }
            title="New editing experience for setlist.fm"
            visual={
              <ProjectVisual>
                <DeviceFrame type="desktop">
                  <img
                    alt=""
                    src={require('../assets/setlist-edit-desktop.png')}
                  />
                </DeviceFrame>
                <LightboxDeviceVideo
                  poster={require('../assets/setlist-edit-mobile-poster.png')}
                  source={require('../assets/setlist-edit-mobile.mp4')}
                />
              </ProjectVisual>
            }
          >
            <ProjectParagraph>
              {t('projects.setlistEdit.description1', {
                visits: (children) => (
                  <ProjectAnchor
                    key="visitsHref"
                    href={t('projects.setlistEdit.visitsHref')}
                  >
                    {children}
                  </ProjectAnchor>
                ),
                client: (children) => (
                  <ProjectAnchor
                    key="clientHref"
                    href={t('projects.setlistEdit.clientHref')}
                  >
                    {children}
                  </ProjectAnchor>
                )
              })}
            </ProjectParagraph>
            <ProjectParagraph>
              {t('projects.setlistEdit.description2')}
            </ProjectParagraph>
          </Project>
        </Projects>
      </Section>
    </>
  );
}
