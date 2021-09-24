import cx from 'classnames';
import {useEffect, useState} from 'react';
import Text from 'components/Text';
import styles from './ContactLink.module.scss';

export default function ContactLink({isVisible = true}) {
  const [hasScrolledPastStart, setHasScrolledPastStart] = useState(false);
  const [hasScrolledToEnd, setHasScrolledToEnd] = useState(false);
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

    function onScroll() {
      const {innerHeight, scrollY} = window;
      setHasScrolledPastStart(scrollY > innerHeight * 0.75);

      setHasScrolledToEnd(
        scrollY >
          document.body.offsetHeight - innerHeight - contactNode.offsetHeight
      );
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      className={cx(
        styles.root,
        isVisible &&
          hasScrolledPastStart &&
          !hasScrolledToEnd &&
          styles.root_visible
      )}
      href={href}
      onClick={onClick}
    >
      <span className={styles.arrow} />
      <Text color="accent" component="span" variant="caption">
        Contact
      </Text>
    </a>
  );
}
