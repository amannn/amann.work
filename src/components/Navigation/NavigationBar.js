import Link from 'next/link';
import Logo from 'components/Logo';
import Wrapper from 'components/Wrapper';
import styles from './NavigationBar.module.scss';
import NavigationMenuButton from './NavigationMenuButton';

export default function NavigationBar({isMenuOpen, onMenuOpenChange}) {
  return (
    <div className={styles.root}>
      <Wrapper>
        <div className={styles.navigation}>
          <Link href="/">
            <Logo />
          </Link>
          <div className={styles.menu}>
            <NavigationMenuButton
              className={styles.menuButton}
              isMenuOpen={isMenuOpen}
              onMenuOpenChange={onMenuOpenChange}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
