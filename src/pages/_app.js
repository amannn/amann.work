import 'core-js/features/string/starts-with';
import {AnimatePresence, motion} from 'framer-motion';
import NextApp from 'next/app';
import {memo, useMemo} from 'react';
import Navigation from 'components/Navigation';
import {IsSsrContext} from 'hooks/useSsr';
import {IntlMessagesContext} from 'hooks/useTranslations';
import './_app.scss';

// Workaround for https://github.com/vercel/next.js/issues/17464#issuecomment-724345414
import '.';
import './imprint';
import './open-source';
import './blog';
import './work';
import 'components/BlogPost';

export default function App({Component, messages, pageProps, router}) {
  // Avoid context changes in the off canvas from re-rendering the whole tree
  const StaticComponent = useMemo(() => memo(Component, () => true), [
    Component
  ]);

  // On the server side this property is `undefined` interestingly.
  // On subsequent navigation it switches to `false`.
  const isSsr = router.isSsr ?? true;

  return (
    <IsSsrContext.Provider value={isSsr}>
      <IntlMessagesContext.Provider value={messages}>
        <Navigation>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={router.route}
              animate="visible"
              exit="hidden"
              initial={isSsr ? 'visible' : 'initial'}
              transition={{duration: 0.3}}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    // Fade in at the same time when the menu button expands
                    delay: 0.25
                  }
                },
                hidden: {opacity: 0, y: 0},
                initial: {opacity: 0, y: 16}
              }}
            >
              <StaticComponent {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Navigation>
      </IntlMessagesContext.Provider>
    </IsSsrContext.Provider>
  );
}

App.getInitialProps = async function getInitialProps(context) {
  const {locale} = context.router;
  return {
    ...(await NextApp.getInitialProps(context)),
    messages: locale ? require(`messages/${locale}.json`) : undefined
  };
};
