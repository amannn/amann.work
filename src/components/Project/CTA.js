import React from 'react';
import cx from 'classnames';
import Text from 'components/Text';
import styles from './CTA.module.scss';

export default function CTA({className, children, href, target = '_blank'}) {
  return (
    <a className={cx(styles.root, className)} href={href} target={target}>
      <span className={styles.arrow} />
      <Text
        className={styles.text}
        color="accent"
        component="span"
        variant="caption"
      >
        {children}
      </Text>
    </a>
  );
}