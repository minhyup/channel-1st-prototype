import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
//import styles from '../../styles/My.module.css';
import HelpIcon from '../../public/svg/help.svg';
import BellIcon from '../../public/svg/bell.svg';
import ArrowNextIcon from '../../public/svg/arrow_next.svg';
import GraphIcon from '../../public/svg/graph.svg';
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

      <header className="header">
        <div className="bell">
          <BellIcon />
        </div>
        <div>
          <HelpIcon />
        </div>
      </header>
      <section className="category">
        <div className="title_wrap">
          <span className="title">보험</span>
          <span className="number">3</span>
          <span className="hyperlink">타사보험조회</span>
        </div>
        <div className="card_wrap">
          <span className="card_title">월 보험료</span>
          <div className="sumInfo">
            <span className="sum">307,383</span>
            <span className="sumkor">원</span>
            <span className="sumArrow">
              <ArrowNextIcon />
            </span>
          </div>
          <div className="card_row">
            <div className="card_row_main">
              <span className="card_row_name">LIFEPLUS 오마이픽 암보험</span>
              <div className="card_row_right">
                <span className="card_tag">완납</span>
                <span className="card_arrow">
                  <ArrowNextIcon />
                </span>
              </div>
            </div>
            <div>
              <span className="card_detail">일시납 21,600원</span>
            </div>
          </div>
          <div className="card_row">
            <div className="card_row_main">
              <span className="card_row_name">LIFEPLUS 오마이픽 암보험</span>
              <div className="card_row_right">
                <span className="card_tag status">미납</span>
                <span className="card_arrow">
                  <ArrowNextIcon />
                </span>
              </div>
            </div>
            <div>
              <span className="card_detail">일시납 21,600원</span>
            </div>
          </div>
          <div className="card_row">
            <div className="card_row_main">
              <span className="card_row_name">LIFEPLUS 오마이픽 암보험</span>
              <div className="card_row_right">
                <span className="card_tag">완납</span>
                <span className="card_arrow">
                  <ArrowNextIcon />
                </span>
              </div>
            </div>
            <div>
              <span className="card_detail">일시납 21,600원</span>
            </div>
          </div>
          <div className="button_group">
            <button className="whiteBtn">보험금 납입</button>
            <button className="primaryBtn">보험금 청구</button>
          </div>
        </div>
        <div className="banner">
          <div>
            <span className="banner_title">보장분석 리포트</span>
            <span className="banner_subTitle">나에게 부족한 보험은?</span>
          </div>
          <div>
            <GraphIcon />
          </div>
        </div>
      </section>

      <section className="category space">
        <div className="title_wrap">
          <span className="title">대출</span>
          <span className="number">6</span>
        </div>
        <div className="card_wrap">
          <span className="card_title">보험계약대출 잔액</span>
          <div className="sumInfo">
            <span className="sum">307,383</span>
            <span className="sumkor">원</span>
            <span className="sumArrow">
              <ArrowNextIcon />
            </span>
          </div>
          <div className="card_row">
            <div className="card_row_main">
              <span className="card_row_name">LIFEPLUS 오마이픽 암보험</span>
              <div className="card_row_right">
                <span className="card_tag">완납</span>
                <span className="card_arrow">
                  <ArrowNextIcon />
                </span>
              </div>
            </div>
            <div>
              <span className="card_detail">일시납 21,600원</span>
            </div>
          </div>
          <div className="card_row">
            <div className="card_row_main">
              <span className="card_row_name">한화생명 미래로기업복지</span>
              <div className="card_row_right">
                <span className="card_tag status">미납</span>
                <span className="card_arrow">
                  <ArrowNextIcon />
                </span>
              </div>
            </div>
            <div>
              <span className="card_detail">일시납 21,600원</span>
            </div>
          </div>
          <div className="card_row">
            <div className="card_row_main">
              <span className="card_row_name">LIFEPLUS 오마이픽 암보험</span>
              <div className="card_row_right">
                <span className="card_tag">완납</span>
                <span className="card_arrow">
                  <ArrowNextIcon />
                </span>
              </div>
            </div>
            <div>
              <span className="card_detail">일시납 21,600원</span>
            </div>
          </div>
          <div className="button_group">
            <button className="primaryBtn full">보험금 청구</button>
          </div>
        </div>
        <div className="card_wrap space">
          <span className="card_title">보험계약대출 잔액</span>
          <div className="sumInfo">
            <span className="sum">307,383</span>
            <span className="sumkor">원</span>
            <span className="sumArrow">
              <ArrowNextIcon />
            </span>
          </div>
          <div className="card_row">
            <div className="card_row_main">
              <span className="card_row_name">LIFEPLUS 오마이픽 암보험</span>
              <div className="card_row_right">
                <span className="card_tag">완납</span>
                <span className="card_arrow">
                  <ArrowNextIcon />
                </span>
              </div>
            </div>
            <div>
              <span className="card_detail">일시납 21,600원</span>
            </div>
          </div>
          <div className="card_row">
            <div className="card_row_main">
              <span className="card_row_name">한화생명 미래로기업복지</span>
              <div className="card_row_right">
                <span className="card_tag status">미납</span>
                <span className="card_arrow">
                  <ArrowNextIcon />
                </span>
              </div>
            </div>
            <div>
              <span className="card_detail">일시납 21,600원</span>
            </div>
          </div>
          <div className="card_row">
            <div className="card_row_main">
              <span className="card_row_name">LIFEPLUS 오마이픽 암보험</span>
              <div className="card_row_right">
                <span className="card_tag">완납</span>
                <span className="card_arrow">
                  <ArrowNextIcon />
                </span>
              </div>
            </div>
            <div>
              <span className="card_detail">일시납 21,600원</span>
            </div>
          </div>
        </div>
      </section>
      <section className="category space">
        <div className="title_wrap">
          <span className="title">퇴직연금</span>
          <span className="number">2</span>
        </div>
        <div className="card_wrap">
          <span className="card_title">퇴직연금</span>
          <div className="sumInfo">
            <span className="sum">200,000,000</span>
            <span className="sumkor">원</span>
            <span className="sumArrow">
              <ArrowNextIcon />
            </span>
          </div>
          <div className="card_row">
            <div className="card_row_main">
              <span className="card_row_name">확정급여형(DB)</span>
              <div className="card_row_right">
                <span className="card_tag gray">2건</span>
                <span className="card_arrow">
                  <ArrowNextIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
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
