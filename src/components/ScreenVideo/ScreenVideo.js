import cx from 'classnames';
import React, {useRef, useEffect} from 'react';
import useOptionallyControlledState from 'use-optionally-controlled-state';
import Icon from 'components/Icon';
import styles from './ScreenVideo.module.scss';

export default function ScreenVideo({
  autoPlay = true,
  isPlaying: receivedIsPlaying,
  onIsPlayingChange,
  poster,
  source,
  style
}) {
  const [isPlaying, setIsPlaying] = useOptionallyControlledState({
    controlledValue: receivedIsPlaying,
    initialValue: autoPlay,
    onChange: onIsPlayingChange
  });

  const videoRef = useRef();
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
        disableRemotePlayback
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
