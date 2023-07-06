import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/global.scss';
import { getDefaultStore, Provider as JootaiProvider } from 'jotai';
import NextTopLoader from 'nextjs-toploader';
import { IconContext } from 'react-icons';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from 'store';

const jotaistore = getDefaultStore();
export const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Budget Management System | Ebonyi State</title>
      </Head>
      <NextTopLoader
        color="#414549"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #28753a,0 0 5px #B6DC81"
      />
      <ReduxProvider store={store}>
        <JootaiProvider store={jotaistore}>
          <IconContext.Provider
            value={{ color: 'blue', className: 'global-class-name' }}
          >
            <Component {...pageProps} />
          </IconContext.Provider>
        </JootaiProvider>
      </ReduxProvider>
    </>
  );
};

export default CustomApp;
