import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

interface I extends ButtonProps {
  active: boolean;
}

// eslint-disable-next-line  @typescript-eslint/no-unused-vars
const SwitcherButton = styled(({ active, ...props }: I) => {
  return <Button {...props} />;
})(({ active }) => ({
  padding: 4,
  minWidth: 140,
  boxSizing: "border-box",

  fontFamily: "'Open Sans'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 12,
  lineHeight: "15px",
  letterSpacing: "0.1px",

  color: active ? "#FFFFFF" : "#000000",
  background: active ? "#04727E" : "#F1F1F1",
  border: 0,
  borderRadius: 3,

  "&:hover": {
    background: active ? "rgba(4, 114, 126, 0.6)" : "rgba(241, 241, 241, 0.6)",
  },
}));

export default SwitcherButton;
