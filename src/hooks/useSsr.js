import {createContext, useContext} from 'react';

export const IsSsrContext = createContext();

export default function useSsr() {
  return useContext(IsSsrContext);
}
