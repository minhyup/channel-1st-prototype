import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/my.css';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return <Component {...pageProps} />;
}

export default MyApp;
