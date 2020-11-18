import cx from 'classnames';
import Link from 'next/link';
import Logo from 'components/Logo';
import Text from 'components/Text';
import Wrapper from 'components/Wrapper';
import styles from './Header.module.scss';
import HeaderMenuButton from './HeaderMenuButton';

export default function Header({
  description = undefined,
  slim = false,
  hasBackground = true,
  showPortrait = false,
  subtitle = undefined,
  title
}) {
  return (
    <div
      className={cx(
        styles.root,
        showPortrait && styles.root_showPortrait,
        hasBackground && styles.root_background
      )}
    >
      <Wrapper innerClassName={styles.inner}>
        <div className={styles.navigation}>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <div className={styles.menu}>
            <HeaderMenuButton className={styles.menuButton} />
          </div>
        </div>
        {title && (
          <div className={cx(styles.text, slim && styles.text_slim)}>
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
