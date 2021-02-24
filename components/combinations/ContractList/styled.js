import styled from '@emotion/styled';

const ContractList = styled.ul`
  padding: 8px 0;
  margin: 0 24px;

  a + & {
    border-top: 1px solid #eee;
  }

  &:first-of-type {
    padding-top: 16px;
  }

  &:last-child {
    padding-bottom: 16px;
  }
`;

export { ContractList };
