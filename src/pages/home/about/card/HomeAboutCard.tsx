import { FC } from "react";
import { IAboutCard } from "../../../../assets/types/card";
import scss from "./homeAboutCard.module.scss";

const HomeAboutCard: FC<IAboutCard> = ({
  title,
  description,
  Icon,
  background,
}) => (
  <article
    style={{ backgroundImage: `url(${background})` }}
    className={scss.root}
  >
    <h3>{title}</h3>
    <div className={scss.icon}>
      <Icon className={scss.svg} />
    </div>
    <p className={scss.text}>{description}</p>
    <button type="button" className={scss.more}>
      Подробнее
    </button>
  </article>
);

export default HomeAboutCard;
