import React, {useRef} from 'react';
import useLoadedWidth from './useLoadedWidth';
import useLayoutGetter from './useLayoutGetter';
import styles from './DeviceFrameMobile.module.scss';

export default function DeviceFrameMobile({
  children,
  onHasDimensions,
  screenBackgroundColor
}) {
  const rootRef = useRef();
  const width = useLoadedWidth(rootRef, onHasDimensions);
  const getLayoutProps = useLayoutGetter(width, 180);

  const paddingVertical = 40;
  const paddingHorizontal = 8;
  const cameraSize = 5;
  const homeSize = 24;

  return (
    <div
      ref={rootRef}
      className={styles.root}
      style={getLayoutProps({
        paddingTop: paddingVertical,
        paddingBottom: paddingVertical,
        paddingLeft: paddingHorizontal,
        paddingRight: paddingHorizontal,
        borderRadius: 24
      })}
    >
      <div
        className={styles.cameraAndSpeaker}
        style={getLayoutProps({
          top: (paddingVertical - cameraSize) / 2
        })}
      >
        <span
          className={styles.camera}
          style={getLayoutProps({
            width: cameraSize,
            height: cameraSize
          })}
        />
        <span
          className={styles.speaker}
          style={getLayoutProps({
            height: 2.5,
            width: 48,
            marginLeft: 8,
            borderRadius: 2
          })}
        />
      </div>
      <div
        className={styles.children}
        style={{backgroundColor: screenBackgroundColor}}
      >
        {children}
      </div>
      <span
        className={styles.home}
        style={getLayoutProps({
          width: homeSize,
          height: homeSize,
          bottom: (paddingVertical - homeSize) / 2
        })}
      />
    </div>
  );
}
