export = global;
declare global {
  interface Window {
    AndroidBridge: any;
    webkit: any;
    NATIVE_UTILS: any;
  }
}
export interface INatvieProps {
  params: {
    command: string;
    args: Record<string, unknown>;
    //callback: string;
    callback?: (data: any) => void;
    callbackScriptName?: string;
  };
}
