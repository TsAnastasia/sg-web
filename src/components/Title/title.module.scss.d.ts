declare namespace TitleModuleScssNamespace {
  export interface ITitleModuleScss {
    root: string;
  }
}

declare const TitleModuleScssModule: TitleModuleScssNamespace.ITitleModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: TitleModuleScssNamespace.ITitleModuleScss;
};

export = TitleModuleScssModule;
