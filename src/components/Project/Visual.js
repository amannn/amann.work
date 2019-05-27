/* eslint-disable css-modules/no-unused-class */
import React from 'react';
import cx from 'classnames';
import styles from './Visual.module.scss';

export default function Visual({className, children, layout}) {
  return (
    <div
      className={cx(styles.root, className, styles['root_layout-' + layout])}
    >
      {children}
    </div>
  );
}
