declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";
declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        gtag: (...args: any[]) => void;
    }
}

declare module "*.svg" {
    const content: string; // Type depends on how SVGs are used...
    export default content;
  }