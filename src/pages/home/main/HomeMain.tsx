import { SectionsEnum } from "../../../assets/types/sections";
import AppButton from "../../../components/UI/buttons/app/AppButton";
import scss from "./homeMain.module.scss";

const HomeMain = () => (
  <section className={scss.root} id={SectionsEnum.MAIN}>
    <div className={scss.wrapper}>
      <h1 className={scss.title}>
        Когнитивнные технологии,{" "}
        <span className={scss.light}>машинное обучение</span>
      </h1>
      <p className={scss.info}>Системы прикладного искусственного интеллекта</p>
      {/* TODO: add link path */}
      <AppButton>НАШИ ПРОЕКТЫ &rarr;</AppButton>
    </div>

    {/* TODO: last news */}
    {/* <div>
      <p>Последние новости </p>
      <p>
        Журнал «Научно-технический вестник информационных технологий, механики и
        оптики»
      </p>
      <p>
        Обзорная статья, посвященная актуальным фундаментальным проблемам науки
        о наносистемах.
      </p>
      <p>12.06.2020</p>
    </div> */}
  </section>
);

export default HomeMain;
