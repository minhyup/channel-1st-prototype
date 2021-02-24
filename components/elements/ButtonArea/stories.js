import React from 'react';
import ButtonArea from '.';

export default {
  title: '채널 통합/공통UI'
};

const TemplateButton = (args) => <ButtonArea {...args} />;

export const Button = TemplateButton.bind({});
Button.args = {
  items: [
    {
      fill: true,
      link: '#',
      amount: '781',
      label: '만원 추가대출 받기'
    }
  ]
};

export const MultipleButton = TemplateButton.bind({});
MultipleButton.args = {
  items: [
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
  ]
};
