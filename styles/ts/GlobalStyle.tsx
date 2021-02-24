import React from 'react';
import { Global, css } from '@emotion/react';

export const GlobalStyles: React.FC = () => {
  return (
    <>
      <Global
        styles={css`
          @font-face {
            font-family: Lato;
            src: local(Lato), url(/font/Lato/Lato-Light.ttf) format('truetype');
            font-weight: 300;
          }
          @font-face {
            font-family: Lato;
            src: local(Lato), url(/font/Lato/Lato-Regular.ttf) format('truetype');
            font-weight: 400;
          }
          @font-face {
            font-family: Lato;
            src: local(Lato), url(/font/Lato/Lato-Bold.ttf) format('truetype');
            font-weight: 700;
          }

          body,
          button,
          dd,
          dl,
          dt,
          fieldset,
          form,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          input,
          legend,
          li,
          ol,
          p,
          select,
          table,
          td,
          textarea,
          th,
          ul {
            margin: 0;
            padding: 0;
          }

          body,
          button,
          h1,
          h2,
          h3,
          h4,
          h5,
          input,
          select,
          table,
          textarea {
            font-family: -apple-system, system-ui, HelveticaNeue, AppleSDGothicNeo, sans-serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
          }

          body {
            position: relative;
            background-color: #f6f6f6;
            color: #000;
            word-break: break-all;
            -webkit-text-size-adjust: none;
          }

          table {
            border-collapse: collapse;
          }

          fieldset,
          img {
            border: 0;
          }

          ol,
          ul {
            list-style: none;
          }

          address,
          em {
            font-style: normal;
          }

          a {
            color: inherit;
            text-decoration: none;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
          }

          img {
            vertical-align: top;
          }

          mark {
            color: inherit;
            font-weight: 700;
            background: 0 0;
          }

          button,
          input {
            -webkit-border-radius: 0;
            border-radius: 0;
            background: 0 0;
          }

          .blind {
            position: absolute;
            clip: rect(0 0 0 0);
            width: 1px;
            height: 1px;
            margin: -1px;
            overflow: hidden;
          }

          .blind::before {
            display: block;
            width: 0;
            height: 0;
            content: '\\00a0';
            font-size: 0;
          }

          .wrap {
            overflow: hidden;
            position: relative;
            padding: 20px 0;
          }
        `}
      />
    </>
  );
};
