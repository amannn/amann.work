import React from 'react';
import {Link} from 'gatsby';
import Icon from 'components/Icon';
import Footer from 'components/Footer';

export default function LocalizedFooter({component: Component = Footer}) {
  return (
    <Component
      menu={
        <>
          <Footer.MenuItem component={props => <Link to="/blog" {...props} />}>
            Blog
          </Footer.MenuItem>
          <Footer.MenuItem
            component={props => <Link to="/de/impressum" {...props} />}
          >
            Impressum
          </Footer.MenuItem>
        </>
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
      <div id="kontakt">
        <Footer.Contact
          email="jan@amann.me"
          intro="Sie planen ein Projekt?"
          telephone="+43 681 / 84 39 0 333"
          title="Freut mich von Ihnen zu hören!"
        />
      </div>
    </Component>
  );
}
