import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../../styles/Search.module.css';
import HelpIcon from '../../public/svg/help.svg';
import BellIcon from '../../public/svg/bell.svg';
import MyProductIcon from '../../public/svg/myproduct.svg';
import SearchIcon from '../../public/svg/prdsearch.svg';
import MenuIcon from '../../public/svg/menu.svg';
import A from '../../public/svg/a.svg';
import B from '../../public/svg/b.svg';
import C from '../../public/svg/c.svg';
import D from '../../public/svg/d.svg';
import E from '../../public/svg/e.svg';
import F from '../../public/svg/f.svg';
import G from '../../public/svg/g.svg';
import H from '../../public/svg/h.svg';
import I from '../../public/svg/i.svg';
import J from '../../public/svg/j.svg';
// import K from '../../public/svg/k.svg';
// import L from '../../public/svg/l.svg';
import ProductBannerIcon from '../../public/svg/productBanner.svg';
import ArrowNextIcon from '../../public/svg/arrow_next.svg';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Home(): React.ReactElement {
  const router = useRouter();
  return (
    <>
      <div className="container" style={{ paddingBottom: '40px' }}>
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
        <section className={styles.searchGuide}>
          <p className={styles.searchGuideContents}>
            직접 가입해서 더 저렴한
            <br />
            다이렉트 보험을 만나보세요
          </p>
        </section>
        <section className={styles.tabMenu}>
          <div className={cx('tabMenuItem', 'tabMenuItemSelected')}>
            <span className={cx('tabMenuItemSelectedText')}>추천</span>
          </div>
          <div className={cx('tabMenuItem')}>
            <span>보장</span>
          </div>
          <div className={cx('tabMenuItem')}>
            <span>미니</span>
          </div>
          <div className={cx('tabMenuItem')}>
            <span>저축</span>
          </div>
          <div className={cx('tabMenuItem')}>
            <span>연금</span>
          </div>
        </section>
        <section className={cx('bannerCard')}>
          <span className={cx('bannerCardTitle')}>LIFEPLUS 오마이픽암보험</span>
          <span className={cx('bannerCardDesc')}>
            내게 맞는 보장만 고른
            <br />
            마이픽<span className={cx('bannerCardPoint')}> 암보험</span>
          </span>
          <div className={cx('bannerCardImage')}>
            <ProductBannerIcon />
          </div>
        </section>
        <section className={cx('card_wrap')}>
          <span className={cx('card_title')}>보장보험</span>
          <div className={cx('card_row')}>
            <div className={cx('card_row_main')}>
              <span className={cx('card_row_name')}>LIFEPLUS 오마이픽 암보험</span>
              <div className={cx('card_row_right')}>
                <span className={cx('card_tag')}>HIT</span>
                <span className={cx('card_arrow')}>
                  <ArrowNextIcon />
                </span>
              </div>
            </div>
            <div>
              <span className={cx('card_detail')}>암, 심장질환, 뇌질환을 한번에</span>
            </div>
          </div>
          <div className={cx('card_row')}>
            <div className={cx('card_row_main')}>
              <span className={cx('card_row_name')}>LIFEPLUS 오마이픽 암보험</span>
              <div className={cx('card_row_right')}>
                <span className={cx('card_tag', 'new')}>HIT</span>
                <span className={cx('card_arrow')}>
                  <ArrowNextIcon />
                </span>
              </div>
            </div>
            <div>
              <span className={cx('card_detail')}>암, 심장질환, 뇌질환을 한번에</span>
            </div>
          </div>
        </section>
      </div>
      <section className={cx('consult')}>
        <div className={cx('consultTitleWrap')}>
          <span className={cx('consultTitle')}>
            보험이 어렵다면
            <br />
            상담사와 쉽게 가입해보세요
          </span>
        </div>
        <div className={cx('consultIcon')}>
          <div className={cx('consultIconItem')}>
            <B className={cx('icon')} />
            <span className={cx('consultIconTitle')}>종신/정기</span>
          </div>
          <div className={cx('consultIconItem')}>
            <C className={cx('icon')} />
            <span className={cx('consultIconTitle')}>종신/정기</span>
          </div>
          <div className={cx('consultIconItem')}>
            <D className={cx('icon')} />
            <span className={cx('consultIconTitle')}>종신/정기</span>
          </div>
          <div className={cx('consultIconItem')}>
            <E className={cx('icon')} />
            <span className={cx('consultIconTitle')}>종신/정기</span>
          </div>
          <div className={cx('consultIconItem')}>
            <F className={cx('icon')} />
            <span className={cx('consultIconTitle')}>종신/정기</span>
          </div>
          <div className={cx('consultIconItem')}>
            <G className={cx('icon')} />
            <span className={cx('consultIconTitle')}>종신/정기</span>
          </div>
          <div className={cx('consultIconItem')}>
            <H className={cx('icon')} />
            <span className={cx('consultIconTitle')}>종신/정기</span>
          </div>
        </div>
      </section>
      <section className={cx('direct')}>
        <div className={cx('consultTitleWrap')}>
          <span className={cx('consultTitle')}>금융상품 바로가기</span>
        </div>
        <div className={cx('consultIcon')}>
          <div className={cx('consultIconItem')}>
            <I className={cx('icon')} />
            <span className={cx('consultIconTitle')}>대출</span>
          </div>
          <div className={cx('consultIconItem')}>
            <J className={cx('icon')} />
            <span className={cx('consultIconTitle')}>퇴직연금</span>
          </div>
        </div>
        <div className={cx('hliBanner')}>
          <div>
            <span className={cx('bannerText')}>
              <span className={cx('bannerPoint')}>한화생명 모바일앱</span>이<br />
              새로워 졌어요!
            </span>
            <span className={cx('bannerSubText')}>앱스토어에 평점을 남겨주세요</span>
          </div>
          <div>
            <A />
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
    </>
  );
}
