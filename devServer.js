/* eslint-disable no-console */

/**
 * This is the local server that can be used for development.
 *
 * Start the dev server with `npm run dev`.
 */

import React from 'react';
import express from 'express';
import webpack from 'webpack';
import ReactDOMServer from 'react-dom/server';
import config from './webpack.config';
import Base from './src/Base';

const PUBLIC_PATH = '/static';
const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
const compiler = webpack(config);

// Serve files from /static
app.use('/static', express.static('static'));

// Enable hot reloading of files.
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

// Insert assets into HTML file.
const assets = {
  scripts: [PUBLIC_PATH + '/bundle.js'],
  styles: [] // Are inserted dynamically
};
const html = ReactDOMServer.renderToString(React.createElement(Base, {html: '', assets}));

// Match all routes (static files are an exception).
app.get('*', (req, res) => {
  res.send(html);
});

// Prepare to receive requests.
app.listen(PORT, HOST, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('\n\nListening at http://' + HOST + ':' + PORT + '\n\n');
});
