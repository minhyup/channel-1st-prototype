import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import MyProductIcon from '../../public/svg/myproduct.svg';
import SearchIcon from '../../public/svg/prdsearch.svg';
import MenuIcon from '../../public/svg/menu.svg';
//import Button from '../../components/elements/Button';
import { darken, lighten } from 'polished';
//import { css } from '@emotion/react';
import styled from '@emotion/styled';

//import { window } from '@/types/native';
//import { alert } from '../../types/global';

// declare global {
//   interface Window {
//     AndroidBridge: any;
//   }
// }
// window.AndroidBridge = window.AndroidBridge || 'SomeValue';

const ButtonGroup = styled.div`
  color: tomato;
`;

const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 3rem;
  font-size: 1rem;
  /* 색상 */
  background: #228be6;
  &:hover {
    background: ${lighten(0.1, '#228be6')};
  }
  &:active {
    background: ${darken(0.1, '#228be6')};
  }
`;

export default function Home(): React.ReactElement {
  const router = useRouter();

  const callbackNativeResponse = (data: any) => {
    console.log(`data는? ${data}`);
    alert(`data는? ${data}`);
  };

  //console.log(callbackNativeResponse.toString());
  // const test = eval(callbackNativeResponse.toString());
  // console.log(eval('callbackNativeResponse')('test'));
  //eval(callbackNativeResponse.toString();
  //console.log(callbackNativeResponse);

  // request (Web --> Native)
  const callNative = () => {
    console.log('callNative');

    const jsonObject = {
      command: 'apiRecommended',
      args: { num: 10, str: 'string', bool: true },
      callbackScriptName: 'window.NATIVE_UTILS.callBack'
    };

    const query = btoa(encodeURIComponent(JSON.stringify(jsonObject)));
    // window.
    if (window.AndroidBridge) {
      window.AndroidBridge.callNativeMethod('native://callNative?' + query);
    } else if (/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      window.webkit.messageHandlers['callNative'].postMessage(query);
      //window.location.href = 'native://callNative?' + query;
    } else {
      alert('Native calls are not supported.');
    }
  };

  const callNative2 = () => {
    console.log('callNative2');

    const jsonObject = {
      command: 'apiRecommended',
      args: { num: 10, str: 'string', bool: true },
      callbackScriptName: callbackNativeResponse.toString()
    };

    const query = btoa(encodeURIComponent(JSON.stringify(jsonObject)));
    // window.
    if (window.AndroidBridge) {
      window.AndroidBridge.callNativeMethod('native://callNative?' + query);
    } else if (/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      window.webkit.messageHandlers['callNative'].postMessage(query);
      //window.location.href = 'native://callNative?' + query;
    } else {
      alert('Native calls are not supported.');
    }
  };

  const geDataFromNative = () => {
    console.log('geDataFromNative');
    alert('test');
  };
  return (
    <div className="container">
      <Head>
        <title>리액트!!!</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="menu 페이지" />
        <meta property="og:description" content="menu description" />
      </Head>
      <section>
        <h1>메뉴 페이지 입니다.</h1>
        <ButtonGroup>
          <h1>Web --&gt; Navive Test</h1>
          <Button onClick={callNative}>Native Call</Button>
          <h1>Navive Call Test --&gt; Web</h1>
          <Button onClick={geDataFromNative}>Check the received data</Button>

          <Button onClick={callNative}>Native Call2(window 전용)</Button>
          <Button onClick={callNative2}>Native Call2(toString 전용)</Button>
        </ButtonGroup>
        {/* <div style={{ margin: '50px 0' }}>
          <Button css={buttonStyle}>Web --&gt; Navive Call Test</Button>
        </div>
        <div>
          <Button>Navive Call Test --&gt; Web</Button>
        </div> */}
      </section>

      <footer>
        <button className="icon_text" onClick={() => router.push('/my')}>
          <MyProductIcon />
          <span className="footer_title">나의계약</span>
        </button>
        <button className="icon_text" onClick={() => router.push('/search')}>
          <SearchIcon />
          <span className="footer_title">상품찾기</span>
        </button>
        <button className="icon_text" onClick={() => router.push('/menu')}>
          <MenuIcon />
          <span className="footer_title">메뉴</span>
        </button>
      </footer>
    </div>
  );
}
