import { FC } from "react";
import { IHeaderNavLink } from "../../../../assets/types/sections";
import scss from "./headerNavItem.module.scss";

const HeaderNavItem: FC<IHeaderNavLink> = ({ id, name, children }) => {
  return (
    <li className={scss.root}>
      <a href={`#${id}`} className={scss.name}>
        {name}

        {children && (
          <ul className={scss.menu}>
            {children.map((item) => (
              <li key={item}>
                <p className={scss.item}>{item}</p>
              </li>
            ))}
          </ul>
        )}
      </a>
    </li>
  );
};

export default HeaderNavItem;
