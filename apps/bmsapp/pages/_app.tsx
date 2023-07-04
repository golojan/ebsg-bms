import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/global.scss';
import { getDefaultStore, Provider } from 'jotai';
import NextTopLoader from 'nextjs-toploader';
import { IconContext } from 'react-icons';

const store = getDefaultStore();
export const CustomApp = ({ Component, pageProps } : AppProps) => {
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
      <Provider store={store}>
        <IconContext.Provider
          value={{ color: 'blue', className: 'global-class-name' }}
        >
          <Component {...pageProps} />
        </IconContext.Provider>
      </Provider>
    </>
  );
};

export default CustomApp;
