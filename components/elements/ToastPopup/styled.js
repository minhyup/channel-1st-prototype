import styled from '@emotion/styled';

const Toast = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 20px;
  text-align: center;
`;

const ToastMessage = styled.span`
  display: inline-block;
  padding: 9px 30px;
  font-size: 15px;
  line-height: 22px;
  color: #fff;
  text-align: center;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.7);
`;

export { Toast, ToastMessage };
