import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {createHistory, createMemoryHistory} from 'history';
import useStandardScroll from 'scroll-behavior/lib/useStandardScroll';
import {Router, RoutingContext, match} from 'react-router';
import Analytics from 'ga-browser';
import {EnvUtils} from 'utils';
import routes from 'routes';
import model from 'model';
import 'babel-polyfill';

/**
 * Client render (browser context)
 */
if (EnvUtils.isClient()) {
  // `useStandardScroll` attempts to imitate native browser scroll behavior by
  // recording updates to the window scroll position, then restoring the
  // previous scroll position upon a POP transition. PUSH and REPLACE
  // transitions apparently scroll to top (which is desired).
  const history = useStandardScroll(createHistory)();
  const root = document.getElementById('root');

  // Google Analytics and route tracking
  let analytics = Analytics();
  analytics('create', 'UA-28289754-1', 'auto');
  history.listen(location => {
    model.routeHistory.push(location);
    analytics('send', 'pageview', {page: location.pathname});
  });

  ReactDOM.render(<Router history={history} routes={routes} />, root);

  // Don't use service worker. The complete website is too huge by now.
  // require('installServiceWorker');
}

/**
 * Static render (node.js context)
 */
export default (locals, callback) => {
  const Base = require('./Base').default;

  const history = createMemoryHistory();
  const location = history.createLocation(locals.path);

  match({routes, location}, (error, redirectLocation, renderProps) => {
    let html = ReactDOMServer.renderToString(<RoutingContext {...renderProps} />);

    // Currently only one chunk is emitted for the JavaScript and CSS code.
    // This could be swapped out for something more sophisticated
    // in the future, if necessary.
    let hash = locals.webpackStats.compilation.hash;
    let assets = {
      scripts: ['/main-' + hash + '.js'],
      styles: ['/main-' + hash + '.css']
    };

    html = ReactDOMServer.renderToStaticMarkup(<Base html={html} assets={assets} />);

    callback(null, '<!DOCTYPE html>' + html);
  });
};
