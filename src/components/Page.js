import React from 'react';
import Helmet from 'react-helmet';
import './Page.module.scss';

export default function Page({children}) {
  return (
    <>
      <Helmet>
        <link href="/manifest.json" rel="manifest" />
      </Helmet>
      {children}
    </>
  );
}
