import React, {useRef, useState, useEffect} from 'react';
import cx from 'classnames';
import Icon from 'components/Icon';
import styles from './ScreenVideo.module.scss';

export default function ScreenVideo({autoPlay = true, poster, source, style}) {
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const areControlsVisible = !isPlaying;
  const type = 'video/' + source.split('.').pop();

  function onVideoClick() {
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    const video = videoRef.current;
    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }, [isPlaying]);

  return (
    <div
      className={cx(styles.root, {
        [styles.root_controlsVisible]: areControlsVisible
      })}
    >
      <div className={styles.overlay}>
        <Icon color="white" name={isPlaying ? 'pause' : 'play'} size={40} />
      </div>
      <video
        ref={videoRef}
        autoPlay={autoPlay}
        className={styles.video}
        disablePictureInPicture
        disableremoteplayback="true"
        loop
        muted
        onClick={onVideoClick}
        playsInline
        poster={poster}
        preload="auto"
        style={style}
      >
        <source src={source} type={type} />
        {"Sorry, your browser doesn't support embedded videos."}
      </video>
    </div>
  );
}
