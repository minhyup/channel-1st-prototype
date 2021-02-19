//declare let window: Window & { AndroidBridge: any };
export = global;
declare global {
  interface Window {
    AndroidBridge: any;
  }
}
// }
// window.AndroidBridge = window.AndroidBridge || 'SomeValue';
// declare global {
//   interface Window {
//     AndroidBridge: string;
//   }
// }

// window.AndroidBridge = window.AndroidBridge || 'SomeValue';
