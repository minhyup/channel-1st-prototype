import React from 'react';
import { Banner, BannerSub, BannerTitle, BannerMain } from './styled';

interface IBannerProps {
  link?: string;
  subTitle: string;
  mainTitle: string;
  src: string;
  width: string;
  height: string;
}

export default function BannerComponent({ link, subTitle, mainTitle, src, width, height }: IBannerProps): React.ReactElement {
  return (
    <Banner href={link} onClick={(e) => e.preventDefault()}>
      <BannerTitle>
        <BannerSub>{subTitle}</BannerSub>
        <BannerMain>{mainTitle}</BannerMain>
      </BannerTitle>
      <img src={src} width={width} height={height} />
    </Banner>
  );
}
