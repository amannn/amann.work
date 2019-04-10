import React, {useEffect} from 'react';
import Helmet from 'react-helmet';

// This page should never be rendered directly by the browser.
// Add a server-side redirect which considers the users language.

export default function Index() {
  useEffect(() => {
    document.location.href = '/en';
  }, []);

  return (
    <>
      <Helmet>
        <link href="/en" rel="canonical" />
      </Helmet>
      <p>Loading …</p>
    </>
  );
}
