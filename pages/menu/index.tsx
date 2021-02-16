import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import MyProductIcon from '../../public/svg/myproduct.svg';
import SearchIcon from '../../public/svg/prdsearch.svg';
import MenuIcon from '../../public/svg/menu.svg';
export default function Home(): React.ReactElement {
  const router = useRouter();
  return (
    <div className="container">
      <Head>
        <title>리액트!!!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>menu 페이지??</h1>
      <footer>
        <button className="icon_text" onClick={() => router.push('/my')}>
          <MyProductIcon />
          <span className="footer_title">나의계약</span>
        </button>
        <button className="icon_text" onClick={() => router.push('/search')}>
          <SearchIcon />
          <span className="footer_title">상품찾기</span>
        </button>
        <button className="icon_text" onClick={() => router.push('/menu')}>
          <MenuIcon />
          <span className="footer_title">메뉴</span>
        </button>
      </footer>
    </div>
  );
}
