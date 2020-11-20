import {createContext, useContext} from 'react';

export const IsSsrContext = createContext();

let hasMounted = false;
if (typeof window !== 'undefined') {
  setTimeout(() => {
    hasMounted = true;
  }, 2000);
}

export default function useSsr() {
  const isSsrContext = useContext(IsSsrContext);
  return hasMounted ? false : isSsrContext;
}
