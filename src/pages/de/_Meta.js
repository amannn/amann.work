import React from 'react';
import Helmet from 'react-helmet';

export default function Meta() {
  return (
    <Helmet>
      <html lang="de" />
      <title>
        Jan Amann – Partner für User Interface Entwicklung und Design
      </title>
      <meta
        content="Meine Leidenschaft ist die Entwicklung von webbasierten Produkten die sich wirklich gut anfühlen. Die durch Ästhetik überzeugen und auf Performance setzen. Dazu setze ich auf moderne Technologien wie React, node.js und GraphQL."
        name="description"
      />
    </Helmet>
  );
}
