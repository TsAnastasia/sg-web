declare namespace HomeTeamModuleScssNamespace {
  export interface IHomeTeamModuleScss {
    root: string;
  }
}

declare const HomeTeamModuleScssModule: HomeTeamModuleScssNamespace.IHomeTeamModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomeTeamModuleScssNamespace.IHomeTeamModuleScss;
};

export = HomeTeamModuleScssModule;
