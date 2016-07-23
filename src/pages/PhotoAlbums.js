import React, {Component, PropTypes} from 'react';
import {Header, PageContent, PhotoAlbumList} from 'components';

export default class PhotoAlbums extends Component {
  static propTypes = {
    model: PropTypes.object
  };

  render() {
    let {photoAlbums, menus} = this.props.model;

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
