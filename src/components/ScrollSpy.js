import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {breakpoint} from 'utils';

/**
 * Invokes a callback as soon as the component is at
 * the right spot of the viewport.
 */
export default class ScrollSpy extends Component {
  static propTypes = {
    onReachedSpot: PropTypes.func.isRequired,
    animationViewportOffset: PropTypes.number // % of viewport height
  };

  static defaultProps = {
    animationViewportOffset: 0.4
  };

  componentDidMount() {
    window.addEventListener('scroll', this.onWindowScroll);
  }

  componentWillUnmount() {
    this.removeEventListener();
  }

  // May throttle this when there are performance issues.
  onWindowScroll = () => {
    let {animationViewportOffset, onReachedSpot} = this.props;

    let root = ReactDOM.findDOMNode(this);
    let offsetToViewportTop = root.getBoundingClientRect().top;

    if (offsetToViewportTop < breakpoint.height * (1 - animationViewportOffset)) {
      onReachedSpot();
      this.removeEventListener();
    }
  };

  removeEventListener() {
    window.removeEventListener('scroll', this.onWindowScroll);
  }

  render() {
    return <span />;
  }
}
