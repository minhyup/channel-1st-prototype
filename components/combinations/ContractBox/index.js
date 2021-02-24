// import React from 'react';
// import * as styled from '../ContractBox/styled';
// import * as SVG from '../../elements/SVGManager';

// export default function CardTop(props): React.ReactElement {
//   let terms = '';

//   if (props.terms) {
//     terms = (
//       <styled.ContractAmount>
//         {props.terms}
//         <styled.Amount>{props.amount}</styled.Amount>원
//       </styled.ContractAmount>
//     );
//   }

//   return (
//     <styled.ContractBox href={props.link}>
//       <styled.ContractInfo>
//         <styled.ContractArrow>
//           <SVG.IcoArrow />
//         </styled.ContractArrow>
//         <styled.ContractState warn={props.state.warn}>{props.state.label}</styled.ContractState>
//         <styled.ContractName>{props.name}</styled.ContractName>
//       </styled.ContractInfo>
//       {terms}
//     </styled.ContractBox>
//   );
// }
