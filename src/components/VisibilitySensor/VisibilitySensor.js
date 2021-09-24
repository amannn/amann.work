import React, {createRef, useEffect, useState} from 'react';

export default function VisibilitySensor({
  children,
  onInvisible,
  onVisible,
  onVisibleChange,
  once,
  threshold = [0, 1] // Fully visible or invisible
}) {
  const [isVisible, setIsVisible] = useState(false);
  const rootRef = createRef();

  useEffect(() => {
    const node = rootRef.current;

    function onIntersectionChange(records) {
      records.forEach((record) => {
        if (record.intersectionRatio > 0) {
          if (onVisibleChange) onVisibleChange(true);
          if (onVisible) onVisible();
          setIsVisible(true);
        } else {
          if (onVisibleChange) onVisibleChange(false);
          if (onInvisible) onInvisible();
          if (!once) setIsVisible(false);
        }
      });
    }

    const observer = new IntersectionObserver(onIntersectionChange, {
      threshold
    });
    observer.observe(node);

    return () => observer.unobserve(node);
  }, [onInvisible, onVisible, onVisibleChange, once, rootRef, threshold]);

  return <span ref={rootRef}>{children && children(isVisible)}</span>;
}
