import cx from 'classnames';
import React, {useState} from 'react';
import Icon from 'components/Icon';
import Text from 'components/Text';
import VisibilitySensor from 'components/VisibilitySensor';
import useTranslations from 'hooks/useTranslations';
import styles from './FooterContact.module.scss';

export default function FooterContact() {
  const [animated, setAnimated] = useState(false);
  const t = useTranslations('FooterContact');
  const telephone = t('telephone');
  const email = t('email');

  function onVisible() {
    if (!animated) {
      setAnimated(true);
    }
  }

  const telephoneNumber = telephone.replace(/[\s/]/g, '');

  return (
    <>
      <VisibilitySensor onVisible={onVisible} />
      <Text color="paleInverted" component="h2" variant="label">
        {t('intro')}
      </Text>
      <Text color="accentLight" variant="h2">
        {t('title')}
      </Text>
      <div>
        <a className={cx(styles.email, styles.item)} href={`mailto:${email}`}>
          <Icon
            className={cx(styles.icon, {[styles.mail_animated]: animated})}
            color="accentLight"
            name="mail"
          />
          <Text className={styles.itemText} color="white" component="span">
            {email}
          </Text>
        </a>
      </div>
      <div>
        <a className={styles.item} href={`tel:${telephoneNumber}`}>
          <Icon
            className={cx(styles.icon, {[styles.phone_animated]: animated})}
            color="accentLight"
            name="phone"
          />
          <Text className={styles.itemText} color="white" component="span">
            {telephone}
          </Text>
        </a>
      </div>
    </>
  );
}
