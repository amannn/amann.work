import * as importedPhotos from 'photos';
import * as importedProjects from 'projects';

/**
 * Everything 'data' in the app.
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
