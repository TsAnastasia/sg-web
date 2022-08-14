declare namespace HomeProjectsModuleScssNamespace {
  export interface IHomeProjectsModuleScss {
    list: string;
    root: string;
  }
}

declare const HomeProjectsModuleScssModule: HomeProjectsModuleScssNamespace.IHomeProjectsModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomeProjectsModuleScssNamespace.IHomeProjectsModuleScss;
};

export = HomeProjectsModuleScssModule;
