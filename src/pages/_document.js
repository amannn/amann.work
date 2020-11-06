import NextDocument, {Html, Head, Main, NextScript} from 'next/document';
import Fonts from 'components/Fonts';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <Fonts />
          <meta content="#303236" name="theme-color" />
          <link href="/manifest.json" rel="manifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
