import React, {useEffect} from 'react';
import config from 'config';

// This page should never be rendered directly by the browser.
// Add a server-side redirect which considers the users language.

export default function Index() {
  useEffect(() => {
    document.location.href = '/' + config.defaultLanguage;
  });

  return <p>Loading …</p>;
}
