import React from 'react';
import LightboxDeviceVideo from 'components/LightboxDeviceVideo';
import labels from 'localized/en/labels';
import LocalizedFooter from 'localized/en/LocalizedFooter';
import LocalizedHeader from 'localized/en/LocalizedHeader';
import LocalizedMeta from 'localized/en/LocalizedMeta';
import Page from 'components/Page';
import Project, {
  ProjectAnchor,
  ProjectLink,
  ProjectParagraph,
  ProjectVisual,
  ProjectTestimonial
} from 'components/Project';
import BlogRoll from 'components/BlogRoll';
import Button from 'components/Button';
import DeviceFrame from 'components/DeviceFrame';
import GithubRepositories from 'components/GithubRepositories';
import OpenSourceContributions from 'components/OpenSourceContributions';
import OpenSourceLayout from 'components/OpenSourceLayout';
import ResponsiveGrid from 'components/ResponsiveGrid';
import Section from 'components/Section';
import {ServicesItem} from 'components/Services';
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
      <Section
        description="I work with startups and established companies alike. For me, the most
      important aspect of a project is to create a meaningful experience that provides added value for people."
        title="Services"
      >
        <Wrapper>
          <ResponsiveGrid>
            <ServicesItem title="React apps">
              With 5 years of experience with React and 4 years of GraphQL, I
              can help you architect and build ambitious web apps that are a
              pleasure to use.
            </ServicesItem>
            <ServicesItem title="Component libraries">
              By identifying the fundamental building blocks and making them
              available via a composable API, you can set your apps up for
              success.
            </ServicesItem>
            <ServicesItem title="Mobile apps">
              Offering a great user experience on mobile means putting
              performance first. However there’s no need to compromise on
              animations and useful touch gestures.
            </ServicesItem>
            <ServicesItem title="Consulting and code reviews">
              I’m happy to share my knowledge in the context of plannings,
              workshops and reviews. I take the time to listen and will find the
              right solution together with your team.
            </ServicesItem>
          </ResponsiveGrid>
        </Wrapper>
      </Section>
      <Section title="Selected projects">
        <Project
          cta={
            <ProjectLink href="https://www.setlist.fm/">
              Add a setlist
            </ProjectLink>
          }
          id="setlist-edit"
          intro="Millions of setlists at your finger tips"
          testimonial={
            <ProjectTestimonial
              image={
                <img
                  alt="Christof Flachsmann"
                  src={require('../../assets/christof-flachsmann.jpg')}
                />
              }
              personLink="https://www.flachsmann.at/"
              personName="Christof Flachsmann"
              personTitle="UX/UI Designer"
              quote={
                'The cooperation with Jan was excellent as always. As a designer, I can rely on the fact that the final product is implemented pixel-perfect and on time.\nWhat I particularly appreciate about Jan is that he also thinks about how to take a design one step further. He proactively contributes to how the product can be improved even more. I am already looking forward to all upcoming projects!'
              }
            />
          }
          title="New editing experience for setlist.fm"
          visual={
            <ProjectVisual>
              <DeviceFrame type="desktop">
                <img
                  alt=""
                  src={require('../../assets/setlist-edit-desktop.png')}
                />
              </DeviceFrame>
              <LightboxDeviceVideo
                poster={require('../../assets/setlist-edit-mobile-poster.png')}
                source={require('../../assets/setlist-edit-mobile.mp4')}
              />
            </ProjectVisual>
          }
        >
          <ProjectParagraph>
            With{' '}
            <ProjectAnchor href="https://www.similarweb.com/website/setlist.fm#overview">
              millions of monthly visits
            </ProjectAnchor>
            , setlist.fm is one of the most popular music services worldwide and
            enables its users to share their knowledge about concert setlists.
            The team from{' '}
            <ProjectAnchor href="http://molindo.at">Molindo</ProjectAnchor> set
            out to relaunch the core experience of adding and editing setlists
            and hired me to implement the user interface.
          </ProjectParagraph>
          <ProjectParagraph>
            The frontend of the project consists of four React widgets. These
            integrate seamlessly with the existing web stack of the platform and
            communicate with a GraphQL API. To live up to the high expectations
            of mobile apps, the implementation places special focus on touch
            gestures, useful animations, runtime performance and an
            offline-first approach to data.
          </ProjectParagraph>
        </Project>
        <Project
          id="alpine"
          intro="Building blocks for ambitious user interfaces"
          title="React-based component library"
          visual={
            <ProjectVisual>
              <DeviceFrame type="desktop">
                <img
                  alt=""
                  src={require('../../assets/alpine-design-system.png')}
                />
              </DeviceFrame>
            </ProjectVisual>
          }
        >
          <ProjectParagraph>
            <ProjectAnchor href="https://www.alpine.com/">
              Alpine Electronics
            </ProjectAnchor>{' '}
            is an international enterprise specialising in car audio and
            navigation systems that are used by manufacturers such as BMW, Audi,
            Mercedes & many more. The company counts more than 13,000 employees
            and wanted to take their data management apps to the next level by
            utilising a React-based component library that can be composed in
            flexible ways.
          </ProjectParagraph>
          <ProjectParagraph>
            To meet this challenge, a team of six frontend specialists from{' '}
            <ProjectAnchor href="https://alm.sh/">
              alm engineering
            </ProjectAnchor>
            ,{' '}
            <ProjectAnchor href="https://peerigon.com/">Peerigon</ProjectAnchor>
            ,{' '}
            <ProjectAnchor href="https://compose.us/">compose.us</ProjectAnchor>{' '}
            and me was formed. My contribution was to gather requirements in
            on-site workshops, specification of features & component APIs, UX
            design, frontend development, code reviews and the definition of
            GraphQL APIs. A set of more than 150 components now provide the
            foundation for 20 application packages and counting.
          </ProjectParagraph>
        </Project>
        <Project
          cta={
            <ProjectLink href="https://planung.kuechenfinder.com/">
              See the app
            </ProjectLink>
          }
          id="kuechenfinder-configurator"
          intro="Guidance through conversation"
          title="Kitchen planning app"
          visual={
            <ProjectVisual>
              <DeviceFrame>
                <img
                  alt=""
                  src={require('../../assets/kfi-configurator-1.png')}
                />
              </DeviceFrame>
              <DeviceFrame>
                <img
                  alt=""
                  src={require('../../assets/kfi-configurator-2.png')}
                />
              </DeviceFrame>
              <DeviceFrame>
                <img
                  alt=""
                  src={require('../../assets/kfi-configurator-3.png')}
                />
              </DeviceFrame>
            </ProjectVisual>
          }
        >
          <ProjectParagraph>
            Küchenfinder is an Austrian service which helps you to purchase your
            new kitchen. The app guides you question by question to your dream
            kitchen.
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
          id="kuechenfinder-shops"
          intro="Data-driven recommendations"
          title="Dashboard for kitchen suppliers"
          visual={
            <ProjectVisual>
              <DeviceFrame type="mobile">
                <img
                  alt=""
                  src={require('../../assets/kfi-shops-mobile.png')}
                />
              </DeviceFrame>
              <DeviceFrame type="desktop">
                <img
                  alt=""
                  src={require('../../assets/kfi-shops-desktop.png')}
                />
              </DeviceFrame>
            </ProjectVisual>
          }
        >
          <ProjectParagraph>
            More than 2 million users visit Küchenfinder per year to learn about
            kitchen-related topics. Suppliers can sign up to configure criteria
            and services which in turn enables the recommendation of potential
            customers via a{' '}
            <ProjectAnchor href="https://www.kuechenfinder.com/kuechenplanung/">
              search engine
            </ProjectAnchor>
            . Afterwards suppliers can use this app to manage their customer
            requests.
          </ProjectParagraph>
          <ProjectParagraph>
            I developed a library comprising more than 100 reusable components
            which represent the basis for all screens of this app. Further to
            this, I developed a GraphQL API in Node.js that provides clients
            with performant access to distributed data from REST micro services.
          </ProjectParagraph>
        </Project>
        <Project
          cta={
            <ProjectLink href="https://www.zemtu.com/">Learn more</ProjectLink>
          }
          id="zemtu"
          intro="Mobility for the future"
          title="Carsharing app"
          visual={
            <ProjectVisual>
              <DeviceFrame>
                <img alt="" src={require('../../assets/zemtu-1.png')} />
              </DeviceFrame>
              <DeviceFrame>
                <img alt="" src={require('../../assets/zemtu-2.png')} />
              </DeviceFrame>
              <DeviceFrame>
                <img alt="" src={require('../../assets/zemtu-3.png')} />
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
          id="shoemondo"
          intro="Price comparison for shoe lovers"
          title="Launch of Shoemondo"
          visual={
            <ProjectVisual>
              <DeviceFrame>
                <img alt="" src={require('../../assets/shoemondo-1.png')} />
              </DeviceFrame>
              <DeviceFrame>
                <img alt="" src={require('../../assets/shoemondo-2.png')} />
              </DeviceFrame>
              <DeviceFrame>
                <img alt="" src={require('../../assets/shoemondo-3.png')} />
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
      </Section>
      <Section title="Latest articles">
        <Wrapper background padding>
          <BlogRoll posts={posts} />
        </Wrapper>
      </Section>
      <Section
        description="I'm grateful to be part of a community where ideas and knowledge are openly shared. My contribution is to publish libraries and to participate in projects of others."
        title="Open source"
      >
        <Wrapper background padding>
          <OpenSourceLayout
            contributions={
              <OpenSourceContributions
                contributions={contributions}
                showMoreButton={<Button>Show more</Button>}
              />
            }
            contributionsTitle="Latest contributions"
            libraries={
              <GithubRepositories
                repositories={repositories}
                showMoreButton={<Button>Show more</Button>}
              />
            }
            librariesTitle="My libraries"
          />
        </Wrapper>
      </Section>
      <LocalizedFooter />
    </Page>
  );
}
