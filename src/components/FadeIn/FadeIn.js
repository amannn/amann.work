import React from 'react';
import {motion} from 'framer-motion';

export default function FadeIn({children, delay}) {
  return (
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      transition={{delay}}
    >
      {children}
    </motion.div>
  );
}
