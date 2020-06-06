import React, {useRef} from 'react';
import useLoadedWidth from './useLoadedWidth';
import useLayoutGetter from './useLayoutGetter';
import styles from './DeviceFrameDesktop.module.scss';

export default function DeviceFrameDesktop({children, screenBackgroundColor}) {
  const rootRef = useRef();
  const width = useLoadedWidth(rootRef);
  const getLayoutProps = useLayoutGetter(width, 550);
  const toolbarIconSize = 6;

  const ToolbarIcon = () => (
    <span
      className={styles.toolbarIcon}
      style={getLayoutProps({
        width: toolbarIconSize,
        height: toolbarIconSize,
        marginRight: 4
      })}
    />
  );

  return (
    <div ref={rootRef} className={styles.root}>
      <div className={styles.toolbar} style={getLayoutProps({padding: 4})}>
        <ToolbarIcon />
        <ToolbarIcon />
        <ToolbarIcon />
      </div>
      <div
        className={styles.children}
        style={{backgroundColor: screenBackgroundColor}}
      >
        {children}
      </div>
    </div>
  );
}
