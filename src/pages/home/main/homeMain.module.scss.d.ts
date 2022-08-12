declare namespace HomeMainModuleScssNamespace {
  export interface IHomeMainModuleScss {
    root: string;
  }
}

declare const HomeMainModuleScssModule: HomeMainModuleScssNamespace.IHomeMainModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomeMainModuleScssNamespace.IHomeMainModuleScss;
};

export = HomeMainModuleScssModule;
