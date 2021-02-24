import React from 'react';
import Head from 'next/head';
//import Card from '@/components/elements/Card';
import CardHeadTitle from '@/components/elements/CardHeadTitle';
//import CardTop from '@/components/combinations/CardTop';
//import ContractList from '@/components/combinations/ContractList';
//import ButtonArea from '@/components/elements/ButtonArea';
import Banner from '@/components/combinations/Banner';
//import ToastPopup from '@/components/elements/ToastPopup';

export default function Home(): React.ReactElement {
  return (
    <>
      <Head>
        <title>리액트!!!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrap">
        {/* 테스트 */}
        <Banner link="#" subTitle="보장분석 리포트" mainTitle="나에게 부족한 보험은?" src="/images/img_insure_report.png" width="68" height="50" />

        <CardHeadTitle title="보험" total="3" href="#" label="타사보험 조회" />
        {/* <CardHeadTitle title="보험" total="3" href="#" label="타사보험 조회" /> */}
        {/* <CardHeadTitle title="보험" total="3" href="#" label="타사보험 조회" />
        <Card>
          <CardTop title="월 보험료" amount="307,692" link="#" />
          <ContractList list={InsuranceArr} />
          <ButtonArea
            items={[
              {
                fill: false,
                link: '#',
                label: '보험료 납입'
              },
              {
                fill: true,
                link: '#',
                label: '사고보험금 청구'
              }
            ]}
          />
        </Card>

        <Banner link="#" subTitle="보장분석 리포트" mainTitle="나에게 부족한 보험은?" src="/images/img_insure_report.png" width="68" height="50" />

        <CardHeadTitle title="대출" total="2" />
        <Card>
          <CardTop title="보험계약대출 잔액" amount="2,350,608" link="#" />
          <ContractList list={LoanArr} />
          <ButtonArea
            items={[
              {
                fill: true,
                link: '#',
                amount: '781',
                label: '만원 추가대출 받기'
              }
            ]}
          />
        </Card>

        <ToastPopup message="김한화님, 반갑습니다!" /> */}
      </div>
    </>
  );
}

const InsuranceArr = [
  {
    link: '#',
    name: '한화생명The스마트한통합종신보험무배당',
    terms: '일시납',
    amount: '21,600',
    state: {
      label: '완납'
    }
  },
  {
    link: '#',
    name: '한화생명 미래로기업복지',
    terms: '월',
    amount: '50,600',
    state: {
      warn: true,
      label: '미납'
    }
  },
  {
    link: '#',
    name: 'LIFEPLUS 버킷리스트저축(무)',
    terms: '월',
    amount: '100,000',
    state: {}
  }
];
const LoanArr = [
  {
    link: '#',
    name: 'LIFEPLUS 오마이픽 암보험',
    terms: '일시납',
    amount: '21,600',
    state: {}
  },
  {
    link: '#',
    name: '한화생명 미래로기업복지',
    terms: '월',
    amount: '50,600',
    state: {}
  }
];
