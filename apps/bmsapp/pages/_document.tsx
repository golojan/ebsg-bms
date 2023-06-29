import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => {
  return (
    <Html lang="en-US" data-theme={'dark'} className="no-js">
      <Head />
      <link rel="icon" href="/icons/favicon.ico" />
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="author" content="golojan.co.uk" />
      <meta name="robots" content="noindex, nofollow" />
      <meta name="googlebot" content="noindex, nofollow" />
      <meta name="google" content="nositelinkssearchbox" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
