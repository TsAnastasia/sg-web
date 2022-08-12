declare namespace SocialsModuleScssNamespace {
  export interface ISocialsModuleScss {
    icon: string;
    item: string;
    link: string;
    root: string;
  }
}

declare const SocialsModuleScssModule: SocialsModuleScssNamespace.ISocialsModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SocialsModuleScssNamespace.ISocialsModuleScss;
};

export = SocialsModuleScssModule;
