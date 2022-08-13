import { SectionsEnum } from "../../../assets/types/sections";
import Title from "../../../components/Title/Title";
import scss from "./homeContacts.module.scss";

const HomeContacts = () => (
  <section id={SectionsEnum.CONTACTS} className={scss.root}>
    <Title>контакты</Title>
    <div>adress</div>
    <div>form</div>
  </section>
);

export default HomeContacts;
