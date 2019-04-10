/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import {Link} from 'gatsby';
import Header from 'components/Header';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import Project from 'components/Project';
import Icon from 'components/Icon';
import Footer from 'components/Footer';
import Meta from './_Meta';

export default function Index() {
  return (
    <Page>
      <Meta />
      <Header
        description="My passion is to create web-based products which are a delight to use. I focus on aesthetics and always put performance first. Modern technologies like React, node.js and GraphQL enable me to do this."
        homeLink="/en"
        menu={
          <>
            <Header.MenuItem
              component={props => <a href="#contact" {...props} />}
            >
              Contact
            </Header.MenuItem>
            <Header.MenuItem
              color="pale"
              component={props => <Link to="/de" {...props} />}
            >
              DE
            </Header.MenuItem>
          </>
        }
        subtitle="Partner for User Interface Engineering and Design"
        title="Jan Amann"
      />
      <SectionTitle>Selected projects</SectionTitle>
      <Project
        cta={
          <Project.CTA href="https://planung.kuechenfinder.com/">
            See the app
          </Project.CTA>
        }
        intro="Guidance through conversation"
        style={{backgroundColor: '#F6F6F9'}}
        title="Kitchen planning app"
        visual={
          <img alt="" src={require('../../images/kfi-configurator.png')} />
        }
      >
        <Project.Paragraph>
          {'"Küchenfinder"'} is a German service which helps you to purchase
          your new kitchen. The app guides you question by question to your
          dream kitchen.
        </Project.Paragraph>
        <Project.Paragraph>
          This is a project of{' '}
          <Project.Anchor href="http://www.molindo.at">Molindo</Project.Anchor>.
          My part was the implementation of the frontend with React and the
          creation of a GraphQL API that is based on REST services.
        </Project.Paragraph>
      </Project>
      <Project
        cta={
          <Project.CTA href="https://www.shoemondo.com/uk">
            See the website
          </Project.CTA>
        }
        intro="Price comparison for shoe lovers"
        style={{backgroundColor: '#FEFBFB'}}
        title="Launch of Shoemondo"
        visual={<img alt="" src={require('../../images/shoemondo.png')} />}
      >
        <Project.Paragraph>
          Shoemondo helps you to find your next favourite pair of shoes and
          recommends the cheapest store to buy them. As a first step, 12 partner
          stores where integrated in order to offer an extensive product range.
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
        style={{
          backgroundImage: `url(${require('../../images/fh-research-bg.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom'
        }}
        title="Research portal relaunch"
        visual={
          <img
            alt=""
            src={require('../../images/fh-research.png')}
            style={{maxWidth: '400px'}}
          />
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
          implementation of page layouts & fundamental components.
        </Project.Paragraph>
      </Project>
      <Footer
        menu={
          <Footer.MenuItem
            component={props => <Link to="/en/imprint" {...props} />}
          >
            Imprint
          </Footer.MenuItem>
        }
        social={
          <>
            <Footer.SocialIcon
              aria-label="Github"
              href="https://github.com/amannn"
            >
              <Icon name="github" />
            </Footer.SocialIcon>
            <Footer.SocialIcon
              aria-label="Twitter"
              href="https://twitter.com/jamannnnnn"
            >
              <Icon name="twitter" />
            </Footer.SocialIcon>
          </>
        }
      >
        <div id="contact">
          <Footer.Contact
            email="jan@amann.me"
            intro="Got a project?"
            telephone="+43 681 / 84 39 0 333"
            title="Let's talk!"
          />
        </div>
      </Footer>
    </Page>
  );
}
