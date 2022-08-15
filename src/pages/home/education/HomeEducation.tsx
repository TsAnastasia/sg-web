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
      <p className={scss.info}>
        В образовательной деятельности НЦКР активно использует существующую в
        Университете ИТМО инфраструктуру и опыт реализации сетевых форм
        обучения, опираясь на вузы-диссеминаторы (ННГУ, ДВФУ, ФГБОУ ВО «МГТУ
        «СТАНКИН», НовГУ), а также профильную компанию ООО «НЦЭО» в области
        электронного и дистанционного образования. Реализуются образовательные
        программы различных форматов.
      </p>
      {/* TODO: educations articles */}
      <div className={scss.article}>article</div>
      <div>switcher</div>
      <AppButton></AppButton>
    </section>
  );
};

export default HomeEducation;
