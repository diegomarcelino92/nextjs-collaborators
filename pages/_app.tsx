import React, { useEffect } from 'react';

import { AppProps } from 'next/app';

import { wrapper } from 'src/redux/store';

import Layout from '@components/layout';
import ThemeProvider from '@config/theme-provider';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(App);
