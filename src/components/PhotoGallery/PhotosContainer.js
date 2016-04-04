import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {breakpoint} from 'utils';
import {Spring, runAnimation} from 'utils/physics';
import {TouchUtils} from 'utils';
import styles from './PhotosContainer.scss';

/**
 * Takes care of all touch interactions and invokes `onChange` if there's
 * a change to the selected photo index. The change is immediately applied and
 * doesn't need the owner to permit the change.
 */
export default class PhotosContainer extends Component {
  static propTypes = {
    photos: PropTypes.array.isRequired,
    selected: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    overshootDamping: PropTypes.number,
    springConfig: PropTypes.object,
    animateIndividualPhotos: PropTypes.bool,
    swipeVelocityThreshold: PropTypes.number,
    indicateBoundaryVelocity: PropTypes.number
  };

  static defaultProps = {
    selected: 0,
    overshootDamping: 0.75,
    springConfig: {
      damping: 30,
      springConstant: 230
    },
    animateIndividualPhotos: true,
    swipeVelocityThreshold: 500, // px per second
    indicateBoundaryVelocity: 1000 // px per second
  };

  componentDidMount() {
    let {springConfig} = this.props;

    this.spring = new Spring(springConfig.springConstant, springConfig.damping);
    this.spring.snap(0);
    this.offset = 0;

    this.node = ReactDOM.findDOMNode(this);

    this.setup();
    this.update();

    window.addEventListener('resize', this.onWindowResize);
  }

  componentDidUpdate() {
    this.setup();
    this.update();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  onWindowResize = () => {
    this.setup();
    this.update();
  };

  onTouchStart = TouchUtils.decorateTouchStart(() => {
    if (this.animation) this.animation.cancel();
    this.startOffset = this.offset;
  });

  /**
   * Sets `this.offset` accordingly and invokes the update of the container.
   */
  onTouchMove = TouchUtils.decorateTouchMove(delta => {
    let {overshootDamping} = this.props;

    let dx = delta.x;

    // Adjust `dx` if there's an overshoot at the beginning or the end
    // of the container (the user tries to scroll past the boundaries).
    if (this.startOffset - delta.x < this.minOffset) {
      let overshoot = this.minOffset - this.startOffset - delta.x;
      dx = delta.x + overshoot * overshootDamping;
    } else if (this.startOffset - delta.x > this.maxOffset) {
      let overshoot = this.maxOffset - this.startOffset - delta.x;
      dx = delta.x + overshoot * overshootDamping;
    }

    this.offset = this.startOffset - dx;

    this.updateContainer();
  });

  onTouchEnd = TouchUtils.decorateTouchEnd((delta, velocity) => {
    let {swipeVelocityThreshold} = this.props;

    let viewportWidth = breakpoint.viewport.width;

    // Immediately set the spring to the position where the container got
    // dropped, so the animation can begin from there.
    this.spring.snap(this.offset);

    let passedThreshold = Math.abs(delta.x) > viewportWidth / 2
      || Math.abs(velocity.x) > swipeVelocityThreshold;

    if (passedThreshold) {
      // If the swipe was to the right, then pick the next lowest
      // image number and otherwise the next higher.
      let roundingFn = velocity.x > 0 ? Math.floor : Math.ceil;

      // Make sure the offset is within the boundaries.
      let offset = Math.max(
        Math.min(this.offset, this.maxOffset), this.minOffset
      );

      let nextPhotoIndex = roundingFn(offset / viewportWidth);
      this.update(nextPhotoIndex, -velocity.x);
    } else {
      this.update();
    }
  });

  setup() {
    let {photos} = this.props;

    this.minOffset = 0;
    this.maxOffset = (photos.length - 1) * breakpoint.viewport.width;

    this.photoNodes = this.node.querySelectorAll('.' + styles.photo);
  }

  indicateLowerBoundary() {
    let {indicateBoundaryVelocity} = this.props;
    this.update(undefined, this.spring.velocity() - indicateBoundaryVelocity);
  }

  indicateUpperBoundary() {
    let {indicateBoundaryVelocity} = this.props;
    this.update(undefined, this.spring.velocity() + indicateBoundaryVelocity);
  }

  /**
   * @param {number} [overrideCurrent] Can be provided to override
   * `this.props.selected`. This will furthermore result in a call to
   * `onChange` as soon as the animation is finished.
   * @param {number} [velocity]
   */
  update(overrideSelected, velocity) {
    let {selected} = this.props;
    let {onChange} = this.props;

    let actualCurrent = overrideSelected !== undefined
      ? overrideSelected
      : selected;

    let offset = actualCurrent * breakpoint.viewport.width;

    // If the spring is already animating to the desired offset, don't
    // interrupt the animation. This is important, because otherwise the
    // velocity would be lost.
    let dontInterrupt = this.spring.endValue() === offset && !velocity;
    if (dontInterrupt) return;

    this.spring.setEnd(offset, velocity);

    if (this.animation) this.animation.cancel();

    // Start animation loop
    this.animation = runAnimation(
      this.spring,

      () => { // onFrame
        this.offset = this.spring.x();
        this.updateContainer();
      },

      () => { // onFinish
        this.animation = undefined;
      }
    );

    // May notify owner about an override
    if (overrideSelected !== undefined && overrideSelected !== selected) {
      onChange(overrideSelected);
    }
  }

  updateContainer() {
    let {animateIndividualPhotos} = this.props;

    this.node.style.transform = `translateX(${-this.offset}px)`;

    if (animateIndividualPhotos) {
      let startIndex = Math.floor(this.offset / breakpoint.viewport.width);

      for (let i = startIndex; i < startIndex + 2; i++) {
        let photoNode = this.photoNodes[i];

        if (!photoNode) continue;

        let progress = (breakpoint.viewport.width * i - this.offset)
          / breakpoint.viewport.width;

        let maxOpacity = 1;
        let minOpacity = 0;
        let opacity = (1 - Math.abs(progress)) * (maxOpacity - minOpacity)
          + minOpacity;

        photoNode.style.opacity = opacity;
      }
    }
  }

  render() {
    let {photos} = this.props;

    return (
      <div
        className={styles.root}
        onTouchStart={this.onTouchStart}
        onTouchMove={this.onTouchMove}
        onTouchEnd={this.onTouchEnd}
        onMouseDown={this.onTouchStart}
        onMouseMove={this.onTouchMove}
        onMouseUp={this.onTouchEnd}
      >
        {photos.map(photo =>
          <div
            key={photo}
            className={styles.photo}
            style={{backgroundImage: `url(${photo})`}}
          />
        )}
      </div>
    );
  }
}
