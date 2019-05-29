import {useEffect, useState} from 'react';

/**
 * Waits for media content to be loaded and reports the width of the ref afterwards.
 */

// When devices are placed next to each other, it's possible that the resizing
// of one device affects the size of another one. Therefore all other current
// instances need to be notified when one device updates its width.
let listeners = [];

export default function useLoadedWidth(ref) {
  const [width, setWidth] = useState();

  useEffect(() => {
    let isCanceled = false;
    let mediaLoadedPromise;
    let onLoad;

    function updateWidth() {
      setWidth(ref.current.offsetWidth);
    }

    function notifyOtherListeners() {
      listeners.forEach(listener => {
        if (listener !== updateWidth) listener();
      });
    }

    listeners.push(updateWidth);

    const image = ref.current.querySelector('img');
    if (image) {
      mediaLoadedPromise = new Promise(resolve => {
        if (image.complete) {
          resolve();
        } else {
          onLoad = resolve;
          image.addEventListener('load', onLoad);
        }
      });
    }

    const video = ref.current.querySelector('video');
    if (video) {
      mediaLoadedPromise = new Promise(resolve => {
        const isAtLeastMetadataFetched = video.readyState >= 1;

        if (isAtLeastMetadataFetched) {
          resolve();
        } else {
          onLoad = resolve;
          video.addEventListener('loadeddata', onLoad);
        }
      });
    }

    if (mediaLoadedPromise) {
      mediaLoadedPromise.then(() => {
        if (isCanceled) return;
        updateWidth();
        notifyOtherListeners();
      });
    }

    window.addEventListener('resize', updateWidth);

    return () => {
      listeners = listeners.filter(listener => listener !== updateWidth);

      isCanceled = true;
      window.removeEventListener('resize', updateWidth);
      if (image) image.removeEventListener('load', onLoad);
      if (video) video.removeEventListener('loadeddata', onLoad);
    };
  }, [ref]);

  return width;
}
