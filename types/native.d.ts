export = global;
declare global {
  interface Window {
    AndroidBridge: any;
    webkit: any;
  }
}