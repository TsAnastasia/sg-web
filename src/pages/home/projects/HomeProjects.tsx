import { SectionsEnum } from "../../../assets/types/sections";
import Title from "../../../components/Title/Title";
import scss from "./homeProjects.module.scss";

const HomeProjects = () => (
  <section id={SectionsEnum.PROJECTS} className={scss.root}>
    <Title>
      НАШИ <span>ПРОЕКТЫ</span>
    </Title>
    <div>switcher</div>
    <div>images</div>
  </section>
);

export default HomeProjects;
