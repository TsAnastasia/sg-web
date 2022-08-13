declare namespace HomeAboutCardModuleScssNamespace {
  export interface IHomeAboutCardModuleScss {
    icon: string;
    more: string;
    root: string;
    svg: string;
    text: string;
    title: string;
  }
}

declare const HomeAboutCardModuleScssModule: HomeAboutCardModuleScssNamespace.IHomeAboutCardModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomeAboutCardModuleScssNamespace.IHomeAboutCardModuleScss;
};

export = HomeAboutCardModuleScssModule;
