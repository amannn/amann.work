import React from 'react';
import cx from 'classnames';
import Text from './Text';
import styles from './MenuItem.module.scss';

export default function MenuItem({children, onClick, pale}) {
  function ConfiguredButton({className, ...other}) {
    const renderClassName = cx(styles.root, className, {
      [styles.root_pale]: pale
    });

    return (
      <button className={renderClassName} onClick={onClick} {...other}>
        {children}
      </button>
    );
  }

  return <Text component={ConfiguredButton} variant="label" />;
}
