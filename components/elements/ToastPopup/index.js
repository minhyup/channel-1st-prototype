import React from 'react';
import * as styled from './styled';

export default function ToastPopup(props): React.ReactElement {
  return (
    <styled.Toast>
      <styled.ToastMessage>{props.message}</styled.ToastMessage>
    </styled.Toast>
  );
}
