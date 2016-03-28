import React from 'react';
import {Route} from 'react-router';
import {
  App, Home, PhotoAlbums, PhotoAlbum, About, Projects, Project, Imprint
} from 'pages';

// NOTE: If you change the routes, please also update
// the list of routes in `webpack.config.js` (look for `BASE_PATHS`).

const routes = (
  <Route component={App}>
    <Route path="/" component={Home} />

    <Route path="/photos" component={PhotoAlbums} />
    <Route path="/photos/:name" component={PhotoAlbum} />

    <Route path="/projects" component={Projects} />
    <Route path="/projects/:name" component={Project} />

    <Route path="/about" component={About} />
    <Route path="/imprint" component={Imprint} />

    <Route path="*" component={Home} />
  </Route>
);

export default routes;
