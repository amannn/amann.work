import cx from 'classnames';
import React from 'react';
import Text from 'components/Text';
import Wrapper from 'components/Wrapper';
import styles from './Project.module.scss';

export default function Project({
  children,
  cta,
  id,
  intro,
  testimonial,
  title,
  visual
}) {
  return (
    <div className={styles.root}>
      {id && <div className={styles.anchor} id={id} />}
      <div className={styles.outer}>
        <div className={styles.inner}>
          <div className={styles.background} />
          <div className={styles.visual}>{visual}</div>
          <div className={styles.text}>
            <Text color="accent" variant="label">
              {intro}
            </Text>
            <Text component="h3" marginBottom variant="h2">
              {title}
            </Text>
            {children}
            {cta &&
              React.cloneElement(cta, {
                className: cx(styles.cta, cta.props.className)
              })}
          </div>
        </div>
      </div>
      {testimonial && (
        <Wrapper>
          <div className={styles.testimonial}>
            {testimonial}
            <span className={styles.testimonalLineAfter} />
          </div>
        </Wrapper>
      )}
    </div>
  );
}
