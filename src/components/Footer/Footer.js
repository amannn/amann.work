import React from 'react';
import cx from 'classnames';
import Wrapper from 'components/Wrapper';
import styles from './Footer.module.scss';

export default function Footer({children, className, menu, social}) {
  return (
    <div className={cx(styles.root, className)}>
      <Wrapper>
        {children}
        <div className={styles.navigation}>
          <div>{menu}</div>
          <div>{social}</div>
        </div>
      </Wrapper>
    </div>
  );
}
