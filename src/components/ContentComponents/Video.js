import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {ScrollSpy} from 'components';
import {EnvUtils} from 'utils';
import styles from './Video.scss';

/**
 * Starts to play, as soon as the video is scrolled into the viewport.
 */
export default class Video extends Component {
  static propTypes = {
    videos: PropTypes.array.isRequired,
    poster: PropTypes.string.isRequired,
    children: PropTypes.node,
    width: PropTypes.string
  };

  onReachedSpot = () => {
    let video = ReactDOM.findDOMNode(this.refs.video);
    video.play();
  };

  render() {
    let {videos, children, width, poster} = this.props;

    let videoProps = {
      preload: 'auto',
      loop: true,
      autoPlay: false,
      muted: true,
      controls: EnvUtils.hasTouch(),
      width,
      poster
    };

    return (
      <div className={styles.root}>
        <ScrollSpy onReachedSpot={this.onReachedSpot} />
        <div className={styles.cropper}>
          <video ref="video" className={styles.video} {...videoProps}>
            {videos.map(video =>
              <source
                key={video.src}
                src={video.src}
                type={`video/${video.type}`}
              />
            )}
            <p className={styles.text}>
              Sorry, your browser doesn't support embedded videos, but don't worry, you can <a href={videos[0].src}>download it</a> and watch it with your favourite video player.
            </p>
          </video>
        </div>
        <div className={styles.text}>{children}</div>
      </div>
    );
  }
}
