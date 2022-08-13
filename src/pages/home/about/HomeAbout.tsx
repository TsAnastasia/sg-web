import { ABOUT_CARDS } from "../../../assets/data/aboutCards";
import { SectionsEnum } from "../../../assets/types/sections";
import Title from "../../../components/Title/Title";
import HomeAboutCard from "./card/HomeAboutCard";
import scss from "./homeAbout.module.scss";

const HomeAbout = () => {
  return (
    <section id={SectionsEnum.ABOUT} className={scss.root}>
      <Title>
        Несколько слов <span>о нас</span>
      </Title>
      <p className={scss.description}>
        Национальный центр когнитивных разработок – центр национальной
        технологической инициативы (НТИ), получивший государственную поддержку
        по направлению «Технологии машинного обучения и когнитивные технологии».
      </p>
      <ul className={scss.list}>
        {ABOUT_CARDS.map((card) => (
          <li key={card.id} className={scss.item}>
            <HomeAboutCard {...card} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomeAbout;
