/* eslint-disable jsx-a11y/anchor-has-content */
import CardLink from 'components/CardLink';
import Text from 'components/Text';
import useDateFormatting from 'hooks/useDateFormatting';
import styles from './BlogRollItem.module.scss';

export default function BlogRollItem({className, post}) {
  const formatDate = useDateFormatting();

  return (
    <CardLink
      className={className}
      description={post.excerpt}
      href={post.href}
      title={post.title}
    >
      <Text className={styles.published} color="pale">
        {formatDate(new Date(post.date))}
      </Text>
    </CardLink>
  );
}
