declare namespace HeaderNavItemModuleScssNamespace {
  export interface IHeaderNavItemModuleScss {
    item: string;
    menu: string;
    name: string;
    root: string;
  }
}

declare const HeaderNavItemModuleScssModule: HeaderNavItemModuleScssNamespace.IHeaderNavItemModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HeaderNavItemModuleScssNamespace.IHeaderNavItemModuleScss;
};

export = HeaderNavItemModuleScssModule;
