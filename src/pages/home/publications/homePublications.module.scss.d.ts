declare namespace HomePublicationsModuleScssNamespace {
  export interface IHomePublicationsModuleScss {
    root: string;
  }
}

declare const HomePublicationsModuleScssModule: HomePublicationsModuleScssNamespace.IHomePublicationsModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomePublicationsModuleScssNamespace.IHomePublicationsModuleScss;
};

export = HomePublicationsModuleScssModule;
