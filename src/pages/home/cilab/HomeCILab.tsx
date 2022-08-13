import { SectionsEnum } from "../../../assets/types/sections";
import Title from "../../../components/Title/Title";
import AppButton from "../../../components/UI/buttons/app/AppButton";
import scss from "./homeCILab.module.scss";

const HomeCILab = () => (
  <section id={SectionsEnum.CILAB} className={scss.root}>
    <Title>
      CI<span className={scss.lab}>Lab</span>
    </Title>
    <div className={scss.content}>
      <div className={scss.about}>
        <p className={scss.info}>
          CILab – центр национальной технологической инициативы (НТИ),
          получивший государственную поддержку по направлению «Технологии
          машинного обучения и когнитивные технологии».
        </p>
        <p className={scss.aspect}>
          Мы изучаем проблемы и выявляем, когда мы работаем вместе с нашими
          клиентами, новые решения находят, не задумываясь. Работая таким
          образом и проявляя гибкость, мы можем поддерживать новый подход для
          удовлетворения потребностей наших клиентов.
        </p>
        {/* TODO: add cilab link  */}
        <AppButton>О ЛАБОРАТОРИИ &rarr;</AppButton>
      </div>
      {/* TODO: add images layout */}
      <ul className={scss.images}></ul>
    </div>
  </section>
);

export default HomeCILab;
