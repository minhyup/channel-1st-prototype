import styled from '@emotion/styled';
import ColorSet from '../ColorSet';

const Button = styled.a`
  display: block;
  margin: 0 4px;
  border: 1px solid ${ColorSet.hanwha};
  font-size: 15px;
  line-height: 48px;
  letter-spacing: -0.6px;
  color: #fff;
  text-align: center;
  border-radius: 8px;
  background-color: ${(props) => (props.fill ? ColorSet.hanwha : '')};
  color: ${(props) => (props.fill ? '#fff' : ColorSet.hanwha)};
  flex: 1;
`;

export { Button };
