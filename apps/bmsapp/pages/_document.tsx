import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { dataLayoutModeAtom } from 'store';
import { useAtom } from 'jotai';

export const MyDocument = () => {
  const [dataLayoutMode] = useAtom(dataLayoutModeAtom);
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  return (
    <Html lang="en-US" className="no-js">
      <Head />
      <meta charSet="UTF-8" />
      <base href={domain} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="author" content="golojan.co.uk" />
      <meta name="robots" content="noindex, nofollow" />
      <meta name="googlebot" content="noindex, nofollow" />
      <meta name="google" content="nositelinkssearchbox" />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/icons/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/icons/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/icons/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/icons/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/icons/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/icons/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/icons/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/icons/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/icons/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link rel="manifest" href="/icons/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/icons/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#ffffff" />
      <body data-mode={dataLayoutMode}>
        <Main />
        <NextScript />
        <Script
          src="/assets/js/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/assets/js/slick.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/quill.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/chart.js" strategy="lazyOnload" />
        <Script src="/assets/js/flatpickr.js" strategy="lazyOnload" />
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
      </body>
    </Html>
  );
};

export default MyDocument;
