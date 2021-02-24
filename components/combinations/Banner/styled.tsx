import styled from '@emotion/styled';

const Banner = styled.a`
  display: flex;
  margin: 0 20px 20px;
  padding: 0 24px;
  min-height: 100px;
  align-items: center;
  border-radius: 14px;
  background-color: #eee;
`;

const BannerTitle = styled.div`
  flex: 1;
`;

const BannerSub = styled.em`
  display: block;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: #999;
`;

const BannerMain = styled.strong`
  display: block;
  padding-top: 6px;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.7px;
  color: #000;
`;

export { Banner, BannerTitle, BannerMain, BannerSub };
