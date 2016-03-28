import React, {Component, PropTypes} from 'react';
import cx from 'classnames';
import styles from './PageContent.scss';

export default class PageContent extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    fullWidth: PropTypes.bool
  };

  static defaultProps = {
    fullWidth: false
  };

  render() {
    let {className, children, fullWidth} = this.props;

    let actualClassName = cx(styles.root, className, {
      [styles.root_fullWidth]: fullWidth
    });

    return <div className={actualClassName}>{children}</div>;
  }
}
