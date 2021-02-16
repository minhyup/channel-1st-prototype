import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MyContainer from '../components/containers/my/MyContainer';

export default function Home(): React.ReactElement {
  return (
    <div className={styles.container}>
      <Head>
        <title>리액트!!!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MyContainer />
    </div>
  );
}
