import styled from '@emotion/styled';
import Number from '../../elements/Number';

const CardTop = styled.a`
  display: block;
  padding: 24px 24px 16px;
`;

const TopTitle = styled.div`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.6px;
  color: #000;
`;

const TopAmount = styled.div`
  position: relative;
  padding-right: 16px;
  font-size: 22px;
  line-height: 34px;
  letter-spacing: -0.8px;
  color: #000;
`;

const Amount = styled(Number)`
  font-size: 24px;
  vertical-align: top;
`;

const TopArrow = styled.div`
  position: absolute;
  top: 5px;
  right: -8px;
  line-height: 0;
`;

export { CardTop, TopTitle, TopAmount, Amount, TopArrow };
