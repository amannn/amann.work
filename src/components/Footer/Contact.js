import React from 'react';
import cx from 'classnames';
import Text from 'components/Text';
import Icon from 'components/Icon';
import styles from './Contact.module.scss';

export default function Contact({
  email = 'jan@amann.me',
  intro,
  telephone = '+43 681 / 84 39 0 333',
  title
}) {
  const telephoneNumber = telephone.replace(/[\s/]/g, '');

  return (
    <>
      <Text color="paleInverted" variant="label">
        {intro}
      </Text>
      <Text color="accent" variant="h2">
        {title}
      </Text>
      <div>
        <a className={cx(styles.email, styles.item)} href={`mailto:${email}`}>
          <Icon className={styles.icon} color="accent" name="mail" />
          <Text color="white" component="span">
            {email}
          </Text>
        </a>
      </div>
      <div>
        <a className={styles.item} href={`tel:${telephoneNumber}`}>
          <Icon className={styles.icon} color="accent" name="phone" />
          <Text color="white" component="span">
            {telephone}
          </Text>
        </a>
      </div>
    </>
  );
}
