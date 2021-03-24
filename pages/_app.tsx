import React, { useEffect } from 'react';

import { AppProps } from 'next/app';

import ThemeProvider from '@config/theme-provider';

import { wrapper } from 'src/redux/store';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(App);
