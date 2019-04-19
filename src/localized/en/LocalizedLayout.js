import React from 'react';
import {Link} from 'gatsby';
import Page from 'components/Page';
import Header from 'components/Header/Header';
import PageWrapper from 'components/PageWrapper';
import LocalizedMeta from './LocalizedMeta';
import LocalizedFooter from './LocalizedFooter';

export default function LocalizedLayout({children, title}) {
  const homeLink = '/en';

  return (
    <Page>
      <LocalizedMeta />
      <Header
        homeLink={homeLink}
        menu={
          <Header.MenuItem
            color="pale"
            component={props => <Link to={homeLink} {...props} />}
          >
            Back to home
          </Header.MenuItem>
        }
        showPortrait={false}
        title={title}
      />
      <PageWrapper>{children}</PageWrapper>
      <LocalizedFooter />
    </Page>
  );
}
