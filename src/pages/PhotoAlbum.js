import React, {Component, PropTypes} from 'react';
import {PhotoGallery} from 'components';

export default class PhotoAlbum extends Component {
  static propTypes = {
    model: PropTypes.object,
    params: PropTypes.object,
    history: PropTypes.object
  };

  onRequestClose() {
    let {model, history} = this.props;

    if (model.routeHistory.length > 1) history.goBack();
    else history.push('/photos');
  }

  render() {
    let {model, params} = this.props;

    let album = model.photoAlbums.filter(
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
