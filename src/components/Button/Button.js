/* eslint-disable css-modules/no-unused-class */
import cx from 'classnames';
import React, {forwardRef} from 'react';
import Text from 'components/Text';
import styles from './Button.module.scss';

function Button(
  {
    children,
    className = undefined,
    color = 'white',
    component: Component = 'button',
    onClick,
    ...rest
  },
  ref
) {
  return (
    <Component
      ref={ref}
      className={cx(styles.root, className, styles['root_color-' + color])}
      onClick={onClick}
      {...rest}
    >
      <Text
        className={styles.text}
        color={color === 'white' ? 'accent' : 'white'}
        component="span"
        variant="caption"
      >
        {children}
      </Text>
    </Component>
  );
}

export default forwardRef(Button);
