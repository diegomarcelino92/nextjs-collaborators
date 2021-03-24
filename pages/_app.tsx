import React, { useEffect } from 'react';

import { AppProps } from 'next/app';

import { ThemeProvider as ThemeProviderMUI } from '@material-ui/core/styles';
import { ThemeProvider as ThemeProviderSC } from 'styled-components';

import theme from '@config/theme';

import { wrapper } from 'src/redux/store';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProviderMUI theme={theme}>
      <ThemeProviderSC theme={theme}>
        <Component {...pageProps} />
      </ThemeProviderSC>
    </ThemeProviderMUI>
  );
}

export default wrapper.withRedux(App);
