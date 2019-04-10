import React from 'react';
import Helmet from 'react-helmet';

export default function Meta() {
  return (
    <Helmet>
      <html lang="en" />
      <title>
        Jan Amann – Partner for User Interface Engineering and Design
      </title>
      <meta
        content="My passion is to create web-based products which are a delight to use. I focus on aesthetics and always put performance first. Modern technologies like React, node.js and GraphQL enable me to do this."
        name="description"
      />
    </Helmet>
  );
}
