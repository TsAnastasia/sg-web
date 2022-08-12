import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import ILinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import React from "react";
import scss from "./socials.module.scss";

const items: {
  id: string;
  link: string;
  Icon: React.ComponentType<{ className?: string }>;
}[] = [
  { id: "telegram", link: "https://web.telegram.org", Icon: TelegramIcon },
  { id: "facebook", link: "https://www.facebook.com", Icon: FacebookIcon },
  {
    id: "linkedin",
    link: "http://ww38.www-linkedin.com",
    Icon: ILinkedInIcon,
  },
  { id: "github", link: "https://github.com", Icon: GitHubIcon },
];

const Socials = () => {
  return (
    <ul className={scss.root}>
      {items.map(({ id, link, Icon }) => (
        <li key={id} className={scss.item}>
          <a href={link} target="_blank" rel="noreferrer" className={scss.link}>
            <Icon className={scss.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
