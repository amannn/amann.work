import React, {Component, PropTypes} from 'react';
import {Header, ProjectList, PhotoAlbumList, Button} from 'components';
import styles from './Home.scss';

export default class Home extends Component {
  static propTypes = {
    actions: PropTypes.object,
    state: PropTypes.object,
    numProjects: PropTypes.number,
    numPhotoAlbums: PropTypes.number
  };

  static defaultProps = {
    numProjects: 3,
    numPhotoAlbums: 2
  };

  render() {
    let {menus, projects, photoAlbums} = this.props.state;
    let {numProjects, numPhotoAlbums} = this.props;

    let moreProjectsAvailable = numProjects < projects.length;
    let morePhotoAlbumsAvailable = numPhotoAlbums < photoAlbums.length;

    let headerProps = {
      menu: menus.main,
      feature: {
        type: 'image',
        url: require('images/portrait.jpg'),
        className: styles.portrait
      },
      title: 'Jan Amann',
      description: 'I’m a frontend developer who cares about user experience.',
      animateText: true
    };

    return (
      <div>
        <Header {...headerProps} />
        <section className={styles.section}>
          <h1 className={styles.separator}>
            <span className={styles.separatorText}>Selected projects</span>
          </h1>
          <ProjectList projects={projects.slice(0, numProjects)} />
            {moreProjectsAvailable &&
              <Button routerLink="/projects">Show all</Button>}
        </section>
        <section className={styles.section}>
          <h1 className={styles.separator}><span className={styles.separatorText}>Latest photos</span></h1>
          <PhotoAlbumList albums={photoAlbums.slice(0, numPhotoAlbums)} />
          {morePhotoAlbumsAvailable &&
            <Button routerLink="/photos">Show all</Button>}
        </section>
      </div>
    );
  }
}
