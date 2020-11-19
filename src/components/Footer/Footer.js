import React from 'react';
import Icon from 'components/Icon';
import Wrapper from 'components/Wrapper';
import useTranslations from 'hooks/useTranslations';
import styles from './Footer.module.scss';
import FooterContact from './FooterContact';
import FooterMenuItem from './FooterMenuItem';
import FooterSocialIcon from './FooterSocialIcon';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <div className={styles.root}>
      <Wrapper>
        <div id={t('id')}>
          <FooterContact />
        </div>
        <div className={styles.navigation}>
          <div className={styles.menu}>
            <FooterMenuItem href="/work">{t('work')}</FooterMenuItem>
            <FooterMenuItem href="/blog">{t('blog')}</FooterMenuItem>
            <FooterMenuItem href="/open-source">
              {t('openSource')}
            </FooterMenuItem>
            <FooterMenuItem href="/imprint">{t('imprint')}</FooterMenuItem>
          </div>
          <div>
            <FooterSocialIcon
              aria-label={t('github.label')}
              href={t('github.href')}
            >
              <Icon name="github" />
            </FooterSocialIcon>
            <FooterSocialIcon
              aria-label={t('twitter.label')}
              href={t('twitter.href')}
            >
              <Icon name="twitter" />
            </FooterSocialIcon>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
