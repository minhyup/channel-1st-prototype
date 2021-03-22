import { useEffect, useState } from 'react';
import { INatvieProps } from '@/types/native';

export default function useNative() {
  const [resData, setResData] = useState('');

  const NATIVE_UTILS2 = {
    callNative({ params }: INatvieProps): void {
      console.log('native 연동');
      const query = btoa(encodeURIComponent(JSON.stringify(params)));

      // Android
      if (window.AndroidBridge) {
        window.AndroidBridge.callNativeMethod('native://callNative?' + query);
      } else if (/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
        console.log(navigator.userAgent);
        console.log(window.webkit);
        window.webkit.messageHandlers['callNative'].postMessage(query);
        //window.webkit.messageHandlers.callNative.postMessage(query);
      } else {
        alert('Native calls are not supported.');
      }
    },
    callBack(data: any): void {
      setResData(data);
      console.log(`data는? ${data}`);
      alert(`data는? ${data}`);
    }
  };

  useEffect(() => {
    window.NATIVE_UTILS2 = NATIVE_UTILS2;
    //window.setResData = setResData;
  }, []);

  return {
    call: NATIVE_UTILS2.callNative,
    then: NATIVE_UTILS2.callBack,
    resData
  };
}
