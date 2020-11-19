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
          {/* Prevent transitions from running on load in Chrome.
              https://stackoverflow.com/a/42969608/343045 */}
          <script> </script>
        </body>
      </Html>
    );
  }
}
