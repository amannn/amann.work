import React, {useEffect} from 'react';

// This page should never be rendered directly by the browser.
// Add a server-side redirect which considers the users language.

export default function Index() {
  useEffect(() => {
    document.location.href = '/en';
  }, []);

  return <p>Loading …</p>;
}
