import React from 'react';
import { TitleArea, Title, Total, TitleLink } from './styled';

interface ICardHeadTitleProps {
  href: string;
  label: string;
  title: string;
  total: string;
  link?: string;
}

export default function CardHeadTitle({ href, label, title, total }: ICardHeadTitleProps): React.ReactElement {
  return (
    <TitleArea>
      <Title>
        {title}
        <Total>{total}</Total>
      </Title>
      {href && <TitleLink href={href}>{label}</TitleLink>}
    </TitleArea>
  );
}
