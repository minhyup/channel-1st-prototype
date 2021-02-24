import React from 'react';
import { storiesOf } from '@storybook/react';
import Number from '../Number';
import Card from '.';

storiesOf('채널 통합/공통UI', module).add('Card', () => (
  <Card>
    <Number>1234567890</Number>가나다라마바사아자차카타파하
  </Card>
));
