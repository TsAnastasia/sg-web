import { SectionsEnum } from "../../../assets/types/sections";
import Title from "../../../components/Title/Title";
import AppButton from "../../../components/UI/buttons/app/AppButton";
import scss from "./homeEducation.module.scss";

const HomeEducation = () => {
  return (
    <section id={SectionsEnum.EDUCATION} className={scss.root}>
      <Title>
        ОБР<span>А</span>ЗОВАНИЕ
      </Title>
      <p>description</p>
      <div>article</div>
      <div>switcher</div>
      <AppButton></AppButton>
    </section>
  );
};

export default HomeEducation;
