import React from 'react';
import Button from 'components/Button';
import styles from './ProjectLink.module.scss';

export default function ProjectLink({
  children,
  href,
  target = '_blank',
  ...rest
}) {
  function Link(props) {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a href={href} rel="noopener noreferrer" target={target} {...props} />
    );
  }

  return (
    <Button component={Link} {...rest}>
      <span className={styles.arrow} />
      {children}
    </Button>
  );
}
