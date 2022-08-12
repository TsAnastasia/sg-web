export enum SectionsEnum {
  MAIN = "main",
  ABOUT = "about",
  CILAB = "cilab",
  PROJECTS = "projects",
  EDUCATION = "education",
  PUBLICATIONS = "publications",
  TEAM = "team",
  CONTACTS = "contacts",
}

export interface IHeaderNavLink {
  id: SectionsEnum;
  name: string;
  children?: string[];
}

export const HEADER_NAV: IHeaderNavLink[] = [
  { id: SectionsEnum.MAIN, name: "Главная" },
  { id: SectionsEnum.ABOUT, name: "О нас" },
  { id: SectionsEnum.CILAB, name: "CILab" },
  { id: SectionsEnum.PROJECTS, name: "Проекты" },
  {
    id: SectionsEnum.EDUCATION,
    name: "Образование",
    children: ["Аспирантура", "Магистратура"],
  },
  { id: SectionsEnum.PUBLICATIONS, name: "Публикации" },
  { id: SectionsEnum.TEAM, name: "Команда" },
  { id: SectionsEnum.CONTACTS, name: "Контакты" },
];
