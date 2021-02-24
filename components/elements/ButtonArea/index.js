import React from 'react';
import Button from '../Button';
import * as styled from './styled';

export default function ButtonArea(props): React.ReactElement {
  let count = 0;

  return (
    <styled.ButtonArea>
      {props.items.map((item) => (
        <Button key={count++} {...item} />
      ))}
    </styled.ButtonArea>
  );
}
