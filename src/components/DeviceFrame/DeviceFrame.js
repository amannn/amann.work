import React from 'react';
import DeviceFrameDesktop from './DeviceFrameDesktop';
import DeviceFrameMobile from './DeviceFrameMobile';

/**
 * Renders media like an image or a video within a device frame
 * and adjusts the frame proportions based on the media.
 */

export default function DeviceFrame({type = 'mobile', ...rest}) {
  let Component;
  if (type === 'mobile') {
    Component = DeviceFrameMobile;
  } else if (type === 'desktop') {
    Component = DeviceFrameDesktop;
  } else {
    throw new Error(`Unknown type: ${type}`);
  }

  return <Component {...rest} />;
}
