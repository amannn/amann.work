import React, {useState} from 'react';
import cx from 'classnames';
import VisibilitySensor from 'components/VisibilitySensor';
import Text from 'components/Text';
import Icon from 'components/Icon';
import styles from './Contact.module.scss';

export default function Contact({
  email = 'jan@amann.me',
  intro,
  telephone = '+43 681 / 84 39 0 333',
  title
}) {
  const [animated, setAnimated] = useState(false);

  function onVisible() {
    if (!animated) {
      setAnimated(true);
    }
  }

  const telephoneNumber = telephone.replace(/[\s/]/g, '');

  return (
    <>
      <VisibilitySensor onVisible={onVisible} />
      <Text color="paleInverted" variant="label">
        {intro}
      </Text>
      <Text color="accentLight" variant="h2">
        {title}
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
