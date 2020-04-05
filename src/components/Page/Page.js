import React, {useEffect} from 'react';
import Helmet from 'react-helmet';
import './Page.module.scss';

export default function Page({children}) {
  useEffect(() => {
    const {hash} = document.location;
    if (hash) {
      const element = document.querySelector(hash);
      if (element && element.scrollIntoView) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  }, []);

  return (
    <>
      <Helmet>
        <meta content="#303236" name="theme-color" />
        <link href="/manifest.json" rel="manifest" />
      </Helmet>
      {children}
    </>
  );
}
