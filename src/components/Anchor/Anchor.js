import React, {forwardRef} from 'react';
import styles from './Anchor.module.scss';

function Anchor(
  {children, href, rel = 'noopener noreferrer', target = '_blank', ...rest},
  ref
) {
  return (
    <a
      ref={ref}
      className={styles.root}
      href={href}
      rel={rel}
      target={target}
      {...rest}
    >
      {children}
    </a>
  );
}

export default forwardRef(Anchor);
