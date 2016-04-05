import React, {PropTypes, Component} from 'react';
import cx from 'classnames';
import styles from './MenuIcon.scss';

export default class MenuIcon extends Component {
  static propTypes = {
    open: PropTypes.number,
    inverted: PropTypes.bool
  };

  static defaultProps = {
    inverted: false
  };

  render() {
    let {open, inverted} = this.props;

    let bar1Y = { start: 5, end: 11 };
    let bar2Y = { start: 17, end: 11 };

    let rootClassName = cx(styles.root, {
      [styles.root_inverted]: inverted
    });

    let bar1Style = {
      transform: `translateY(${ (bar1Y.end - bar1Y.start)
        * open + bar1Y.start }px)` + `rotate(${open * 45}deg)`
    };

    let bar2Style = {
      transform: `translateY(${ (bar2Y.end - bar2Y.start)
        * open + bar2Y.start }px)` + `rotate(-${open * 45}deg)`
    };

    return (
      <div className={rootClassName}>
        <div className={styles.bar1} style={bar1Style} />
        <div className={styles.bar2} style={{opacity: 1 - open}} />
        <div className={styles.bar3} style={bar2Style} />
      </div>
    );
  }
}
