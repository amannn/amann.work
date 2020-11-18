import {motion} from 'framer-motion';
import React from 'react';
import useSsr from 'hooks/useSsr';

export default function FadeIn({children, delay}) {
  const isSsr = useSsr();

  return (
    <motion.div
      animate="visible"
      inherit={false}
      initial={isSsr ? 'visible' : 'hidden'}
      transition={{delay}}
      variants={{
        hidden: {
          opacity: 0,
          y: 8
        },
        visible: {
          opacity: 1,
          y: 0
        }
      }}
    >
      {children}
    </motion.div>
  );
}
