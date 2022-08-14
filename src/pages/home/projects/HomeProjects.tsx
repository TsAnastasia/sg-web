import { SectionsEnum } from "../../../assets/types/sections";
import Title from "../../../components/Title/Title";
import scss from "./homeProjects.module.scss";
import HomeProjectsSwitcher from "./swither/HomeProjectsSwitcher";

const HomeProjects = () => (
  <section id={SectionsEnum.PROJECTS} className={scss.root}>
    <Title>
      НАШИ <span>ПРОЕКТЫ</span>
    </Title>
    <HomeProjectsSwitcher />
    {/* TODO: create projects card carousel */}
    <div className={scss.list}>projects card</div>
  </section>
);

export default HomeProjects;
