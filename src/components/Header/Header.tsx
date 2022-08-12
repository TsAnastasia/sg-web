import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { AppRoutes } from "../../router/routers";
import Socials from "../Socials/Socials";
import scss from "./header.module.scss";
import HeaderNav from "./nav/HeaderNav";

const Header = () => (
  <header className={scss.root}>
    <Link to={AppRoutes.HOME} className={scss.tomain}>
      <Logo className={scss.logo} />
      <span className={scss.name}>{"<SG WEB>"}</span>
    </Link>
    <HeaderNav />
    <Socials />
  </header>
);

export default Header;
