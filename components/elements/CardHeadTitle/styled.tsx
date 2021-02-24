import styled from '@emotion/styled';
import Number from '../Number/index';
import ColorSet from '../ColorSet';

const TitleArea = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 20px 0;
  align-items: center;
  box-sizing: border-box;
`;

const Title = styled.h2`
  padding: 0 4px;
  font-weight: bold;
  font-size: 20px;
  line-height: 50px;
  color: #000;
  letter-spacing: -0.8px;
  flex: 1;
`;

const Total = styled(Number)`
  margin-left: 4px;
  font-size: 20px;
  color: ${ColorSet.hanwha};
  vertical-align: 0;
`;

const TitleLink = styled.a`
  padding: 0 4px;
  font-size: 14px;
  line-height: 50px;
  color: #999;
  letter-spacing: -0.5px;
  text-decoration: underline;
`;

export { TitleArea, Title, Total, TitleLink };
