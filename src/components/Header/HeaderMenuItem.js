/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import cx from 'classnames';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';
import Text from 'components/Text';
import styles from './HeaderMenuItem.module.scss';

export default function HeaderMenuItem({
  children,
  className,
  color,
  detectActive = true,
  href,
  locale
}) {
  const router = useRouter();
  const isActive = detectActive && href === router.pathname;

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
    <Link
      className={cx(styles.root, className, isActive && styles.root_active)}
      href={href}
      locale={locale}
      onClick={onClick}
    >
      <Text color={color} component="span" variant="label">
        {children}
      </Text>
    </Link>
  );
}
