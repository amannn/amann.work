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
  return {
    ...(await App.getInitialProps(context)),
    messages: require(`messages/${context.router.locale}.json`)
  };
};
