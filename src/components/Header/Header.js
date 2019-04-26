import React from 'react';
import cx from 'classnames';
import {Link} from 'gatsby';
import Wrapper from 'components/Wrapper';
import Logo from 'components/Logo';
import Text from 'components/Text';
import styles from './Header.module.scss';

export default function Header({
  description,
  homeLink,
  menu,
  showPortrait = false,
  subtitle,
  title
}) {
  return (
    <div
      className={cx(styles.root, {[styles.root_showPortrait]: showPortrait})}
    >
      <Wrapper>
        <div className={styles.navigation}>
          <Link to={homeLink}>
            <Logo />
          </Link>
          <div className={styles.menu}>{menu}</div>
        </div>
        {title && (
          <div className={styles.text}>
            <Text className={styles.title} component="h1" variant="h1">
              {title}
            </Text>
            <Text
              className={styles.subtitle}
              color="accent"
              component="h2"
              variant="h3"
            >
              {subtitle}
            </Text>
            <Text>{description}</Text>
          </div>
        )}
      </Wrapper>
    </div>
  );
}
