import cx from 'classnames';
import {motion} from 'framer-motion';
import {useTranslations} from 'next-intl';
import {useRouter} from 'next/router';
import {cloneElement} from 'react';
import styles from './NavigationMenu.module.scss';
import NavigationMenuItem from './NavigationMenuItem';

export default function NavigationMenu({
  className,
  isVisible,
  onClose,
  transition
}) {
  const t = useTranslations('NavigationMenu');
  const router = useRouter();
  const otherLocale = router.locales.find((cur) => cur !== router.locale);
  const initialDelay = 0.4;

  return (
    <motion.div
      animate={isVisible ? 'visible' : 'hidden'}
      className={cx(className, styles.root)}
      initial="hidden"
    >
      {[
        // Attach the current locale, otherwise a reload is triggered on Vercel.
        <NavigationMenuItem key="home" href="/">
          {t('home')}
        </NavigationMenuItem>,
        <NavigationMenuItem key="work" href="/work">
          {t('work')}
        </NavigationMenuItem>,
        <NavigationMenuItem key="blog" href="/blog">
          {t('blog')}
        </NavigationMenuItem>,
        <NavigationMenuItem key="open-source" href="/open-source">
          {t('openSource')}
        </NavigationMenuItem>,
        <NavigationMenuItem key="contact" href="#contact">
          {t('contact')}
        </NavigationMenuItem>,
        <NavigationMenuItem
          key="language"
          className={styles.language}
          color="paleInverted"
          detectActive={false}
          href={router.route}
          locale={otherLocale}
          variant="label"
        >
          {otherLocale.toUpperCase()}
        </NavigationMenuItem>
      ].map((element, index) =>
        cloneElement(element, {
          delay: initialDelay + index * 0.1,
          transition,
          onClick: onClose
        })
      )}
    </motion.div>
  );
}
