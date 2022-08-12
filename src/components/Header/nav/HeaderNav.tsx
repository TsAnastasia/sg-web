import HeaderNavItem from "./item/HeaderNavItem";
import scss from "./headerNav.module.scss";
import { HEADER_NAV } from "../../../assets/types/sections";

const HeaderNav = () => (
  <nav className={scss.root}>
    <ul className={scss.list}>
      {HEADER_NAV.map((item) => (
        <HeaderNavItem key={item.id} {...item} />
      ))}
    </ul>
  </nav>
);

export default HeaderNav;
