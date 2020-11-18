/* eslint-disable css-modules/no-unused-class */
import useEventListener from '@use-it/event-listener';
import cx from 'classnames';
import {motion} from 'framer-motion';
import {useState} from 'react';
import useBreakpoint, {breakpoints} from 'hooks/useBreakpoint';
import styles from './Navigation.module.scss';
import NavigationBar from './NavigationBar';
import NavigationContext from './NavigationContext';
import NavigationMenu from './NavigationMenu';

export default function Navigation({children}) {
  const [backgroundColor, setBackgroundColor] = useState('default');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const breakpoint = useBreakpoint();

  const transition = {
    type: 'spring',
    damping: 20,
    stiffness: breakpoint === breakpoints.small ? 100 : 80
  };

  function onClose() {
    setIsMenuOpen(false);
  }

  useEventListener('scroll', () => {
    if (!isMenuOpen) return;
    setIsMenuOpen(false);
  });

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
        animate={isMenuOpen ? 'open' : 'closed'}
        className={styles.children}
        initial="closed"
        variants={{
          closed: {
            x: 0,
            transition
          },
          open: {
            x: breakpoint === breakpoints.small ? 'calc(-100% + 72px)' : -400,
            transition: {
              ...transition,
              delay: 0.3
            }
          }
        }}
      >
        <NavigationBar
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
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
