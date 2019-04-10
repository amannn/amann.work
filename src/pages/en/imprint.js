/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {Link} from 'gatsby';
import Header from 'components/Header';
import Page from 'components/Page';
import Text from 'components/Text';
import Wrapper from 'components/Wrapper';
import Meta from './_Meta';

export default function Imprint({homeLink = '/en'}) {
  return (
    <Page>
      <Meta />
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
        title="Imprint"
      />
      <Wrapper marginBottom>
        <Text variant="h3">Jan Amann</Text>
        <Text marginBottom>
          Partner for User Interface Engineering and Design
        </Text>
        <Text marginBottom>
          Wiesenrainstraße 15
          <br />
          6890 Lustenau
          <br />
          Austria
        </Text>
        <Text marginBottom>UID: ATU70057369</Text>
        <Text marginBottom>
          E-Mail: jan@amann.me <br />
          Tel: +43 681 / 84 39 0 333
        </Text>
        <Text marginBottom>No tracking, no privacy policy ✌️</Text>
      </Wrapper>
    </Page>
  );
}
