import Title from "../../../components/Title/Title";
import scss from "./homePartners.module.scss";

const HomePartners = () => (
  <section className={scss.root}>
    <Title>
      с кем мы <span>работаем</span>?
    </Title>
    <div>list</div>
    <p>info</p>
  </section>
);

export default HomePartners;
