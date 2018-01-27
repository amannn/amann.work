import React, {Component, PropTypes} from 'react';
import {withRouter} from 'react-router';
import {PhotoGallery} from 'components';

class PhotoAlbum extends Component {
  static propTypes = {
    model: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
  };

  onRequestClose() {
    let {model, router} = this.props;

    if (model.routeHistory.length > 1) router.goBack();
    else router.push('/photos');
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

export default withRouter(PhotoAlbum);
