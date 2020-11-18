/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import cx from 'classnames';
import {motion} from 'framer-motion';
import React, {useState, useRef, useCallback, useEffect} from 'react';
import DeviceFrame from 'components/DeviceFrame';
import ScreenVideo from 'components/ScreenVideo';
import useKeyboardShortcut from 'hooks/useKeyboardShortcut';
import useWindowSize from 'hooks/useWindowSize';
import styles from './LightboxDeviceVideo.module.scss';

export default function LightboxDeviceVideo({poster, source}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const innerRef = useRef();
  const [contentSize, setContentSize] = useState();
  const windowSize = useWindowSize();
  const hasMeasurements = contentSize != null && windowSize != null;
  const isOpen = isPlaying && hasMeasurements;

  function getExpandedScale() {
    if (!hasMeasurements) return;

    const overlayMargin = 50;
    const maxExpandedHeight = 700;
    const expandedHeight = Math.min(
      windowSize.innerHeight - overlayMargin * 2,
      maxExpandedHeight
    );
    return (1 / contentSize.offsetHeight) * expandedHeight;
  }

  const onClose = useCallback(() => {
    setIsPlaying(false);
  }, []);

  function onVideoPlayingChange(nextIsPlaying) {
    if (nextIsPlaying) {
      const innerNode = innerRef.current;

      setContentSize({
        offsetHeight: innerNode.offsetHeight,
        offsetWidth: innerNode.offsetWidth
      });
    }
    setIsPlaying(nextIsPlaying);
  }

  useKeyboardShortcut({
    isActive: isPlaying,
    onKeyDown: useCallback(
      (event) => {
        if (event.key === 'Escape') {
          onClose();
        }
      },
      [onClose]
    )
  });

  // Close on scroll
  useEffect(() => {
    if (!isOpen) return;

    function onScroll() {
      setIsPlaying(false);
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isOpen]);

  // We can't let framer-motion take care of resizing the video, as that doesn't
  // work properly. Instead we want framer-motion to only take care of the
  // movement and do the scaling ourselves.
  return (
    <>
      <div
        className={cx(styles.backdrop, isOpen && styles.backdrop_open)}
        onClick={onClose}
      />
      <motion.div
        animate
        className={cx(styles.outer, isOpen && styles.outer_open)}
        inherit={false}
        style={{
          ...(isOpen && {
            // Center in the middle of the viewport
            top: (windowSize.innerHeight - contentSize.offsetHeight) / 2,
            left: (windowSize.innerWidth - contentSize.offsetWidth) / 2,
            // Fixate height, so it doesn't collapse when the position gets fixed.
            height: contentSize.offsetHeight,
            width: contentSize.offsetWidth
          })
        }}
      >
        <div
          ref={innerRef}
          className={styles.inner}
          style={
            isOpen ? {transform: `scale(${getExpandedScale()})`} : undefined
          }
        >
          <DeviceFrame>
            <ScreenVideo
              isPlaying={isPlaying}
              onIsPlayingChange={onVideoPlayingChange}
              poster={poster}
              source={source}
            />
          </DeviceFrame>
        </div>
      </motion.div>
    </>
  );
}
