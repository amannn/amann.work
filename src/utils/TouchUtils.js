let touchInfo = { trackingID: -1, maxDy: 0, maxDx: 0 };

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
  touchInfo.historyX = [0];
  touchInfo.historyY = [0];
  touchInfo.historyTime = [e.timeStamp];

  if (touchStart) touchStart();
};

TouchUtils.decorateTouchMove = touchMove => e => {
  if (touchInfo.trackingID === -1) return;
  e.preventDefault();

  let delta = getTouchDelta(e);

  if (!delta) return;

  touchInfo.maxDy = Math.max(touchInfo.maxDy, Math.abs(delta.y));
  touchInfo.maxDx = Math.max(touchInfo.maxDx, Math.abs(delta.x));

  // This is all for our crummy velocity computation method. We really
  // should do least squares or anything at all better than just taking
  // the difference between two random samples.
  touchInfo.historyX.push(delta.x);
  touchInfo.historyY.push(delta.y);
  touchInfo.historyTime.push(e.timeStamp);

  while (touchInfo.historyTime.length > 10) {
    touchInfo.historyTime.shift();
    touchInfo.historyX.shift();
    touchInfo.historyY.shift();
  }

  if (touchMove) touchMove(delta);
};

TouchUtils.decorateTouchEnd = touchEnd => e => {
  if (touchInfo.trackingID === -1) return;
  e.preventDefault();

  let delta = getTouchDelta(e);

  if (!delta) return;

  touchInfo.trackingID = -1;

  // Compute velocity in the most atrocious way. Walk backwards until we find a sample that's 30ms away from
  // our initial sample. If the samples are too distant (nothing between 30 and 50ms away then blow it off
  // and declare zero velocity. Same if there are no samples.
  let sampleCount = touchInfo.historyTime.length;
  let velocity = { x: 0, y: 0 };
  if (sampleCount > 2) {
    let idx = touchInfo.historyTime.length - 1;
    let lastTime = touchInfo.historyTime[idx];
    let lastX = touchInfo.historyX[idx];
    let lastY = touchInfo.historyY[idx];

    while (idx > 0) {
      idx--;
      let t = touchInfo.historyTime[idx];
      let dt = lastTime - t;
      if (dt > 30 && dt < 50) {
        velocity.x = (lastX - touchInfo.historyX[idx]) / (dt / 1000);
        velocity.y = (lastY - touchInfo.historyY[idx]) / (dt / 1000);
        break;
      }
    }
  }
  touchInfo.historyTime = [];
  touchInfo.historyX = [];
  touchInfo.historyY = [];

  if (touchEnd) touchEnd(delta, velocity);
};

export default TouchUtils;
