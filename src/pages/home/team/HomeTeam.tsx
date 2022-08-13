import { SectionsEnum } from "../../../assets/types/sections";
import Title from "../../../components/Title/Title";
import scss from "./homeTeam.module.scss";

const HomeTeam = () => (
  <section id={SectionsEnum.TEAM} className={scss.root}>
    <Title>
      НАША <span>КОМАНДА</span>
    </Title>
    <div>team</div>
  </section>
);

export default HomeTeam;
