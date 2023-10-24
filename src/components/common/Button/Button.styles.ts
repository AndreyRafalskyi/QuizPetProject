import styled from "@emotion/styled";
import { T_ButtonProps, T_ButtonVariant } from "./Button.types";

const mapVariantToStyles = (variant: T_ButtonVariant) => {
  switch (variant) {
    case "solid":
      return {
        backgroundColor: "green",
        color: "white",
      };
    case "outlined":
      return {
        backgroundColor: "transparent",
        color: "green",
      };
  }
};

export const StyledButton = styled.button<Pick<T_ButtonProps, "variant">>(({ variant = "solid" }) => ({
  padding: 8,
  borderRadius: 4,
  ...mapVariantToStyles(variant),
}));
