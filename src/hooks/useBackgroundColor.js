import {useContext, useEffect} from 'react';
import useConstant from 'use-constant';
import NavigationContext from 'components/Navigation/NavigationContext';

export default function useBackgroundColor(color) {
  const {backgroundColor, onBackgroundColorChange} = useContext(
    NavigationContext
  );
  const initialColor = useConstant(() => backgroundColor);

  useEffect(() => {
    onBackgroundColorChange(color);
    return () => onBackgroundColorChange(initialColor);
  }, [backgroundColor, color, initialColor, onBackgroundColorChange]);
}
