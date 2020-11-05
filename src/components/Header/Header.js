import cx from 'classnames';
import Link from 'next/link';
import Logo from 'components/Logo';
import Text from 'components/Text';
import Wrapper from 'components/Wrapper';
import styles from './Header.module.scss';

export default function Header({
  description,
  menu,
  showPortrait = false,
  subtitle,
  title
}) {
  return (
    <div
      className={cx(styles.root, {[styles.root_showPortrait]: showPortrait})}
    >
      <Wrapper innerClassName={styles.inner}>
        <div className={styles.navigation}>
          <Link href="/">
            <a>
              <Logo />
            </a>
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
        {showPortrait && <div className={styles.portrait} />}
      </Wrapper>
    </div>
  );
}
