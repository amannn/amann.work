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

  function linkFor(href) {
    // eslint-disable-next-line react/display-name
    return (children) => (
      <ProjectAnchor key={href} href={href}>
        {children}
      </ProjectAnchor>
    );
  }

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
            intro={t('projects.setlistEdit.intro')}
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
            title={t('projects.setlistEdit.title')}
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
                visits: linkFor(t('projects.setlistEdit.visitsHref')),
                client: linkFor(t('projects.setlistEdit.clientHref'))
              })}
            </ProjectParagraph>
            <ProjectParagraph>
              {t('projects.setlistEdit.description2')}
            </ProjectParagraph>
          </Project>
          <Project
            cta={
              <ProjectLink href={t('projects.kuechenfinder.cta.href')}>
                {t('projects.kuechenfinder.cta.label')}
              </ProjectLink>
            }
            id={t('projects.kuechenfinder.id')}
            intro={t('projects.kuechenfinder.intro')}
            title={t('projects.kuechenfinder.title')}
            visual={
              <ProjectVisual>
                <DeviceFrame type="desktop">
                  <img
                    alt=""
                    src={require('../assets/kfi-shops-desktop.png')}
                  />
                </DeviceFrame>
                <DeviceFrame>
                  <img
                    alt=""
                    src={require('../assets/kfi-configurator-1.png')}
                  />
                </DeviceFrame>
              </ProjectVisual>
            }
          >
            <ProjectParagraph>
              {t('projects.kuechenfinder.description1', {
                client: linkFor(t('projects.kuechenfinder.clientHref'))
              })}
            </ProjectParagraph>
            <ProjectParagraph>
              {t('projects.kuechenfinder.description2')}
            </ProjectParagraph>
          </Project>
          <Project
            id={t('projects.alpine.id')}
            intro={t('projects.alpine.intro')}
            title={t('projects.alpine.title')}
            visual={
              <ProjectVisual>
                <DeviceFrame type="desktop">
                  <img
                    alt=""
                    src={require('../assets/alpine-design-system.png')}
                  />
                </DeviceFrame>
              </ProjectVisual>
            }
          >
            <ProjectParagraph>
              {t('projects.alpine.description1', {
                client: linkFor(t('projects.alpine.clientHref'))
              })}
            </ProjectParagraph>
            <ProjectParagraph>
              {t('projects.alpine.description2', {
                alm: linkFor(t('projects.alpine.almHref')),
                peerigon: linkFor(t('projects.alpine.peerigonHref')),
                composeUs: linkFor(t('projects.alpine.composeUsHref'))
              })}
            </ProjectParagraph>
          </Project>
          <Project
            cta={
              <ProjectLink href={t('projects.zemtu.cta.href')}>
                {t('projects.zemtu.cta.label')}
              </ProjectLink>
            }
            id={t('projects.zemtu.id')}
            intro={t('projects.zemtu.intro')}
            title={t('projects.zemtu.title')}
            visual={
              <ProjectVisual>
                <DeviceFrame>
                  <img alt="" src={require('../assets/zemtu-1.png')} />
                </DeviceFrame>
                <DeviceFrame>
                  <img alt="" src={require('../assets/zemtu-2.png')} />
                </DeviceFrame>
                <DeviceFrame>
                  <img alt="" src={require('../assets/zemtu-3.png')} />
                </DeviceFrame>
              </ProjectVisual>
            }
          >
            <ProjectParagraph>
              {t('projects.zemtu.description1')}
            </ProjectParagraph>
            <ProjectParagraph>
              {t('projects.zemtu.description2')}
            </ProjectParagraph>
          </Project>
          <Project
            cta={
              <ProjectLink href={t('projects.shoemondo.cta.href')}>
                {t('projects.shoemondo.cta.label')}
              </ProjectLink>
            }
            id={t('projects.shoemondo.id')}
            intro={t('projects.shoemondo.intro')}
            title={t('projects.shoemondo.title')}
            visual={
              <ProjectVisual>
                <DeviceFrame>
                  <img alt="" src={require('../assets/shoemondo-1.png')} />
                </DeviceFrame>
                <DeviceFrame>
                  <img alt="" src={require('../assets/shoemondo-2.png')} />
                </DeviceFrame>
                <DeviceFrame>
                  <img alt="" src={require('../assets/shoemondo-3.png')} />
                </DeviceFrame>
              </ProjectVisual>
            }
          >
            <ProjectParagraph>
              {t('projects.shoemondo.description1')}
            </ProjectParagraph>
            <ProjectParagraph>
              {t('projects.shoemondo.description2')}
            </ProjectParagraph>
          </Project>
        </Projects>
      </Section>
    </>
  );
}
