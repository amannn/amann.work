/**
 * These functions can be used to decorate touch and click handlers
 * to enhance them for touch interactions.
 *
 * This is based on the implementation of iamralpht. Have a look at it here:
 * https://github.com/iamralpht/iamralpht.github.io/tree/master/physics
 */

let touchInfo = {trackingID: -1, maxDy: 0, maxDx: 0};

const TouchUtils = {};

/**
* @param {event} e A touch or mouse event.
* @return {object}
*/
function getTouchDelta(e) {
  if (e.type === 'touchmove' || e.type === 'touchend') {
    let matches = Array.prototype.filter.call(e.changedTouches,
      touch => touch.identifier === touchInfo.trackingID
    );

    if (!matches || matches.length !== 1) return undefined;

    let touch = matches[0];
    return {x: touch.pageX - touchInfo.x, y: touch.pageY - touchInfo.y};
  } else {
    return {x: e.screenX - touchInfo.x, y: e.screenY - touchInfo.y};
  }
}

TouchUtils.decorateTouchStart = touchStart => e => {
  e.preventDefault();
  if (touchInfo.trackingID !== -1) return;

  if (e.type === 'touchstart') {
    touchInfo.trackingID = e.changedTouches[0].identifier;
    touchInfo.x = e.changedTouches[0].pageX;
    touchInfo.y = e.changedTouches[0].pageY;
  } else {
    touchInfo.trackingID = 'mouse';
    touchInfo.x = e.screenX;
    touchInfo.y = e.screenY;
  }

  touchInfo.maxDx = 0;
  touchInfo.maxDy = 0;
  touchInfo.history = [{
    x: 0,
    y: 0,
    time: e.timeStamp
  }];

  if (touchStart) touchStart();
};

TouchUtils.decorateTouchMove = touchMove => e => {
  e.preventDefault();
  if (touchInfo.trackingID === -1) return;

  let delta = getTouchDelta(e);

  if (!delta) return;

  touchInfo.maxDy = Math.max(touchInfo.maxDy, Math.abs(delta.y));
  touchInfo.maxDx = Math.max(touchInfo.maxDx, Math.abs(delta.x));

  // For the computation of the velocity later
  touchInfo.history.push({
    x: delta.x,
    y: delta.y,
    time: e.timeStamp
  });

  // Don't let the history grow too large
  while (touchInfo.history.length > 10) {
    touchInfo.history.shift();
  }

  if (touchMove) touchMove(delta);
};

TouchUtils.decorateTouchEnd = touchEnd => e => {
  e.preventDefault();
  if (touchInfo.trackingID === -1) return;

  let delta = getTouchDelta(e);

  if (!delta) return;

  touchInfo.trackingID = -1;

  // This is a very simple implementation of calculating the velocity of
  // the gesture. The strategy is to start from the last sample in the history
  // and walk backwards until there's a sample that's at least 30ms and at most
  // 50ms away from the initial sample. This could be improved by taking more
  // samples into consideration. If there's no matching sample, the velocity
  // will be set to zero.
  let velocity = {x: 0, y: 0};
  if (touchInfo.history.length > 2) {
    let numSamples = touchInfo.history.length;
    let lastSample = touchInfo.history[numSamples - 1];

    for (let i = numSamples - 2; i > 0; i--) {
      let curSample = touchInfo.history[i];
      let dt = lastSample.time - curSample.time;

      if (dt > 30 && dt < 50) {
        velocity.x = (lastSample.x - curSample.x) / (dt / 1000);
        velocity.y = (lastSample.y - curSample.y) / (dt / 1000);
        break;
      }
    }
  }

  // Clear history
  touchInfo.history = [];

  if (touchEnd) touchEnd(delta, velocity);
};

export default TouchUtils;
