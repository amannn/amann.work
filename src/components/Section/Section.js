import cx from 'classnames';
import React from 'react';
import Text from 'components/Text';
import Wrapper from 'components/Wrapper';
import styles from './Section.module.scss';
import SectionTitle from './SectionTitle';

export default function Section({children, className, description, title}) {
  return (
    <div
      className={cx(
        className,
        styles.root,
        (title || description) && styles.root_intro
      )}
    >
      <Wrapper>
        {title && <SectionTitle>{title}</SectionTitle>}
        {description && (
          <Text className={styles.description} variant="h3">
            {description}
          </Text>
        )}
      </Wrapper>
      <div className={styles.children}>{children}</div>
    </div>
  );
}
