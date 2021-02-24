import React from 'react';
import * as SVG from '.';

export default {
  title: '채널 통합/SVG Manager'
};

const TemplateTitle = (args) => {
  return (
    <div>
      <SVG.IcoArrow />
      <SVG.IcoNotice />
    </div>
  );
};

export const AllSVG = TemplateTitle.bind({});
AllSVG.args = {};
