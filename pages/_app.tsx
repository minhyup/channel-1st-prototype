import React from 'react';
import { AppProps } from 'next/app';
import { GlobalStyles } from '@/styles/ts/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/ts/theme';
// import '@/styles/my.css';

export default function HliApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
