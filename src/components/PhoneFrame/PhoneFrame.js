import React, {useRef} from 'react';
import styles from './PhoneFrame.module.scss';
import useLoadedWidth from './useLoadedWidth';

/**
 * Renders media like an image or a video within a phone frame and adjusts the
 * frame proportions based on the media.
 */

export default function PhoneFrame({screenBackgroundColor, children}) {
  const rootRef = useRef();
  const width = useLoadedWidth(rootRef);

  function getLayoutProps(template) {
    if (!width) return {visibility: 'hidden'};

    const originalWidth = 180;
    const scale = width / originalWidth;

    const props = {};
    Object.keys(template).forEach(key => {
      props[key] = template[key] * scale;
    });
    return props;
  }

  const paddingVertical = 40;
  const paddingHorizontal = 8;
  const cameraSize = 4;
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
            height: 2,
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
