import { INatvieProps } from '@/types/native';

/**
 * 네이티브 연동을 위한 유틸
 */
export const NATIVE_UTILS = {
  /**
   * 네이티브 호출
   * @param param
   */
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
    console.log(`data는? ${data}`);
    alert(`data는? ${data}`);
  }
};
