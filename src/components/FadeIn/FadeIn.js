import cx from 'classnames';
import React, {useEffect, useState} from 'react';
import styles from './FadeIn.module.scss';

export default function FadeIn({
  children,
  delay,
  duration = 0.3,
  isVisible: controlledIsVisible,
  offset = 8
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (controlledIsVisible != null) setIsVisible(controlledIsVisible);
    else setIsVisible(true);
  }, [controlledIsVisible]);

  return (
    <div
      className={cx(styles.root, isVisible && styles.root_visible)}
      style={{
        transform: `translateY(${offset}px)`,
        transitionDelay: `${delay}s`,
        transitionDuration: `${duration}s`
      }}
    >
      {children}
    </div>
  );
}
