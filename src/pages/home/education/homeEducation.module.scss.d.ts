declare namespace HomeEducationModuleScssNamespace {
  export interface IHomeEducationModuleScss {
    root: string;
  }
}

declare const HomeEducationModuleScssModule: HomeEducationModuleScssNamespace.IHomeEducationModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomeEducationModuleScssNamespace.IHomeEducationModuleScss;
};

export = HomeEducationModuleScssModule;
