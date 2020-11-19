import {useState} from 'react';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';

export default function useWindowSize() {
  const [size, setSize] = useState();

  useIsomorphicLayoutEffect(() => {
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
