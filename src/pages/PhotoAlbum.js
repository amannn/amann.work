import React, {Component, PropTypes} from 'react';
import {PhotoGallery} from 'components';

export default class PhotoAlbum extends Component {
  static propTypes = {
    actions: PropTypes.object,
    state: PropTypes.object,
    params: PropTypes.object,
    history: PropTypes.object
  };

  onRequestClose() {
    let {state, history} = this.props;

    if (state.routeHistory.length > 1) history.goBack();
    else history.push('/photos');
  }

  render() {
    let {state, params} = this.props;

    let album = state.photoAlbums.filter(
      cur => cur.name === params.name
    )[0];

    return (
      <PhotoGallery
        album={album}
        onRequestClose={this.onRequestClose.bind(this)}
      />
    );
  }
}
