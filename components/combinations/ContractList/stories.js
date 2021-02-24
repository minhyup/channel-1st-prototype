import React from 'react';
import { storiesOf } from '@storybook/react';
import TemplateContractList from '.';

export default {
  title: '채널 통합/리스트'
};

let list = [
  {
    link: '#',
    name: '한화생명The스마트한통합종신보험무배당',
    terms: '일시납',
    amount: '21,600',
    state: {
      warn: false,
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
    name: 'LIFEPLUS 오마이픽 암보험',
    terms: '월',
    amount: '50,600',
    state: {}
  },
  {
    link: '#',
    name: '개인형(IRP)',
    state: {
      label: '2건'
    }
  }
];

storiesOf('채널 통합/리스트', module).add('Contract List', () => <TemplateContractList list={list} />);
