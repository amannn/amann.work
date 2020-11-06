import React, {createRef, useEffect} from 'react';

export default function VisibilitySensor({
  onInvisible,
  onVisible,
  onVisibleChange
}) {
  const rootRef = createRef();

  useEffect(() => {
    const node = rootRef.current;

    function onIntersectionChange(records) {
      records.forEach((record) => {
        if (record.intersectionRatio > 0) {
          if (onVisibleChange) onVisibleChange(true);
          if (onVisible) onVisible();
        } else {
          if (onVisibleChange) onVisibleChange(false);
          if (onInvisible) onInvisible();
        }
      });
    }

    const observer = new IntersectionObserver(onIntersectionChange, {
      threshold: [0, 1] // Fully visible or invisible
    });
    observer.observe(node);

    return () => observer.unobserve(node);
  }, [onInvisible, onVisible, onVisibleChange, rootRef]);

  return <span ref={rootRef} />;
}
