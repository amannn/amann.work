import React, {PropTypes, Component} from 'react';
import cx from 'classnames';
import {breakpoint, EnvUtils} from 'utils';
import {IconButton} from 'components';
import PhotosContainer from './PhotosContainer';
let key;
if (EnvUtils.isClient()) {
  key = require('keymaster');
}
import styles from './PhotoGallery.scss';

export default class PhotoGallery extends Component {
  static propTypes = {
    album: PropTypes.object,
    onRequestClose: PropTypes.func
  };

  state = {
    selected: 0,
    hideControls: false
  };

  componentDidMount() {
    this.startHideControlsTimer();

    key('left', this.onShowPrev);
    key('right', this.onShowNext);
    key('esc', this.onEsc);
  }

  componentWillUnmount() {
    this.cancelHideControlsTimer();

    key.unbind('left');
    key.unbind('right');
    key.unbind('esc');
  }

  onHideControls = () => {
    this.setState({hideControls: true});
  };

  onShowControls = () => {
    this.setState({hideControls: false});
    this.startHideControlsTimer();
  };

  onShowPrev = () => {
    if (this.hasPrev()) this.setState({selected: this.state.selected - 1});
  };

  onShowNext = () => {
    if (this.hasNext()) this.setState({selected: this.state.selected + 1});
  };

  onChange = (selected) => {
    this.setState({selected});
  };

  onMouseMove = () => {
    this.showControls();
  };

  onClick = () => {
    this.showControls();
  };

  onCloseClick = () => {
    this.close();
  };

  onEsc = () => {
    this.close();
  };

  startHideControlsTimer() {
    this.cancelHideControlsTimer();
    if (!EnvUtils.hasTouch()) {
      this.hideControlsTimerID = setTimeout(::this.hideControls, 2000);
    }
  }

  cancelHideControlsTimer() {
    if (this.hideControlsTimerID) {
      clearInterval(this.hideControlsTimerID);
    }
  }

  hideControls() {
    this.setState({hideControls: true});
  }

  showControls() {
    this.setState({hideControls: false});
    this.startHideControlsTimer();
  }

  close() {
    let {onRequestClose} = this.props;
    if (onRequestClose) onRequestClose();
  }

  hasNext = () => this.state.selected < this.props.album.photos.length - 1;

  hasPrev = () => this.state.selected > 0;

  render() {
    let {album} = this.props;
    let {selected, hideControls} = this.state;

    let photos = breakpoint.isSmallerThan('medium') && album.smallImages
      ? album.smallPhotos
      : album.photos;

    let className = cx(styles.root, {[styles.root_hideControls]: hideControls});

    return (
      <div
        className={className}
        onMouseMove={this.onMouseMove}
        onClick={this.onClick}
      >
        <IconButton
          className={styles.close}
          onClick={this.onCloseClick}
          icon="close"
        />
        {!EnvUtils.hasTouch() &&
          <IconButton
            className={styles.prev}
            onClick={this.onShowPrev}
            icon="chevron-left"
            disabled={!this.hasPrev()}
          />
        }
        {!EnvUtils.hasTouch() &&
          <IconButton
            className={styles.next}
            onClick={this.onShowNext}
            icon="chevron-right"
            disabled={!this.hasNext()}
            />
        }
        <PhotosContainer
          photos={photos}
          selected={selected}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
