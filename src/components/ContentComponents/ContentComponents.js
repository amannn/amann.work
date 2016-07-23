/* eslint-disable react/no-multi-comp */

import React, {PropTypes} from 'react';
import cx from 'classnames';
import {Link} from 'react-router';
import styles from './ContentComponents.scss';

export const H1 = ({children}) => <h1 className={styles.h1}>{children}</h1>;
H1.propTypes = {children: PropTypes.node};

export const H2 = ({children}) => <h2 className={styles.h2}>{children}</h2>;
H2.propTypes = {children: PropTypes.node};

export const P = ({children, small}) => (
  <p className={cx(styles.p, {[styles.p_small]: small})}>
    {children}
  </p>
);
P.propTypes = {
  children: PropTypes.node,
  small: PropTypes.bool
};

export const UL = ({children}) => <ul className={styles.ul}>{children}</ul>;
UL.propTypes = {children: PropTypes.node};

export const LI = ({children}) => <li className={styles.li}>{children}</li>;
LI.propTypes = {children: PropTypes.node};

export const Blockquote = ({children}) => (
  <blockquote className={styles.blockquote}>{children}</blockquote>
);
Blockquote.propTypes = {children: PropTypes.node};

export const I = ({children}) => <i className={styles.i}>{children}</i>;
I.propTypes = {children: PropTypes.node};

export const B = ({children}) => <strong className={styles.b}>{children}</strong>;
B.propTypes = {children: PropTypes.node};

export const Code = ({children}) => <code className={styles.code}>{children}</code>;
Code.propTypes = {children: PropTypes.node};

export const HR = () => <hr className={styles.hr} />;

export const Img = ({src, children, width, oversized, undersized}) => (
  <div className={cx(styles.imgWrapper, {
    [styles.imgWrapper_oversized]: oversized,
    [styles.imgWrapper_undersized]: undersized
  })}>
    <img className={styles.img} role="presentation" src={src} width={width} />
    <p className={styles.imgText}>{children}</p>
  </div>
);
Img.propTypes = {
  src: PropTypes.string,
  children: PropTypes.node,
  width: PropTypes.string,
  oversized: PropTypes.bool,
  undersized: PropTypes.bool
};

export const A = ({className, href, routerLink, children, target}) =>
  React.createElement(routerLink ? Link : 'a', {
    href,
    to: routerLink,
    target: !routerLink && (target === '_blank' || href.startsWith('http'))
      ? '_blank'
      : undefined,
    className: cx(styles.a, className),
  }, children);
A.propTypes = {
  href: PropTypes.string,
  routerLink: PropTypes.string,
  children: PropTypes.node.isRequired,
  target: PropTypes.string,
  className: PropTypes.string
};

export {default as ScreenStack} from './ScreenStack';
export {default as Video} from './Video';
