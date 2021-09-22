import cx from 'classnames';
import Text from 'components/Text';
import Wrapper from 'components/Wrapper';
import styles from './Header.module.scss';

export default function Header({
  description = undefined,
  slim = false,
  large = false,
  children,
  subtitle = undefined,
  title
}) {
  return (
    <div className={cx(styles.root, large && styles.root_large)}>
      <Wrapper innerClassName={styles.inner}>
        {title && (
          <>
            <div className={cx(styles.text, slim && styles.text_slim)}>
              <Text
                className={styles.title}
                component="h1"
                variant={large ? 'title' : 'h1'}
              >
                {title}
              </Text>
              <Text
                className={styles.subtitle}
                color="accent"
                component="h2"
                variant={large ? 'h2' : 'h3'}
              >
                {subtitle}
              </Text>
              <Text className={styles.description}>{description}</Text>
            </div>
            {children}
          </>
        )}
      </Wrapper>
    </div>
  );
}
