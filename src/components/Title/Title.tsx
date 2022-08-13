import { FC, ReactNode } from "react";
import { cl } from "../../assets/utils/classnames";
import scss from "./title.module.scss";

const Title: FC<{ className?: string; children: ReactNode }> = ({
  className,
  children,
}) => <h2 className={cl(className, scss.root)}>{children}</h2>;

export default Title;
