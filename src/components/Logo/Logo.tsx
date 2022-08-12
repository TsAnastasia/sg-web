import { FC } from "react";

const Logo: FC<{ className?: string }> = ({ className }) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 42 28"
    className={className}
  >
    <path d="M2 16h16V0M31.717 6.597 22 16.313l9.343 9.344" stroke="#fff" />
    <circle cx="20" cy="16" r="11.5" stroke="#fff" />
    <path
      d="M31.5 16c0-2.612-.583-4.53-2-6.5l-7.087 6.598L29 23c1.867-2.115 2.5-3.957 2.5-7Z"
      fill="#07C2D5"
    />
    <circle cx="2" cy="16" r="2" fill="#04727E" />
    <circle cx="36" cy="9" r="2" fill="#0160A7" />
    <circle cx="39" cy="12" r="2" fill="#A70101" />
    <circle cx="35" cy="13" r="2" fill="#FFE600" />
  </svg>
);

export default Logo;
