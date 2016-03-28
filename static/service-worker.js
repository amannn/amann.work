/* eslint-disable */

// This needs to be in the static root, so that all requests
// from `/` below will be caught by this service worker.

importScripts('/sw-cache-polyfill.js');

var CACHE_NAME = 'amann-static';
var PRECACHE_FILE = '/precache.json';

self.addEventListener('install', function(event) {
  event.waitUntil(
    fetch(PRECACHE_FILE).then(function(response) {
      if (!response.ok) {
        throw Error('unable to load ' + PRECACHE_FILE);
      }
      return response.json();
      }.bind(this)).then(function(files) {
        return caches.open(CACHE_NAME).then(function(cache) {
          return cache.addAll(files);
        });
      }.bind(this)
    ).catch(function(error) {
    console.info('Skipping precaching: ' + error.message);
  }));
});

// Fetch with network first strategy
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});
