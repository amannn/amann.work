import App from 'next/app';
import {IntlMessagesContext} from 'hooks/useTranslations';
import './_app.scss';

export default function MyApp({Component, messages, pageProps}) {
  return (
    <IntlMessagesContext.Provider value={messages}>
      <Component {...pageProps} />
    </IntlMessagesContext.Provider>
  );
}

MyApp.getInitialProps = async function getInitialProps(context) {
  const {locale} = context.router;
  return {
    ...(await App.getInitialProps(context)),
    messages: locale ? require(`messages/${locale}.json`) : undefined
  };
};
