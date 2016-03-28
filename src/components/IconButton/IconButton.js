import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';
import cx from 'classnames';
import {ReactUtils} from 'utils';
import Icon from 'components/Icon.js';
import styles from './IconButton.scss';

export default class IconButton extends Component {

  static propTypes = {
    className: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.string,
    routerLink: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    target: PropTypes.string,
    children: PropTypes.node
  };

  static defaultProps = {
    href: '#'
  };

  shouldComponentUpdate(nextProps) {
    let should = !ReactUtils.arePropsEqual(nextProps, this.props);
    return should;
  }

  onClick = (e) => {
    e.preventDefault();
    let {onClick} = this.props;
    if (onClick) onClick();
  };

  /**
   * Either creates a <Link /> or an <a /> tag depending on props.
   */
  render() {
    let {className, children, icon, target, href, routerLink, disabled, onClick} = this.props;

    let props = {
      href: href || '#',
      target,
      className: cx(styles.root, className, {[styles.root_disabled]: disabled}),
      to: routerLink,
      onClick: !disabled && onClick && this.onClick
    };

    let actualChildren = icon
      ? <Icon name={icon} />
      : children;

    return React.createElement(routerLink ? Link : 'a', props, actualChildren);
  }

}
