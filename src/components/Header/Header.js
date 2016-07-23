import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';
import {Motion, spring} from 'react-motion';
import cx from 'classnames';
import {breakpoint} from 'utils';
import {IconButton, MenuIcon} from 'components';
import styles from './Header.scss';


/**
 * Possible options for `background`:
 *
 * let bg1 = {
 *   type: 'color',
 *   color: 'rgb(97,115,128)'
 * };
 * let bg2 = {
 *   type: 'image',
 *   url: require('./images/bg.svg'),
 *   blends: ['linear-gradient(-90deg, green 0%, blue 100%)']
 * }
 */
export default class Header extends Component {
  static propTypes = {
    menu: PropTypes.array.isRequired,
    background: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    mini: PropTypes.bool,
    feature: PropTypes.object,
    animateText: PropTypes.bool, // For > medium viewports, below is always animated.
    springConfig: PropTypes.object,
    animationOffsetText: PropTypes.object
  };

  static defaultProps = {
    animateText: false,
    background: {
      type: 'image',
      url: require('./images/bg.svg'),
      blends: [
        // If a gradient is in the background stack, only other gradients or
        // images can be added. Regular colors like '#123456' are ignored.
        'linear-gradient(-90deg, hsla(212, 51%, 26%, 1) 0%, hsla(164, 27%, 19%, 1) 100%)',
      ]
    },
    springConfig: {
      stiffness: 150,
      damping: 17
    },
    animationOffsetText: { // Differs per viewport
      small: 107,
      medium: 24
    }
  };

  state = {isMenuOpen: false};

  onMenuButtonClick = () => {
    this.setState({isMenuOpen: !this.state.isMenuOpen});
  };

  renderFeature() {
    let {feature, title} = this.props;
    if (!feature) return null;

    switch (feature.type) {
      case 'image':
        return (
          <img
            className={cx(styles.img, feature.className)}
            style={feature.style}
            src={feature.url}
            alt={title}
          />
        );
      case 'custom':
        return feature.content;
    }

    return null;
  }

  renderMenuItems(interpolated) {
    let {menu} = this.props;

    return menu.map((item, i) => {
      let start = i / menu.length;
      let end = (i + 1) / menu.length;
      let min = 0;
      let max = 1;
      let cur = Math.max(Math.min(
        (interpolated.y - start) / (end - start),
        max), min);
      return (
        <li
          key={item.url}
          style={{opacity: cur, transform: `translateY(${-8 * (1 - cur)}px)`}}
        >
          <Link className={styles.menuItem} to={item.url}>{item.name}</Link>
        </li>
      );
    });
  }

  renderText(interpolated) {
    let {title, description, animateText, animationOffsetText} = this.props;

    let translateY;
    if (breakpoint.isWiderThan('medium')) {
      translateY = animateText
        ? animationOffsetText.medium * interpolated.y
        : 0;
    } else {
      translateY = animationOffsetText.small * interpolated.y;
    }

    let style = {
      transform: `translateY(${translateY}px)`,
      opacity: animateText ? Math.max(1 - interpolated.y, 0.75) : 1
    };

    return (
      <div className={styles.text} style={style}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        {this.renderFeature()}
      </div>
    );
  }

  render() {
    let bgStyle;
    let {background, mini, springConfig, animateText} = this.props;

    // Assign bgStyle
    if (background) {
      let bg = '';

      switch (background.type) {
        case 'image': {
          let bgs = [`url(${background.url})`];
          if (background.blends) bgs.push(background.blends);
          bg = bgs.join(',');
        }

        // background-size needs to be set here so it isn't
        // overridden by the generic background property.
          bgStyle = {
            background: bg,
            backgroundSize: 'cover'
          };
          break;
        case 'color':
          bgStyle = {backgroundColor: background.color};
          break;
        default:
          throw new Error('Unkown background type.');
      }
    }

    let isInverted = !background;

    let headerClassName = cx(styles.root, {
      [styles.root_mini]: mini,
      [styles.root_inverted]: isInverted,
      [styles.root_animateText]: animateText
    });

    return (
      <Motion
        style={{y: spring(this.state.isMenuOpen ? 1 : 0, springConfig)}}
      >
        {interpolated =>
          <header className={headerClassName}>
            <div
              className={cx(styles.bg, {
                [styles.bg_blur]: background && background.blur
              })}
              style={bgStyle}
            />
            <div className={styles.wrapper}>
              <Link to="/" className={styles.logo}>
                Home
              </Link>
              <IconButton
                onClick={this.onMenuButtonClick}
                className={styles.menuIcon}
              >
                <MenuIcon open={interpolated.y} inverted={isInverted} />
              </IconButton>

              <nav>
                <ul className={cx(styles.menu,
                    {[styles.menu_open]: this.state.isMenuOpen})}>
                    {this.renderMenuItems(interpolated)}
                </ul>
              </nav>
              <hr
                className={styles.hr}
                style={{transform: `translateY(${136 * (interpolated.y)}px)`}}
              />

              {this.renderText(interpolated)}
            </div>
          </header>
        }

      </Motion>
    );
  }
}
