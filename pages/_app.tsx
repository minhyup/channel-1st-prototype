import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { GlobalStyles } from '@/styles/ts/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/ts/theme';
import { NATIVE_UTILS } from '@/utils/nativeUtils';
// import '@/styles/my.css';

export default function HliApp({ Component, pageProps }: AppProps): React.ReactElement {
  useEffect(() => {
    window.NATIVE_UTILS = NATIVE_UTILS;
  }, []);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
