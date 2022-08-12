import { SectionsEnum } from "../../../assets/types/sections";
import scss from "./homeMain.module.scss";

const HomeMain = () => (
  <section className={scss.root} id={SectionsEnum.MAIN}></section>
);

export default HomeMain;
