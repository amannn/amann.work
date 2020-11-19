import IntlMessageFormat from 'intl-messageformat';
import {useRouter} from 'next/router';
import {useContext, createContext} from 'react';

export const IntlMessagesContext = createContext({
  messages: undefined
});

/**
 * Translates messages from the given component by using the ICU syntax.
 * See https://formatjs.io/docs/core-concepts/icu-syntax
 * @param {String} componentName
 * @return {Function}
 */
export default function useTranslations(componentName) {
  const messages = useContext(IntlMessagesContext);

  if (!messages) {
    throw new Error('No IntlMessagesContext configured.');
  }

  const router = useRouter();
  const componentMessages = messages[componentName];

  if (!componentMessages) {
    throw new Error(`No messages for component \`${componentName}\` found.`);
  }

  function translate(
    /** Use a dot to indicate a level of nesting (e.g. `namespace.nestedLabel`). */
    idPath,
    values = undefined
  ) {
    let message = componentMessages;

    idPath.split('.').forEach((part) => {
      const next = message[part];

      if (!part || !next) {
        throw new Error(
          `No message found for \`${idPath}\` in \`${componentName}\`.`
        );
      }

      message = next;
    });

    if (typeof message === 'object') {
      throw new Error(
        `Insufficient path specified for \`${idPath}\` in \`${componentName}\`.`
      );
    }

    const messageFormat = new IntlMessageFormat(message, router.locale);
    const formattedMessage = messageFormat.format(values);
    if (formattedMessage === undefined) {
      throw new Error(`Unable to format ${message} with ${messageFormat}`);
    }

    return formattedMessage;
  }

  return translate;
}
