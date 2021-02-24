import React from 'react';
import { Lato } from './styled';

interface INumberProps {
  children: React.ReactNode;
}

export default function Number({ children, ...props }: INumberProps): React.ReactElement {
  return <Lato {...props}>{children}</Lato>;
}
