import styled from '@emotion/styled';
import Number from '../../elements/Number';
import ColorSet from '../../elements/ColorSet';

const ContractBox = styled.a`
  display: block;
  padding: 8px 0;
`;

const ContractInfo = styled.div`
  position: relative;
  overflow: hidden;
  padding-right: 16px;
`;

const ContractName = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.6px;
  color: #333;
`;

const ContractState = styled.em`
  float: right;
  margin-left: 4px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: ${(props) => {
    if (props.warn === true) {
      return ColorSet.negative;
    } else if (props.warn === false) {
      return ColorSet.positive;
    }
    return ColorSet.dimmed;
  }};
`;

const ContractArrow = styled.div`
  position: absolute;
  top: 0;
  right: -8px;
  line-height: 0;
`;

const ContractAmount = styled.div`
  padding-top: 4px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: #666;
`;

const Amount = styled.em`
  {Number}
  display: inline-block;
  margin-left: 4px;
  vertical-align: top;
`;

export { ContractBox, ContractInfo, ContractName, ContractState, ContractArrow, ContractAmount, Amount };
