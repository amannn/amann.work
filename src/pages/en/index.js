import React from 'react';
import labels from 'localized/en/labels';
import LocalizedFooter from 'localized/en/LocalizedFooter';
import LocalizedHeader from 'localized/en/LocalizedHeader';
import LocalizedMeta from 'localized/en/LocalizedMeta';
import Page from 'components/Page';
import Project, {
  ProjectAnchor,
  ProjectLink,
  ProjectParagraph,
  ProjectVisual
} from 'components/Project';
import BlogRoll from 'components/BlogRoll';
import Button from 'components/Button';
import DeviceFrame from 'components/DeviceFrame';
import GithubRepositories from 'components/GithubRepositories';
import OpenSourceContributions from 'components/OpenSourceContributions';
import Section, {SectionTitle} from 'components/Section';
import Wrapper from 'components/Wrapper';
import useBlogPosts from 'hooks/useBlogPosts';
import useOpenSourceContributions from 'hooks/useOpenSourceContributions';
import useMaintainedOpenSourceRepositories from 'hooks/useMaintainedOpenSourceRepositories';

export default function Index() {
  const posts = useBlogPosts();
  const contributions = useOpenSourceContributions();
  const repositories = useMaintainedOpenSourceRepositories();

  return (
    <Page>
      <LocalizedMeta />
      <LocalizedHeader
        description={labels.description}
        showPortrait
        subtitle={labels.tagline}
        title={labels.title}
      />
      <Section title={<SectionTitle>Selected projects</SectionTitle>}>
        <Project
          cta={
            <ProjectLink href="https://planung.kuechenfinder.com/">
              See the app
            </ProjectLink>
          }
          intro="Guidance through conversation"
          title="Kitchen planning app"
          visual={
            <ProjectVisual>
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
            </ProjectVisual>
          }
        >
          <ProjectParagraph>
            {'"Küchenfinder"'} is an Austrian service which helps you to
            purchase your new kitchen. The app guides you question by question
            to your dream kitchen.
          </ProjectParagraph>
          <ProjectParagraph>
            This is a project of{' '}
            <ProjectAnchor href="http://www.molindo.at">Molindo</ProjectAnchor>.
            My part was the implementation of the frontend with React. Since
            this app has mostly client-side state, I used Redux for state
            management.
          </ProjectParagraph>
        </Project>
        <Project
          cta={
            <ProjectLink href="https://www.kuechenfinder.com/fuer-kuechenexperten">
              Read more (DE)
            </ProjectLink>
          }
          intro="Data-driven recommendations"
          title="Dashboard for kitchen suppliers"
          visual={
            <ProjectVisual>
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
            </ProjectVisual>
          }
        >
          <ProjectParagraph>
            More than 120,000 users visit {'"Küchenfinder"'} every month in
            order to learn about kitchen-related topics. Suppliers can sign up
            to configure criteria and offered services which in turn enables the
            recommendation of potential customers via a{' '}
            <ProjectAnchor href="https://www.kuechenfinder.com/kuechenplanung/">
              search engine
            </ProjectAnchor>
            . Afterwards suppliers can use this app to manage their customer
            requests.
          </ProjectParagraph>
          <ProjectParagraph>
            I developed a library comprising more than 100 reusable components
            which represent the basis for all screens of this app. Furthermore I
            developed a GraphQL API based on REST services which helped reduce
            the implementation time by using Apollo Client.
          </ProjectParagraph>
        </Project>
        <Project
          cta={
            <ProjectLink href="https://www.zemtu.com/">Learn more</ProjectLink>
          }
          intro="Mobility for the future"
          title="Carsharing app"
          visual={
            <ProjectVisual>
              <DeviceFrame>
                <img alt="" src={require('../../images/zemtu-1.png')} />
              </DeviceFrame>
              <DeviceFrame>
                <img alt="" src={require('../../images/zemtu-2.png')} />
              </DeviceFrame>
              <DeviceFrame>
                <img alt="" src={require('../../images/zemtu-3.png')} />
              </DeviceFrame>
            </ProjectVisual>
          }
        >
          <ProjectParagraph>
            In order to meet the high expectations of their international
            clients, the talented team of Zemtu is developing a modern mobile
            app which digitally depicts the process from making a reservation to
            unlocking a car.
          </ProjectParagraph>
          <ProjectParagraph>
            In regular workshops I support the team with consultation and
            assistance with topics such as software architecture, React,
            GraphQL, animations and performance.
          </ProjectParagraph>
        </Project>
        <Project
          cta={
            <ProjectLink href="https://www.shoemondo.com/uk">
              See the website
            </ProjectLink>
          }
          intro="Price comparison for shoe lovers"
          title="Launch of Shoemondo"
          visual={
            <ProjectVisual>
              <DeviceFrame>
                <img alt="" src={require('../../images/shoemondo-1.png')} />
              </DeviceFrame>
              <DeviceFrame>
                <img alt="" src={require('../../images/shoemondo-2.png')} />
              </DeviceFrame>
              <DeviceFrame>
                <img alt="" src={require('../../images/shoemondo-3.png')} />
              </DeviceFrame>
            </ProjectVisual>
          }
        >
          <ProjectParagraph>
            Shoemondo helps you to find your next favourite pair of shoes and
            recommends the cheapest store to buy them. As a first step, 12
            partner stores where integrated in order to offer an extensive
            product range.
          </ProjectParagraph>
          <ProjectParagraph>
            I designed the user interface and implemented it as a server side
            rendered React app which communicates with a GraphQL API.
          </ProjectParagraph>
        </Project>
        <Project
          cta={
            <ProjectLink href="https://research.fh-ooe.at/en/index">
              See the web portal
            </ProjectLink>
          }
          intro="Make research content visible"
          title="Research portal relaunch"
          visual={
            <ProjectVisual>
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
            </ProjectVisual>
          }
        >
          <ProjectParagraph>
            The University of Applied Sciences Upper Austria is the most
            research-intensive UAS in Austria. This web portal provides
            comprehensive access to publications, patents, researchers and
            projects.
          </ProjectParagraph>
          <ProjectParagraph>
            This project was built together with{' '}
            <ProjectAnchor href="https://studiomitte.com">
              Studio Mitte
            </ProjectAnchor>
            . My contribution was the creation of screen designs and the
            implementation of the page layout prototype & fundamental
            components.
          </ProjectParagraph>
        </Project>
      </Section>
      <Section title={<SectionTitle>Latest articles</SectionTitle>}>
        <Wrapper background padding>
          <BlogRoll posts={posts} />
        </Wrapper>
      </Section>
      <Section title={<SectionTitle>Open source libraries</SectionTitle>}>
        <Wrapper background padding>
          <GithubRepositories
            repositories={repositories}
            showMoreButton={<Button>Show more</Button>}
          />
        </Wrapper>
      </Section>
      <Section title={<SectionTitle>Open source contributions</SectionTitle>}>
        <Wrapper background padding>
          <OpenSourceContributions
            contributions={contributions}
            showMoreButton={<Button>Show more</Button>}
          />
        </Wrapper>
      </Section>
      <LocalizedFooter />
    </Page>
  );
}
