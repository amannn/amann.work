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
          <meta content="/jan-amann.jpg" property="og:image" />
          <meta content="/jan-amann.jpg" name="twitter:image" />
          <meta content="Jan Amann" name="twitter:image:alt" />
          <meta content="@jamannnnnn" name="twitter:site" />
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
