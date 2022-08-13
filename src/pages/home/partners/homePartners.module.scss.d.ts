declare namespace HomePartnersModuleScssNamespace {
  export interface IHomePartnersModuleScss {
    root: string;
  }
}

declare const HomePartnersModuleScssModule: HomePartnersModuleScssNamespace.IHomePartnersModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomePartnersModuleScssNamespace.IHomePartnersModuleScss;
};

export = HomePartnersModuleScssModule;
