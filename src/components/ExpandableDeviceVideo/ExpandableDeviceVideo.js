import React, {useState, useRef, useCallback} from 'react';
import {motion} from 'framer-motion';
import DeviceFrame from 'components/DeviceFrame';
import ScreenVideo from 'components/ScreenVideo';
import useWindowSize from 'hooks/useWindowSize';
import styles from './ExpandableDeviceVideo.module.scss';

export default function ExpandableDeviceVideo({poster, source}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const wrapperRef = useRef();
  const [contentSize, setContentSize] = useState();
  const windowSize = useWindowSize();
  const hasMeasurements = contentSize != null && windowSize != null;
  const isOverlayVisible = isPlaying && hasMeasurements;
  const overlayMargin = 50;
  const expandedScale = hasMeasurements
    ? (1 / contentSize.offsetHeight) *
      (windowSize.innerHeight - overlayMargin * 2)
    : undefined;

  const onHasDimensions = useCallback(() => {
    const wrapper = wrapperRef.current;
    setContentSize({
      offsetHeight: wrapper.offsetHeight,
      offsetWidth: wrapper.offsetWidth
    });
  }, []);

  return (
    <motion.div
      ref={wrapperRef}
      animate
      className={styles.videoWrapper}
      style={{
        // Fixate height, so it doesn't collapse when the position gets fixed.
        ...(contentSize && {
          height: contentSize.offsetHeight,
          width: contentSize.offsetWidth
        }),
        ...(isOverlayVisible && {
          position: 'fixed',
          top: (windowSize.innerHeight - contentSize.offsetHeight) / 2,
          left: (windowSize.innerWidth - contentSize.offsetWidth) / 2
        })
      }}
    >
      <div
        style={{
          transition: '0.3s transform ease-out',
          ...(isOverlayVisible && {transform: `scale(${expandedScale})`})
        }}
      >
        <DeviceFrame onHasDimensions={onHasDimensions}>
          <ScreenVideo
            autoPlay={false}
            onIsPlayingChange={setIsPlaying}
            poster={poster}
            source={source}
          />
        </DeviceFrame>
      </div>
    </motion.div>
  );
}
