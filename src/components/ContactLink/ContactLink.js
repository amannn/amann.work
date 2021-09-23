import cx from 'classnames';
import {useEffect, useState} from 'react';
import Text from 'components/Text';
import styles from './ContactLink.module.scss';

export default function ContactLink({isVisible = true}) {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const href = '#footer';

  function getContactNode() {
    return document.querySelector(href);
  }

  function onClick(event) {
    const contactNode = getContactNode();
    if (contactNode) {
      contactNode.scrollIntoView({behavior: 'smooth'});
      event.preventDefault();
    }
  }

  useEffect(() => {
    const contactNode = getContactNode();

    function onIntersectionChange(records) {
      records.forEach((record) => {
        if (record.intersectionRatio > 0) {
          setIsFooterVisible(true);
        } else {
          setIsFooterVisible(false);
        }
      });
    }

    const observer = new IntersectionObserver(onIntersectionChange, {
      threshold: [0, 1] // Fully visible or invisible
    });
    observer.observe(contactNode);

    return () => observer.unobserve(contactNode);
  }, []);

  return (
    <a
      className={cx(
        styles.root,
        isVisible && !isFooterVisible && styles.root_visible
      )}
      href={href}
      onClick={onClick}
    >
      <span className={styles.arrow} />
      <Text
        className={styles.text}
        color="accent"
        component="span"
        variant="caption"
      >
        Contact
      </Text>
    </a>
  );
}
