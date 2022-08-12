declare namespace HeaderModuleScssNamespace {
  export interface IHeaderModuleScss {
    logo: string;
    name: string;
    root: string;
    tomain: string;
  }
}

declare const HeaderModuleScssModule: HeaderModuleScssNamespace.IHeaderModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HeaderModuleScssNamespace.IHeaderModuleScss;
};

export = HeaderModuleScssModule;
