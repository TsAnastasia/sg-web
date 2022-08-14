declare namespace HomeProjectsSwitcherModuleScssNamespace {
  export interface IHomeProjectsSwitcherModuleScss {
    item: string;
    root: string;
  }
}

declare const HomeProjectsSwitcherModuleScssModule: HomeProjectsSwitcherModuleScssNamespace.IHomeProjectsSwitcherModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomeProjectsSwitcherModuleScssNamespace.IHomeProjectsSwitcherModuleScss;
};

export = HomeProjectsSwitcherModuleScssModule;
