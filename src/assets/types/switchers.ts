export enum ProjectsSwitcherEnum {
  ALL = "all",
  STATE = "state",
  SPECIAL = "special",
  WORKING = "working",
}

export const PROJECTS_SWITCHERS: { [key in ProjectsSwitcherEnum]: string } = {
  all: "все проекты",
  state: "ГОС.ПРОЕКТЫ",
  special: "СПЕЦ.ПРОГРАММЫ",
  working: "в разработке",
};
