import React from 'react';
import Helmet from 'react-helmet';
import labels from './labels';

export default function Meta() {
  return (
    <Helmet>
      <html lang="en" />
      <title>
        {labels.title} – {labels.tagline}
      </title>
      <meta content={labels.description} name="description" />
    </Helmet>
  );
}
