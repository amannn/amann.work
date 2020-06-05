import React, {useMemo} from 'react';
import Text from 'components/Text';
import styles from './ProjectTestimonial.module.scss';

export default function ProjectTestimonial({
  image,
  personName,
  personTitle,
  personLink,
  quote
}) {
  const PersonNameComponent = useMemo(
    () =>
      personLink
        ? function PersonNameLink(props) {
            return (
              // eslint-disable-next-line jsx-a11y/anchor-has-content,react/jsx-no-target-blank
              <a {...props} href={personLink} rel="noopener" target="_blank" />
            );
          }
        : 'p',
    [personLink]
  );

  return (
    <div className={styles.root}>
      <div className={styles.image}>{image}</div>
      <blockquote className={styles.text}>
        <Text className={styles.quote} component="div" weight="bold">
          {quote.split('\n').map((part, index, parts) => (
            <p key={index}>
              {index === 0 && <span className={styles.apostropheStart}>“</span>}
              {part}
              {index === parts.length - 1 && (
                <span className={styles.apostropheEnd}>”</span>
              )}
            </p>
          ))}
        </Text>

        <footer className={styles.person}>
          <Text color="accent" component={PersonNameComponent} variant="h3">
            {personName}
          </Text>
          <Text color="pale" variant="caption">
            {personTitle}
          </Text>
        </footer>
      </blockquote>
    </div>
  );
}
