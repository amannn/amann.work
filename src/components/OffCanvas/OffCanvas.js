import cx from 'classnames';
import {motion} from 'framer-motion';
import {useState} from 'react';
import {HeaderMenuContext} from 'components/Header';
import useBreakpoint, {breakpoints} from 'hooks/useBreakpoint';
import styles from './OffCanvas.module.scss';
import OffCanvasMenu from './OffCanvasMenu';

export default function OffCanvas({children}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const breakpoint = useBreakpoint();

  const transition = {
    type: 'spring',
    damping: 20,
    stiffness: breakpoint === breakpoints.small ? 100 : 80
  };

  return (
    <div className={cx(styles.root, isMenuOpen && styles.root_open)}>
      <OffCanvasMenu
        className={styles.menu}
        isVisible={isMenuOpen}
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
        <HeaderMenuContext.Provider
          value={{isMenuOpen, onMenuOpenChange: setIsMenuOpen, transition}}
        >
          {children}
        </HeaderMenuContext.Provider>
      </motion.div>
    </div>
  );
}
