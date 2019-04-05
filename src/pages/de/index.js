import React from 'react';
import Header from 'components/Header';
import MenuItem from 'components/MenuItem';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';

export default function Index() {
  function onClick() {
    console.log('click');
  }

  return (
    <Page>
      <Header
        description="Meine Leidenschaft ist die Entwicklung von webbasierten Produkten die sich wirklich gut anfühlen. Die mit Ästhetik überzeugen und durch und durch performant sind. Dazu setze ich auf moderne Technologien wie React, node.js und GraphQL."
        menuItems={
          <>
            <MenuItem onClick={onClick}>Kontakt</MenuItem>
            <MenuItem onClick={onClick} pale>
              EN
            </MenuItem>
          </>
        }
        subtitle="Partner für User Interface Entwicklung und Design"
        title="Jan Amann"
      />
      <SectionTitle>Ausgewählte Projekte</SectionTitle>
    </Page>
  );
}
