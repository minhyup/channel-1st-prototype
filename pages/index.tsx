import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { darken, lighten } from 'polished';
//import MyContainer from '../components/containers/my/MyContainer';
import styled from '@emotion/styled';
const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 3rem;
  font-size: 1rem;
  /* 색상 */
  background: #228be6;
  &:hover {
    background: ${lighten(0.1, '#228be6')};
  }
  &:active {
    background: ${darken(0.1, '#228be6')};
  }
`;
export default function Home(): React.ReactElement {
  return (
    <div className={styles.container}>
      <Head>
        <title>리액트!!!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <MyContainer /> */}
      <Link href="/my">
        <Button>Home으로 이동</Button>
      </Link>
    </div>
  );
}
