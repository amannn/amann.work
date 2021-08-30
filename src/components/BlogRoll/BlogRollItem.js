import {parseISO} from 'date-fns';
import {useIntl} from 'next-intl';
import CardLink from 'components/CardLink';
import Text from 'components/Text';
import styles from './BlogRollItem.module.scss';

export default function BlogRollItem({className, post}) {
  const intl = useIntl();

  return (
    <CardLink
      className={className}
      description={post.excerpt}
      href={post.href}
      title={post.title}
    >
      <Text className={styles.published} color="pale">
        {intl.formatDateTime(parseISO(post.date), 'date')}
      </Text>
    </CardLink>
  );
}
