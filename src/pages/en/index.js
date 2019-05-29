import React from 'react';
import labels from 'localized/en/labels';
import LocalizedFooter from 'localized/en/LocalizedFooter';
import LocalizedHeader from 'localized/en/LocalizedHeader';
import LocalizedMeta from 'localized/en/LocalizedMeta';
import Page from 'components/Page';
import Project from 'components/Project';
import Section from 'components/Section';
import DeviceFrame from 'components/DeviceFrame';
import useBlogPosts from 'hooks/useBlogPosts';
import Wrapper from 'components/Wrapper';
import BlogRoll from 'components/BlogRoll';

export default function Index() {
  const posts = useBlogPosts();

  return (
    <Page>
      <LocalizedMeta />
      <LocalizedHeader
        description={labels.description}
        showPortrait
        subtitle={labels.tagline}
        title={labels.title}
      />
      <Section title={<Section.Title>Ausgewählte Projekte</Section.Title>}>
        <Project
          cta={
            <Project.CTA href="https://planung.kuechenfinder.com/">
              See the app
            </Project.CTA>
          }
          intro="Guidance through conversation"
          title="Kitchen planning app"
          visual={
            <Project.Visual>
              <DeviceFrame>
                <img
                  alt=""
                  src={require('../../images/kfi-configurator-1.png')}
                />
              </DeviceFrame>
              <DeviceFrame>
                <img
                  alt=""
                  src={require('../../images/kfi-configurator-2.png')}
                />
              </DeviceFrame>
              <DeviceFrame>
                <img
                  alt=""
                  src={require('../../images/kfi-configurator-3.png')}
                />
              </DeviceFrame>
            </Project.Visual>
          }
        >
          <Project.Paragraph>
            {'"Küchenfinder"'} is an Austrian service which helps you to
            purchase your new kitchen. The app guides you question by question
            to your dream kitchen.
          </Project.Paragraph>
          <Project.Paragraph>
            This is a project of{' '}
            <Project.Anchor href="http://www.molindo.at">
              Molindo
            </Project.Anchor>
            . My part was the implementation of the frontend with React. Since
            this app has mostly client-side state, I used Redux for state
            management.
          </Project.Paragraph>
        </Project>
        <Project
          cta={
            <Project.CTA href="https://www.kuechenfinder.com/fuer-kuechenexperten">
              Read more (DE)
            </Project.CTA>
          }
          intro="Data-driven recommendations"
          title="Dashboard for kitchen suppliers"
          visual={
            <Project.Visual>
              <DeviceFrame type="mobile">
                <img
                  alt=""
                  src={require('../../images/kfi-shops-mobile.png')}
                />
              </DeviceFrame>
              <DeviceFrame type="desktop">
                <img
                  alt=""
                  src={require('../../images/kfi-shops-desktop.png')}
                />
              </DeviceFrame>
            </Project.Visual>
          }
        >
          <Project.Paragraph>
            More than 120,000 users visit {'"Küchenfinder"'} every month in
            order to learn about kitchen-related topics. Suppliers can sign up
            to configure criteria, offered services and data which in turn
            enables the recommendation of potential customers via a{' '}
            <Project.Anchor href="https://www.kuechenfinder.com/kuechenplanung/">
              search engine
            </Project.Anchor>
            . Afterwards suppliers can use this app to manage their customer
            requests.
          </Project.Paragraph>
          <Project.Paragraph>
            I developed a library comprising more than 100 reusable components
            which represent the basis for all screens of this app. Furthermore I
            developed a GraphQL API based on REST services which helped reduce
            the implementation time by using Apollo Client.
          </Project.Paragraph>
        </Project>
        <Project
          cta={
            <Project.CTA href="https://www.shoemondo.com/uk">
              See the website
            </Project.CTA>
          }
          intro="Price comparison for shoe lovers"
          title="Launch of Shoemondo"
          visual={
            <Project.Visual>
              <DeviceFrame>
                <img alt="" src={require('../../images/shoemondo-1.png')} />
              </DeviceFrame>
              <DeviceFrame>
                <img alt="" src={require('../../images/shoemondo-2.png')} />
              </DeviceFrame>
              <DeviceFrame>
                <img alt="" src={require('../../images/shoemondo-3.png')} />
              </DeviceFrame>
            </Project.Visual>
          }
        >
          <Project.Paragraph>
            Shoemondo helps you to find your next favourite pair of shoes and
            recommends the cheapest store to buy them. As a first step, 12
            partner stores where integrated in order to offer an extensive
            product range.
          </Project.Paragraph>
          <Project.Paragraph>
            I designed the user interface and implemented it as a server side
            rendered React app which communicates with a GraphQL API.
          </Project.Paragraph>
        </Project>
        <Project
          cta={
            <Project.CTA href="https://research.fh-ooe.at/en/index">
              See the web portal
            </Project.CTA>
          }
          intro="Make research content visible"
          title="Research portal relaunch"
          visual={
            <Project.Visual>
              <DeviceFrame type="mobile">
                <img
                  alt=""
                  src={require('../../images/fh-research-mobile.png')}
                />
              </DeviceFrame>
              <DeviceFrame type="desktop">
                <img
                  alt=""
                  src={require('../../images/fh-research-desktop.png')}
                />
              </DeviceFrame>
            </Project.Visual>
          }
        >
          <Project.Paragraph>
            The University of Applied Sciences Upper Austria is the most
            research-intensive UAS in Austria. This web portal provides
            comprehensive access to publications, patents, researchers and
            projects.
          </Project.Paragraph>
          <Project.Paragraph>
            This project was built together with{' '}
            <Project.Anchor href="https://studiomitte.com">
              Studio Mitte
            </Project.Anchor>
            . My contribution was the creation of screen designs and the
            implementation of the page layout prototype & fundamental
            components.
          </Project.Paragraph>
        </Project>
      </Section>
      <Section title={<Section.Title>Latest articles</Section.Title>}>
        <Wrapper background padding>
          <BlogRoll posts={posts} />
        </Wrapper>
      </Section>
      <LocalizedFooter />
    </Page>
  );
}
