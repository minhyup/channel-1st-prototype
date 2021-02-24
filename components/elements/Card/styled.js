import styled from '@emotion/styled';

const Card = styled.div`
  overflow: hidden;
  margin: 0 20px 20px;
  background-color: #fff;
  border-radius: 14px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.06);
  color: ${(prorps) => prorps.theme.light.bgColor};
`;

export { Card };
