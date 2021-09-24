import {useTransform, useViewportScroll} from 'framer-motion';
import {useEffect, useRef, useState} from 'react';
import DomUtils from 'utils/DomUtils';

export default function ViewportScroll({children, className, output}) {
  const [input, setInput] = useState(output);
  const nodeRef = useRef();
  const {scrollY} = useViewportScroll();
  const value = useTransform(scrollY, input, output);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;
    const {top} = DomUtils.getAccumulatedOffset(node);
    setInput([top - window.innerHeight, top + node.offsetHeight]);
  }, []);

  return (
    <div ref={nodeRef} className={className}>
      {children(value)}
    </div>
  );
}
