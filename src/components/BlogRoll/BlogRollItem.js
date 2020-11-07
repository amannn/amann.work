/* eslint-disable jsx-a11y/anchor-has-content */
import CardLink from 'components/CardLink';
import Text from 'components/Text';
import useTranslations from 'hooks/useTranslations';
import styles from './BlogRollItem.module.scss';

export default function BlogRollItem({className, post}) {
  const t = useTranslations('BlogRollItem');

  return (
    <CardLink
      className={className}
      description={post.excerpt}
      href={post.href}
      title={post.title}
    >
      <Text className={styles.published} color="pale">
        {t('date', {date: new Date(post.date)})}
      </Text>
    </CardLink>
  );
}
