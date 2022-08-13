declare namespace HomeContactsModuleScssNamespace {
  export interface IHomeContactsModuleScss {
    root: string;
  }
}

declare const HomeContactsModuleScssModule: HomeContactsModuleScssNamespace.IHomeContactsModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomeContactsModuleScssNamespace.IHomeContactsModuleScss;
};

export = HomeContactsModuleScssModule;
