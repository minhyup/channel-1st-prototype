import React from 'react';
import ToastPopup from '.';

export default {
  title: '채널 통합/공통UI'
};

const TemplatToast = (args) => <ToastPopup {...args} />;

export const Toast = TemplatToast.bind({});
Toast.args = {
  message: '김한화님, 반갑습니다!'
};
