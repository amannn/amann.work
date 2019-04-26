import React from 'react';
import cx from 'classnames';
import Wrapper from 'components/Wrapper';
import Text from 'components/Text';
import styles from './Project.module.scss';

export default function Project({children, cta, visual, intro, title, style}) {
  return (
    <div className={styles.root}>
      <div className={styles.background} style={style} />
      <Wrapper className={styles.wrapper}>
        <div className={styles.visualWrapper}>
          {React.cloneElement(visual, {className: styles.visual})}
        </div>
        <div className={styles.text}>
          <Text color="accent" variant="label">
            {intro}
          </Text>
          <Text marginBottom variant="h2">
            {title}
          </Text>
          {children}
          {React.cloneElement(cta, {
            className: cx(styles.cta, cta.props.className)
          })}
        </div>
      </Wrapper>
    </div>
  );
}
