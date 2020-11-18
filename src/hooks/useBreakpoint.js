/* eslint-disable css-modules/no-undef-class */
import useBaseBreakpoint from 'use-breakpoint';
import styles from 'styles/media-queries.module.scss';

const breakpointsByName = {
  small: 0,
  medium: parseInt(styles.breakpointMedium),
  large: parseInt(styles.breakpointLarge),
  huge: parseInt(styles.breakpointHuge)
};

export const breakpoints = Object.keys(breakpointsByName).reduce(
  (acc, cur, index) => {
    acc[cur] = index;
    return acc;
  },
  {}
);

export default function useBreakpoint() {
  return breakpoints[useBaseBreakpoint(breakpointsByName)?.breakpoint];
}
