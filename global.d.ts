declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";
declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        gtag: (...args: any[]) => void;
    }
}