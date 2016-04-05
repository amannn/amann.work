import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {DateUtils, breakpoint} from 'utils';
import styles from './PhotoAlbumList.scss';

export default class PhotoAlbumList extends Component {
  static propTypes = {
    albums: PropTypes.array
  };

  render() {
    let {albums} = this.props;

    return (
      <div>
        {albums.map(album => {
          let date = new Date(album.date);
          let cover = breakpoint.isSmallerThan('small') && album.smallPhotos
            ? album.smallPhotos[0]
            : album.photos[0];

          return (
            <Link
              key={album.name}
              to={`/photos/${album.name}`}
              className={styles.item}
              style={{
                backgroundImage: `url(${cover})`
              }}
            >
              <div className={styles.text}>
                <p className={styles.meta}>
                  {
                    DateUtils.months[date.getMonth()] + ' '
                    + date.getFullYear().toString() + ' · '
                    + album.photos.length + ' Pictures'
                  }
                  </p>
                <h2 className={styles.title}>{album.title}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}
