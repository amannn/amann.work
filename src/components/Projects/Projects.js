import React, {Children, useState, cloneElement} from 'react';
import {motion} from 'framer-motion';
import Wrapper from 'components/Wrapper';
import styles from './Projects.module.scss';

export default function Projects({children, pageSize = 3, showMoreButton}) {
  const [limit, setLimit] = useState(pageSize);
  const projects = Children.toArray(children);
  const hasMore = limit < projects.length;

  function onShowMore() {
    setLimit(limit + pageSize);
  }

  return (
    <>
      {projects.map((node, index) => {
        // Invisible projects are pre-rendered so the images are already loaded.
        const isVisible = index < limit;

        return (
          <motion.div
            key={index}
            animate={isVisible ? {opacity: 1, y: 0} : undefined}
            className={isVisible ? undefined : styles.hidden}
            initial={{opacity: 0, y: 100}}
            transition={{duration: 0.5}}
          >
            {node}
          </motion.div>
        );
      })}
      {hasMore && (
        <Wrapper>{cloneElement(showMoreButton, {onClick: onShowMore})}</Wrapper>
      )}
    </>
  );
}
