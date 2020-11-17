import cx from 'classnames';
import Link from 'next/link';
import {useRouter} from 'next/router';
import Logo from 'components/Logo';
import Text from 'components/Text';
import Wrapper from 'components/Wrapper';
import useTranslations from 'hooks/useTranslations';
import styles from './Header.module.scss';
import HeaderMenuItem from './HeaderMenuItem';

export default function Header({
  description = undefined,
  slim = false,
  hasBackground = true,
  showPortrait = false,
  subtitle = undefined,
  title
}) {
  const t = useTranslations('Header');
  const router = useRouter();
  const otherLocale = router.locales.find((cur) => cur !== router.locale);

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
            <HeaderMenuItem href="/work">{t('work')}</HeaderMenuItem>
            <HeaderMenuItem href="/blog">{t('blog')}</HeaderMenuItem>
            <HeaderMenuItem href="/open-source">
              {t('openSource')}
            </HeaderMenuItem>
            <HeaderMenuItem href="#contact">{t('contact')}</HeaderMenuItem>
            <HeaderMenuItem
              color="pale"
              detectActive={false}
              href="/"
              locale={otherLocale}
            >
              {otherLocale.toUpperCase()}
            </HeaderMenuItem>
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
