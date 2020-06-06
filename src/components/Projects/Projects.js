import React, {Children, useState, cloneElement} from 'react';
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
      {paginatedNodes}
      {hasMore && (
        <Wrapper>{cloneElement(showMoreButton, {onClick: onShowMore})}</Wrapper>
      )}
    </>
  );
}
