import React from 'react';
import Text from 'components/Text';
import Wrapper from 'components/Wrapper';
import styles from './Section.module.scss';
import SectionTitle from './SectionTitle';

export default function Section({children, description, title}) {
  return (
    <div className={styles.root}>
      <Wrapper>
        <SectionTitle>{title}</SectionTitle>
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
