import {useLayoutEffect, useState} from 'react';

export default function useWindowSize() {
  const [size, setSize] = useState();

  useLayoutEffect(() => {
    function onResize() {
      setSize({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth
      });
    }

    onResize();

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return size;
}
