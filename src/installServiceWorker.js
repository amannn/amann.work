/* eslint-disable no-console */

// Check if service workers are supported by the browser before installing.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => {
      console.info('This site will now also be available offline.');
    })
    .catch(err => {
      console.log('ServiceWorker registration failed with error', err);
    });
}
