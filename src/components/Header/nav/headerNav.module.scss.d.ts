declare namespace HeaderNavModuleScssNamespace {
  export interface IHeaderNavModuleScss {
    list: string;
    root: string;
  }
}

declare const HeaderNavModuleScssModule: HeaderNavModuleScssNamespace.IHeaderNavModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HeaderNavModuleScssNamespace.IHeaderNavModuleScss;
};

export = HeaderNavModuleScssModule;
