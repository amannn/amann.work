import {useLayoutEffect, useState} from 'react';

export default function useWindowSize() {
  const [size, setSize] = useState();

  useLayoutEffect(() => {
    function onResize() {
      setSize({
        innerHeight: window.visualViewport
          ? window.visualViewport.height
          : window.innerHeight,
        innerWidth: window.visualViewport
          ? window.visualViewport.width
          : window.innerWidth
      });
    }

    onResize();

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return size;
}
