import React from 'react';
import Number from '../Number';
import * as styled from './styled';

export default function Button(props): React.ReactElement {
  let price = '';

  if (props.amount) {
    price = <Number>{props.amount}</Number>;
  }
  return (
    <styled.Button href={props.link} fill={props.fill}>
      {price}
      {props.label}
    </styled.Button>
  );
}
