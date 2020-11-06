import cx from 'classnames';
import React from 'react';
import Wrapper from 'components/Wrapper';
import styles from './PageWrapper.module.scss';

export default function PageWrapper({children, className, slim}) {
  return (
    <Wrapper className={cx(className, styles.root)} slim={slim}>
      {children}
    </Wrapper>
  );
}
