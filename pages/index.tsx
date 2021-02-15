import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home(): React.ReactElement {
  return (
    <div className={styles.container}>
      <Head>
        <title>리액트!!!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello MinHyup!</h1>
    </div>
  );
}
