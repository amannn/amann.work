import React, {Component, PropTypes} from 'react';
import cx from 'classnames';
import {ScrollSpy} from 'components';
import {Motion, spring} from 'react-motion';
import {breakpoint} from 'utils';
import styles from './ScreenStack.scss';

export default class ScreenStack extends Component {
  static propTypes = {
    screens: PropTypes.array.isRequired,
    enableClick: PropTypes.bool,
    springConfig: PropTypes.array,
  };

  static defaultProps = {
    enableClick: false,
    springConfig: [15, 6]
  };

  state = {rotate: false};

  onReachedSpot = () => {
    this.setState({rotate: true});
  };

  onClick = (e) => {
    e.preventDefault();
    let {enableClick} = this.props;
    let {rotate} = this.state;
    if (enableClick) this.setState({rotate: !rotate});
  };

  render() {
    let {screens, enableClick, springConfig} = this.props;
    let {rotate} = this.state;

    let rootStyle = {
      marginTop: ((screens.length + 1) * 48) + 'px'
    };

    let middle = Math.round(screens.length / 2);
    let screenWidth = 1 / screens.length * 100 + '%';

    let rootClassName = cx(styles.root, {
      [styles.root_clickable]: enableClick
    });

    return (
      <Motion style={{progress: spring(rotate ? 1 : 0, springConfig)}}>
        {interpolated =>
          <a href="#" className={rootClassName} style={rootStyle} onClick={this.onClick}>
            <ScrollSpy onReachedSpot={this.onReachedSpot} />
            {screens.map((url, i) => {
              let rotateX = interpolated.progress * 45;
              let rotateY = 0;
              let rotateZ = interpolated.progress * 45;
              let x = (1 - interpolated.progress) * ((i + 1 - middle) * 100);
              let y = 0;
              let z = interpolated.progress * ((screens.length - 1 - i) * 100);
              let scale = breakpoint.isWiderThan('small')
                ? 1
                : 1 + (interpolated.progress * 0.5);

              let screenStyle = {
                zIndex: screens.length - i,
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)` +
                  `translate3d(${x}px, ${y}px, ${z}px)` +
                  `scale(${scale})`,
                width: screenWidth,
                left: screenWidth
              };

              return (
                <img
                  key={url}
                  src={url}
                  style={screenStyle}
                  className={styles.screen}
                  role="presentation"
                />
              );
            })}
          </a>
        }
      </Motion>
    );
  }
}
