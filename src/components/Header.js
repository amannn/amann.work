import React from 'react';
import ContentWrapper from './ContentWrapper';
import Logo from './Logo';
import Text from './Text';
import styles from './Header.module.scss';

export default function Header({menuItems, title, subtitle, description}) {
  return (
    <div className={styles.root}>
      <ContentWrapper>
        <div className={styles.navigation}>
          <Logo />
          <div className={styles.menuItemsWrapper}>
            <div className={styles.menuItems}>{menuItems}</div>
          </div>
        </div>
        <div className={styles.text}>
          <Text className={styles.title} component="h1" variant="h1">
            {title}
          </Text>
          <Text
            className={styles.subtitle}
            color="accent"
            component="h2"
            variant="h2"
          >
            {subtitle}
          </Text>
          <Text>{description}</Text>
        </div>
      </ContentWrapper>
    </div>
  );
}
