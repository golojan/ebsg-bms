import { AppProps } from 'next/app';
import Head from 'next/head';
import '../style/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getDefaultStore, Provider } from 'jotai';
import NextTopLoader from 'nextjs-toploader';

// This is the only to monitor the store
// dev-time only: check app's left-bottom

import { DevTools } from 'jotai-devtools';
/** We need a fool proof store for
 * 1. state management
 * 2. state persistence
 * 3. state sharing
 * 4. state monitoring
 * 5. state debugging
 */
const store = getDefaultStore();
function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>.</title>
      </Head>
      <NextTopLoader />
      <Provider store={store}>
        <DevTools store={store} />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default CustomApp;
