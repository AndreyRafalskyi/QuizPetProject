import React from "react";

export type T_ButtonVariant = "solid" | "outlined";

export type T_ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: T_ButtonVariant;
};
