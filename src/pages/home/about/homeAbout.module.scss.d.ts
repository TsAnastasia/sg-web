declare namespace HomeAboutModuleScssNamespace {
  export interface IHomeAboutModuleScss {
    description: string;
    item: string;
    list: string;
    root: string;
  }
}

declare const HomeAboutModuleScssModule: HomeAboutModuleScssNamespace.IHomeAboutModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomeAboutModuleScssNamespace.IHomeAboutModuleScss;
};

export = HomeAboutModuleScssModule;
