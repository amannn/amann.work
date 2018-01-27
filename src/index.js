import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {
  applyRouterMiddleware,
  browserHistory,
  match,
  Router,
  RouterContext
} from 'react-router';
import {useScroll} from 'react-router-scroll';
import Analytics from 'ga-browser';
import {EnvUtils} from 'utils';
import routes from 'routes';
import model from 'model';
import 'babel-polyfill';

/**
 * Client render (browser context)
 */
if (EnvUtils.isClient()) {
  const root = document.getElementById('root');

  // Google Analytics and route tracking
  let analytics = Analytics();
  analytics('create', 'UA-28289754-1', 'auto');
  browserHistory.listen(location => {
    model.routeHistory.push(location);
    analytics('send', 'pageview', {page: location.pathname});
  });

  const element = (
    <Router
      history={browserHistory}
      render={applyRouterMiddleware(useScroll())}
    >
      {routes}
    </Router>
  );
  ReactDOM.render(element, root);

  // Don't use service worker. The complete website is too huge by now.
  // require('installServiceWorker');
}

/**
 * Static render (node.js context)
 */
export default (locals, callback) => {
  const Base = require('./Base').default;

  const options = {
    routes,
    location: locals.path
  };
  match(options, (error, redirectLocation, renderProps) => {
    let html = ReactDOMServer.renderToString(<RouterContext {...renderProps} />);

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
