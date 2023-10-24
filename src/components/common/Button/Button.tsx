import React from "react";
import { T_ButtonProps } from "./Button.types";
import { StyledButton } from "./Button.styles";

export const Button = ({ variant = "solid", ...props }: T_ButtonProps) => {
  return <StyledButton {...props} variant={variant} />;
};
