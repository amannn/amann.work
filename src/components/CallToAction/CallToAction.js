import React, {forwardRef} from 'react';
import Button from 'components/Button';
import styles from './CallToAction.module.scss';

function CallToAction({children, href, target, ...rest}, ref) {
  function Link(props) {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a
        ref={ref}
        href={href}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        target={target}
        {...props}
      />
    );
  }

  return (
    <Button component={Link} {...rest}>
      <span className={styles.arrow} />
      {children}
    </Button>
  );
}

export default forwardRef(CallToAction);
