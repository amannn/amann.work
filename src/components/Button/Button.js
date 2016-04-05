import React, {Component, PropTypes} from 'react';
import {Icon} from 'components';
import {Link} from 'react-router';
import cx from 'classnames';
import styles from './Button.scss';

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    routerLink: PropTypes.string,
    className: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.string,
    target: PropTypes.string,
    iconProps: PropTypes.object
  };

  render() {
    let {
      className, children, routerLink, href, icon, target, iconProps
    } = this.props;

    if (process.env.NODE_ENV === 'development' && href && routerLink) {
      throw new Error(
        'It\'s not possible to use `href` and `routerLink` at the same time.'
      );
    }

    let element = !!href ? 'a' : Link;
    let content = (
      <span className={styles.wrapper}>
        {icon && (
          <span className={styles.icon}>
            <Icon name={icon} {...iconProps} />
          </span>
        )}
        {children}
      </span>
    );

    return React.createElement(element, {
      className: cx(styles.root, className),
      to: routerLink,
      target,
      href
    }, content);
  }
}
