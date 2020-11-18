import cx from 'classnames';
import {motion} from 'framer-motion';
import {useRouter} from 'next/router';
import {cloneElement} from 'react';
import useTranslations from 'hooks/useTranslations';
import styles from './OffCanvasMenu.module.scss';
import OffCanvasMenuItem from './OffCanvasMenuItem';

export default function OffCanvasMenu({className, isVisible, transition}) {
  const t = useTranslations('Header');
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
        <OffCanvasMenuItem key="work" href="/work">
          {t('work')}
        </OffCanvasMenuItem>,
        <OffCanvasMenuItem key="blog" href="/blog">
          {t('blog')}
        </OffCanvasMenuItem>,
        <OffCanvasMenuItem key="open-source" href="/open-source">
          {t('openSource')}
        </OffCanvasMenuItem>,
        <OffCanvasMenuItem key="contact" href="#contact">
          {t('contact')}
        </OffCanvasMenuItem>,
        <OffCanvasMenuItem
          key="language"
          className={styles.language}
          color="paleInverted"
          detectActive={false}
          href="/"
          locale={otherLocale}
          variant="label"
        >
          {otherLocale.toUpperCase()}
        </OffCanvasMenuItem>
      ].map((element, index) =>
        cloneElement(element, {delay: initialDelay + index * 0.1, transition})
      )}
    </motion.div>
  );
}
