import { IAboutCard } from "../types/card";
import DesignIcon from "@mui/icons-material/SportsEsports";
import MachineLearningIcon from "@mui/icons-material/Psychology";
import DatabasesIcon from "@mui/icons-material/Ballot";
import RoboticsIcon from "@mui/icons-material/Android";
import DesignImage from "../images/about/design.png";
import MachineLearningImage from "../images/about/machine_learning.png";
import DatabasesImage from "../images/about/databases.png";
import RoboticsImage from "../images/about/robotics.png";

export const ABOUT_CARDS: IAboutCard[] = [
  {
    id: "design",
    title: "Проектирование",
    description:
      "Направление включает в себя исследования и разработки технологий МО и КТ",
    Icon: DesignIcon,
    background: DesignImage,
  },
  {
    id: "machine_learning",
    title: "Машинное обучение",
    description:
      "Направление включает в себя исследования и разработки технологий МО и КТ",
    Icon: MachineLearningIcon,
    background: MachineLearningImage,
  },
  {
    id: "databases",
    title: "Базы данных",
    description:
      "Направление включает в себя исследования и разработки технологий МО и КТ",
    Icon: DatabasesIcon,
    background: DatabasesImage,
  },
  {
    id: "robotics",
    title: "Робототехника",
    description:
      "Направление включает в себя исследования и разработки технологий МО и КТ",
    Icon: RoboticsIcon,
    background: RoboticsImage,
  },
];
