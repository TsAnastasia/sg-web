import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

interface I extends ButtonProps {
  to?: string;
}

const AppButton = styled(({ to, variant = "outlined", ...props }: I) => {
  const linkProps = to ? { component: Link, to } : {};

  return <Button {...props} variant={variant} {...linkProps} />;
})({
  padding: 18,
  minWidth: 325,
  boxSizing: "border-box",

  fontFamily: "'Open Sans'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 18,
  lineHeight: "30px",
  letterSpacing: "0.1px",

  border: "1px solid",
  borderRadius: 37,
});

export default AppButton;
