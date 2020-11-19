import {format} from 'date-fns';
import {de} from 'date-fns/locale';
import {useRouter} from 'next/router';

/**
 * As soon as Vercel supports Node.js 14 we should use the native date
 * formatting API in format.js instead and use translations to format dates.
 */

export default function useDateFormatting() {
  const router = useRouter();

  return function formatDate(date) {
    if (router.locale === 'de') {
      return format(date, 'd. MMM yyyy', {locale: de});
    } else {
      return format(date, 'MMM d, yyyy');
    }
  };
}
