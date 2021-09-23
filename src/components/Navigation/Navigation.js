/* eslint-disable css-modules/no-unused-class */
import useEventListener from '@use-it/event-listener';
import cx from 'classnames';
import {motion} from 'framer-motion';
import {useRef, useState} from 'react';
import useBreakpoint, {breakpoints} from 'hooks/useBreakpoint';
import styles from './Navigation.module.scss';
import NavigationBar from './NavigationBar';
import NavigationContext from './NavigationContext';
import NavigationMenu from './NavigationMenu';

export default function Navigation({children, isMenuOpen, onMenuOpenChange}) {
  const [backgroundColor, setBackgroundColor] = useState('default');
  const breakpoint = useBreakpoint();
  const childrenNodeRef = useRef();

  const transition = {
    type: 'spring',
    damping: 20,
    stiffness: 80
  };

  function onClose() {
    onMenuOpenChange(false);
  }

  useEventListener('scroll', () => {
    if (!isMenuOpen) return;
    onMenuOpenChange(false);
  });

  function onAnimationStart() {
    childrenNodeRef.current.style.willChange = 'transform';
  }

  function onAnimationComplete() {
    childrenNodeRef.current.style.willChange = '';
  }

  return (
    <div
      className={cx(
        styles.root,
        isMenuOpen && styles.root_open,
        styles['root_background-' + backgroundColor]
      )}
    >
      <NavigationMenu
        className={styles.menu}
        isVisible={isMenuOpen}
        onClose={onClose}
        transition={transition}
      />
      <motion.div
        ref={childrenNodeRef}
        animate={isMenuOpen ? 'open' : 'closed'}
        className={styles.children}
        initial="closed"
        onAnimationComplete={onAnimationComplete}
        onAnimationStart={onAnimationStart}
        variants={{
          closed: {
            x: 0,
            transition
          },
          open: {
            x: breakpoint === breakpoints.small ? 'calc(-100% + 72px)' : -400,
            transition: {
              ...transition,
              delay: 0.4
            }
          }
        }}
      >
        <NavigationBar
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={onMenuOpenChange}
        />
        <NavigationContext.Provider
          value={{onBackgroundColorChange: setBackgroundColor, backgroundColor}}
        >
          {children}
        </NavigationContext.Provider>
      </motion.div>
    </div>
  );
}
