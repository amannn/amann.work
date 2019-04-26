import React from 'react';
import Page from 'components/Page';
import PageWrapper from 'components/PageWrapper';
import LocalizedMeta from './LocalizedMeta';
import LocalizedFooter from './LocalizedFooter';
import LocalizedHeader from './LocalizedHeader';

export default function LocalizedLayout({children, title}) {
  return (
    <Page>
      <LocalizedMeta />
      <LocalizedHeader title={title} />
      <PageWrapper>{children}</PageWrapper>
      <LocalizedFooter />
    </Page>
  );
}
