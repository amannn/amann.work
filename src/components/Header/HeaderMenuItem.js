import React from 'react';
import cx from 'classnames';
import Text from 'components/Text';
import styles from './HeaderMenuItem.module.scss';

export default function HeaderMenuItem({
  children,
  color,
  component: Component = 'button',
  onClick
}) {
  function ConfiguredButton({className, ...other}) {
    return (
      <Component
        className={cx(styles.root, className)}
        onClick={onClick}
        {...other}
      >
        {children}
      </Component>
    );
  }

  return <Text color={color} component={ConfiguredButton} variant="label" />;
}
