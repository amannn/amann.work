import 'core-js/features/string/starts-with';
import NextApp from 'next/app';
import {memo, useMemo} from 'react';
import Navigation from 'components/Navigation';
import {IntlMessagesContext} from 'hooks/useTranslations';
import './_app.scss';

export default function App({Component, messages, pageProps}) {
  // Avoid context changes in the off canvas re-rendering the whole tree
  const StaticComponent = useMemo(() => memo(Component, () => true), [
    Component
  ]);

  return (
    <IntlMessagesContext.Provider value={messages}>
      <Navigation>
        <StaticComponent {...pageProps} />
      </Navigation>
    </IntlMessagesContext.Provider>
  );
}

App.getInitialProps = async function getInitialProps(context) {
  const {locale} = context.router;
  return {
    ...(await NextApp.getInitialProps(context)),
    messages: locale ? require(`messages/${locale}.json`) : undefined
  };
};
