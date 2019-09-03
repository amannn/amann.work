import React from 'react';
import cx from 'classnames';
import Text from 'components/Text';
import styles from './HeaderMenuItem.module.scss';

export default function HeaderMenuItem({
  children,
  color,
  component = 'button',
  onClick
}) {
  function ConfiguredButton({className, ...other}) {
    const renderClassName = cx(styles.root, className);

    return React.createElement(
      component,
      {
        className: renderClassName,
        onClick,
        ...other
      },
      children
    );
  }

  return <Text color={color} component={ConfiguredButton} variant="label" />;
}
