/* eslint-disable no-console */
'use strict';

/**
 * This file contains the webpack config for all environments.
 * Use NODE_ENV to set the environment either to 'production' or 'development'.
 */

const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const glob = require('glob');
const OnBuildPlugin = require('on-build-webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const STATIC_PATH = 'static';
const PUBLIC_PATH_DEV = STATIC_PATH;
const PUBLIC_PATH_PROD = 'public';
const AUTOPREFIXER_CONFIG = '{browsers:["> 1% in AT", "last 2 version", "Firefox ESR"]}';
const SHARED_BABEL_PRESETS = ['react', 'es2015'];
const SHARED_BABEL_PLUGINS = ['transform-class-properties'];

// Keep this in sync with `src/routes.js`.
const BASE_PATHS = [
  '/',
  '/projects',
  '/photos',
  '/about',
  '/imprint'
];
// Keep this in sync with `src/Base.js`
const EXTRA_PATHS = [
  '//fonts.googleapis.com/css?family=Merriweather+Sans:400,400italic|Merriweather:400,700italic'
];

/**
 * Utility functions
 */

// Returns all the possible paths the router can handle
function getAllPossiblePaths() {
  // Gather paths including dynamic article URLs
  let paths = BASE_PATHS.concat(EXTRA_PATHS);
  let dynamicPaths = {
    '/projects': glob.sync('src/projects/*'),
    '/photos': glob.sync('src/photos/*')
  };
  Object.keys(dynamicPaths).forEach(baseURL => {
    dynamicPaths[baseURL].forEach(file => {
      let lastSlashI = file.lastIndexOf('/');
      let name = file.substr(lastSlashI);
      if (name !== '/index.js') paths.push(baseURL + name);
    });
  });

  return paths;
}

// Generates the service worker cache.
// The file will be written as ./static/precache.json
function generateServiceWorkerCache(stats) {
  fs.writeFileSync(
    path.join(__dirname, STATIC_PATH, 'precache.json'),
    JSON.stringify(Object.keys(stats.compilation.assets))
  );
}

// Copies all files from static/ to the public path
function copyStaticAssets() {
  glob.sync('static/**/*.*').forEach(file => {
    let lastSlashI = file.lastIndexOf('/');
    let name = file.substr(lastSlashI);
    fs.createReadStream(file)
      .pipe(fs.createWriteStream(path.join(__dirname, PUBLIC_PATH_PROD, name)));
  });
  console.info('\nCopied assets from /static/\n');
}

/**
 * Shared config
 */
let config = {
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.json', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /.*\.(gif|png|svg|jpe?g)$/i,
      loaders: [
        'url?limit=1024&name=[name]-[hash].[ext]',
        'image?optimizationLevel=7'
      ]
    }, {
      test: /.*\.(mp4|ogv|ogg|webm|mpeg|avi)$/i,
      loader: 'file?name=[name]-[hash].[ext]'
    }]
  }
};

/**
 * Development config
 */
if (process.env.NODE_ENV === 'development') {
  config.devtool = 'source-map';

  config.entry = [
    'webpack-hot-middleware/client',
    './src/index'
  ];

  config.output = {
    path: path.join(__dirname, PUBLIC_PATH_DEV),
    filename: 'bundle.js',
    publicPath: '/' + PUBLIC_PATH_DEV + '/'
  };

  config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );

  config.module.loaders.push({
    test: /\.scss$/,
    loader: 'style!css?modules&localIdentName=[name]--[local]--[hash:base64:5]!autoprefixer?' + AUTOPREFIXER_CONFIG + '!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true'
  }, {
    test: /\.jsx?$/,
    loader: 'babel',
    query: {
      presets: [...SHARED_BABEL_PRESETS, 'react-hmre'],
      plugins: SHARED_BABEL_PLUGINS
    },
    exclude: [path.join(__dirname, 'node_modules')],
    include: path.join(__dirname, 'src')
  });
}


/**
 * Production config
 */
if (process.env.NODE_ENV === 'production') {
  config.bail = true;

  config.entry = {
    'main': './src/index'
  };

  config.output = {
    path: path.join(__dirname, PUBLIC_PATH_PROD),
    filename: 'main-[hash].js',
    libraryTarget: 'umd',
    publicPath: '/'
  };

  config.plugins.push(
    new ExtractTextPlugin('main-[hash].css', {allChunks: true}),
    new webpack.optimize.UglifyJsPlugin({compressor: { warnings: false}}),
    new webpack.optimize.DedupePlugin(),
    new StaticSiteGeneratorPlugin('main', getAllPossiblePaths()),
    new OnBuildPlugin(generateServiceWorkerCache),
    new OnBuildPlugin(copyStaticAssets)
  );

  config.module.loaders.push({
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style', 'css?modules!autoprefixer?' + AUTOPREFIXER_CONFIG + '!sass')
  }, {
    test: /\.js$/,
    loader: 'babel',
    query: {
      presets: SHARED_BABEL_PRESETS,
      plugins: SHARED_BABEL_PLUGINS
    },
    exclude: [path.join(__dirname, 'node_modules')],
    include: path.join(__dirname, 'src')
  });
}


module.exports = config;
