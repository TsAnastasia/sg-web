declare namespace HomeCiLabModuleScssNamespace {
  export interface IHomeCiLabModuleScss {
    about: string;
    aspect: string;
    content: string;
    images: string;
    info: string;
    lab: string;
    root: string;
  }
}

declare const HomeCiLabModuleScssModule: HomeCiLabModuleScssNamespace.IHomeCiLabModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomeCiLabModuleScssNamespace.IHomeCiLabModuleScss;
};

export = HomeCiLabModuleScssModule;
