import React from 'react';
import styled from '@emotion/styled';

const Arrow = styled.svg`
  stroke: ${(props) => props.stroke || '#666'};
`;

function IcoArrow(props): React.ReactElement {
  return (
    <Arrow xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke={props.stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 7l5 5-5 5" />
    </Arrow>
  );
}

function IcoNotice(): React.ReactElement {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="10" fill="#FFE0CC" />
      <path fill="#F60" d="M6 9c0-2.21 1.79-4 4-4s4 1.79 4 4v4H6V9z" />
      <rect width="10" height="1" x="5" y="13" fill="#F60" rx=".5" />
      <circle cx="10" cy="14" r="1.5" fill="#F60" />
    </svg>
  );
}

export { IcoArrow, IcoNotice };
