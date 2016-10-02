import React, {Component, PropTypes} from 'react';

export default class Base extends Component {
  static propTypes = {
    assets: PropTypes.object,
    html: PropTypes.string
  };

  render() {
    let {html, assets} = this.props;

    let googleFonts = [
      'Merriweather+Sans:300,400,700',
      'Merriweather:400,700',
      'Source+Code+Pro:400'
    ];

    return (
      <html>
        <head>
          <title>
            Jan Amann – A frontend developer who cares about user experiences.
          </title>

          <meta
            name="description"
            content="Frontend technologies are my tools of choice to craft great user experiences."
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <meta charSet="UTF-8" />
          <meta name="theme-color" content="#1f3942" />

          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" sizes="288x288" href="/logo.png" />
          <link rel="apple-touch-icon" href="/logo.png" />

          {/* Keep this in sync with `webpack.config.js` */}
          <link
            href={'//fonts.googleapis.com/css?family=' + googleFonts.join('|')}
            rel="stylesheet"
            type="text/css"
          />

          <link rel="shortcut icon" href="/favicon.ico" />

          {assets.styles.map(style =>
            <link key={style} rel="stylesheet" href={style} />
          )}
        </head>
        <body>
          <div
            id="root"
            style={{display: 'none'}}
            dangerouslySetInnerHTML={{__html: html}}
          />

          <script src="//www.google-analytics.com/analytics.js" />

          {assets.scripts.map(script =>
            <script key={script} src={script} />
          )}
        </body>
      </html>
    );
  }
}
