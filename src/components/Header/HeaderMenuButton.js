import cx from 'classnames';
import {motion, useAnimation} from 'framer-motion';
import {useContext, useRef} from 'react';
import useUpdateEffect from 'use-update-effect';
import styles from './HeaderMenuButton.module.scss';
import HeaderMenuContext from './HeaderMenuContext';

export default function HeaderMenuButton({className}) {
  const {isMenuOpen, onMenuOpenChange} = useContext(HeaderMenuContext);
  const nodeRef = useRef();
  const controls = useAnimation();

  const transition = {
    damping: 20,
    stiffness: 80
  };

  useUpdateEffect(() => {
    let isCanceled = false;

    async function animate() {
      if (isMenuOpen) {
        await controls.start('collapsed');
        if (isCanceled) return;
        await controls.start('open');
      } else {
        await controls.start('collapsed');
        if (isCanceled) return;
        await controls.start('closed');
      }
    }

    animate();
    return () => {
      isCanceled = true;
    };
  }, [controls, isMenuOpen]);

  function onClick() {
    onMenuOpenChange(!isMenuOpen);
  }

  return (
    <motion.button
      ref={nodeRef}
      className={cx(className, styles.root)}
      onClick={onClick}
      type="button"
      whileTap={{backgroundColor: 'rgba(0, 0, 0, 0.1)'}}
    >
      <motion.span
        animate={controls}
        inherit={false}
        initial="closed"
        transition={transition}
        variants={{
          closed: {
            y: -8,
            rotate: 0
          },
          collapsed: {
            y: 0,
            rotate: 0
          },
          open: {
            y: 0,
            rotate: -135
          }
        }}
      />
      <motion.span
        animate={controls}
        inherit={false}
        initial="closed"
        transition={transition}
        variants={{
          closed: {
            opacity: 1
          },
          collapsed: {
            opacity: 0
          },
          open: {
            opacity: 0
          }
        }}
      />
      <motion.span
        animate={controls}
        inherit={false}
        initial="closed"
        transition={transition}
        variants={{
          closed: {
            y: 8,
            rotate: 0
          },
          collapsed: {
            y: 0,
            rotate: 0
          },
          open: {
            y: 0,
            rotate: -225
          }
        }}
      />
    </motion.button>
  );
}
