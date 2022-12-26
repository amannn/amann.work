import NextDocument, {Html, Head, Main, NextScript} from 'next/document';

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return {...initialProps, locale: ctx.locale};
  }

  render() {
    const {locale} = this.props;
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&display=swap"
            rel="stylesheet"
          />
          <meta content="#303236" name="theme-color" />
          <link href="/manifest.json" rel="manifest" />
          <meta
            content="https://amann.work/jan-amann.jpg"
            property="og:image"
          />
          <meta
            content="https://amann.work/jan-amann.jpg"
            name="twitter:image"
          />
          <meta content="Jan Amann" name="twitter:image:alt" />
          <meta content="@jamannnnnn" name="twitter:site" />
        </Head>
        <body>
          <Main />
          <script
            // Conditionally polyfill Intl API as needed
            dangerouslySetInnerHTML={{
              __html: `(window.Intl && window.Intl.PluralRules && Intl.DateTimeFormat && Intl.NumberFormat) || document.write('<script src="https://polyfill.io/v3/polyfill.min.js?features=Intl%2CIntl.DateTimeFormat%2CIntl.DateTimeFormat.%7Elocale.${locale}"><\\/script>');`
            }}
          />
          <NextScript />
          {/* Prevent transitions from running on load in Chrome.
              https://stackoverflow.com/a/42969608/343045 */}
          <script> </script>
        </body>
      </Html>
    );
  }
}
