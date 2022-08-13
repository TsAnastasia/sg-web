import { SectionsEnum } from "../../../assets/types/sections";
import Title from "../../../components/Title/Title";
import AppButton from "../../../components/UI/buttons/app/AppButton";
import scss from "./homePublications.module.scss";

const HomePublications = () => (
  <section id={SectionsEnum.PUBLICATIONS} className={scss.root}>
    <Title>
      ПУБЛИК<span>А</span>ЦИИ
    </Title>
    <div>list</div>
    <AppButton></AppButton>
  </section>
);

export default HomePublications;
