/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import cx from 'classnames';
import {motion} from 'framer-motion';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';
import Text from 'components/Text';
import styles from './OffCanvasMenuItem.module.scss';

export default function OffCanvasMenuItem({
  children,
  className,
  color = 'white',
  delay = 0,
  detectActive = true,
  href,
  locale,
  transition,
  variant = 'h3'
}) {
  const router = useRouter();
  const isActive = detectActive && href === router.pathname;

  if (isActive) {
    color = 'accentLight';
  }

  function onClick(event) {
    const isScrollLink = href.startsWith('#');
    if (!isScrollLink) return;

    const selector = event.currentTarget
      .getAttribute('href')
      .replace(/.+#/, '#');
    const element = document.querySelector(selector);

    if (element.scrollIntoView) {
      event.preventDefault();
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  return (
    <Link href={href} locale={locale} passHref>
      <motion.a
        className={cx(styles.root, className)}
        initial="hidden"
        onClick={onClick}
        variants={{
          visible: {
            opacity: 1,
            x: 0,
            transition: {delay}
          },
          hidden: {
            opacity: 0,
            x: 20,
            transition
          }
        }}
      >
        <Text
          className={styles.text}
          color={color}
          component="span"
          variant={variant}
        >
          {children}
        </Text>
      </motion.a>
    </Link>
  );
}
