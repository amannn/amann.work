import React, {Children, useState, cloneElement} from 'react';
import {motion} from 'framer-motion';
import Wrapper from 'components/Wrapper';

export default function Projects({children, pageSize = 3, showMoreButton}) {
  const [limit, setLimit] = useState(pageSize);
  const projects = Children.toArray(children);
  const paginatedNodes = projects.slice(0, limit);
  const hasMore = paginatedNodes.length < projects.length;

  function onShowMore() {
    setLimit(limit + pageSize);
  }

  return (
    <>
      {paginatedNodes.map((node, index) => (
        <motion.div
          key={index}
          animate={{
            opacity: 1,
            y: 0
          }}
          initial={{
            opacity: 0,
            y: 100
          }}
          transition={{duration: 0.5}}
        >
          {node}
        </motion.div>
      ))}
      {hasMore && (
        <Wrapper>{cloneElement(showMoreButton, {onClick: onShowMore})}</Wrapper>
      )}
    </>
  );
}
