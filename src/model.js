import * as importedPhotos from 'photos';
import * as importedProjects from 'projects';

/**
 * What? A model in a React app?
 *
 * As this project is very simple, I found a Flux setup way too overengineered.
 * Therefore this is just a simple object that can be read from and wrote to.
 * It doesn't even have a change listener for re-rendering :).
 */
export default {
  routeHistory: [],

  photoAlbums: Object.keys(importedPhotos)
    .map(key => importedPhotos[key])
    .sort((a, b) => a.date < b.date), // Descending

  projects: Object.keys(importedProjects)
    .map(key => importedProjects[key]),

  menus: {
    main: [{
      url: '/projects',
      name: 'Projects'
    }, {
      url: '/photos',
      name: 'Photos'
    }, {
      url: '/about',
      name: 'About me'
    }],

    footer: [{
      url: '/projects',
      name: 'Projects'
    }, {
      url: '/photos',
      name: 'Photos'
    }, {
      url: '/about',
      name: 'About me'
    }, {
      url: '/imprint',
      name: 'Imprint'
    }]
  }
};
