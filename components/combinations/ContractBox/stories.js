import React from 'react';
import { storiesOf } from '@storybook/react';
import ContractBox from '.';

let info = {
  link: '#',
  name: '한화생명The스마트한통합종신보험무배당',
  terms: '일시납',
  amount: '21,600',
  state: {
    warn: false,
    label: '완납',
  },
}

storiesOf('채널 통합/리스트', module)
  .add('Contract Box', ()=><ContractBox {...info} />);