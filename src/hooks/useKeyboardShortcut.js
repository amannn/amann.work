import {useEffect} from 'react';

export default function useKeyboardShortcut({isActive, onKeyDown}) {
  useEffect(() => {
    if (!isActive) return;

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isActive, onKeyDown]);
}
