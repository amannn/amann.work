import {motion} from 'framer-motion';
import React, {Children, useState} from 'react';
import Button from 'components/Button';
import Wrapper from 'components/Wrapper';
import useTranslations from 'hooks/useTranslations';
import styles from './Projects.module.scss';

export default function Projects({children, pageSize = 3}) {
  const t = useTranslations('Projects');
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
        <Wrapper>
          <Button color="accent" onClick={onShowMore}>
            {t('showMore')}
          </Button>
        </Wrapper>
      )}
    </>
  );
}
