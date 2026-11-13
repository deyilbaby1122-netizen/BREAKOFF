/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare module '*.css' {
  interface CSSModule {
    readonly [key: string]: string;
  }
  const classes: CSSModule;
  export default classes;
}
