import React from 'react';
import {Link} from 'gatsby';
import Icon from 'components/Icon';
import Footer, {
  FooterContact,
  FooterMenuItem,
  FooterSocialIcon
} from 'components/Footer';

export default function LocalizedFooter() {
  return (
    <Footer
      menu={
        <>
          <FooterMenuItem component={props => <Link to="/blog" {...props} />}>
            Blog
          </FooterMenuItem>
          <FooterMenuItem
            component={props => <Link to="/en/imprint" {...props} />}
          >
            Imprint
          </FooterMenuItem>
        </>
      }
      social={
        <>
          <FooterSocialIcon
            aria-label="Github"
            href="https://github.com/amannn"
          >
            <Icon name="github" />
          </FooterSocialIcon>
          <FooterSocialIcon
            aria-label="Twitter"
            href="https://twitter.com/jamannnnnn"
          >
            <Icon name="twitter" />
          </FooterSocialIcon>
        </>
      }
    >
      <div id="contact">
        <FooterContact
          email="jan@amann.me"
          intro="Planning a project?"
          telephone="+43 681 / 84 39 0 333"
          title="Let's talk!"
        />
      </div>
    </Footer>
  );
}
