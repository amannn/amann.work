import React, {Component, PropTypes} from 'react';
import {Header} from 'components';
import {PageContent, PhotoAlbumList} from 'components';

export default class PhotoAlbums extends Component {
  static propTypes = {
    state: PropTypes.object
  };

  render() {
    let {photoAlbums, menus} = this.props.state;

    return (
      <div>
        <Header title="Photos" mini menu={menus.main} />

        <PageContent fullWidth>
          <PhotoAlbumList albums={photoAlbums} />
        </PageContent>
      </div>
    );
  }
}
