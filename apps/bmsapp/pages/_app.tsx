import { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import '@mui/material/styles';
import '../public/assets/css/flatpickr.min.css';
import '../styles/global.scss';
import { Provider as JootaiProvider } from 'jotai';
import NextTopLoader from 'nextjs-toploader';
import { IconContext } from 'react-icons';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider as ReduxProvider } from 'react-redux';

import jotaiStore, { reduxStore } from 'store';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export const CustomApp = (props:AppProps) => {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <title>Budget Management System | Ebonyi State</title>
      </Head>
      <NextTopLoader
        color="#16a34a"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #16a34a,0 0 5px #16a34a"
      />
      <QueryClientProvider client={queryClient}>
        <ReduxProvider store={reduxStore}>
          <JootaiProvider store={jotaiStore}>
            <IconContext.Provider
              value={{ color: 'blue', className: 'global-class-name' }}
            >
              <Component {...pageProps} />
            </IconContext.Provider>
          </JootaiProvider>
        </ReduxProvider>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </>
  );
};

export default CustomApp;
