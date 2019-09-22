import React from 'react';
import cs from './Link.module.scss';

export default function Link({children, href, target = '_blank'}) {
  return (
    <a className={cs.root} href={href} target={target}>
      {children}
    </a>
  );
}
