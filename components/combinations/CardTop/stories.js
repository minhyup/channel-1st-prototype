import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../../elements/Card';
import CardTop from '.';

let info = {
  title: '월 보험료',
  amount: '307,692',
  link: '#'
};

storiesOf('채널 통합/카드', module).add('Card Top', () => (
  <Card>
    <CardTop {...info} />
  </Card>
));
