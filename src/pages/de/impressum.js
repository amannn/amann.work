import React from 'react';
import {Link} from 'gatsby';
import Header from 'components/Header';
import MenuItem from 'components/MenuItem';
import Page from 'components/Page';
import Text from 'components/Text';
import Wrapper from 'components/Wrapper';
import Meta from './_Meta';

export default function Imprint({homeLink = '/de'}) {
  return (
    <Page>
      <Meta />
      <Header
        homeLink={homeLink}
        menu={
          <MenuItem
            color="pale"
            component={props => <Link to={homeLink} {...props} />}
          >
            Zurück zur Startseite
          </MenuItem>
        }
        showPortrait={false}
        title="Impressum"
      />
      <Wrapper>
        <Text marginBottom variant="h3">
          Jan Amann – Frontend Developer
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
      </Wrapper>
    </Page>
  );
}
