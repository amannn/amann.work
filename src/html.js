/* eslint-disable jsx-a11y/html-has-lang */
import React from 'react';

export default function HTML({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents
}) {
  return (
    <html {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta content="ie=edge" httpEquiv="x-ua-compatible" />
        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1"
          name="viewport"
        />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div
          key="body"
          dangerouslySetInnerHTML={{__html: body}}
          id="___gatsby"
        />
        {postBodyComponents}
      </body>
    </html>
  );
}
