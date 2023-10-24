import styled from "@emotion/styled";
import { T_AnswerProps, T_AnswerVariant } from "./Answer.types";

const mapVariantToStyles = (variant: T_AnswerVariant) => {
  switch (variant) {
    case "default":
      return {
        color: "green",
      };
    case "error":
      return {
        backgroundColor: "red",
        color: "white",
      };
    case "chosen":
      return {
        backgroundColor: "green",
        color: "white",
      };
  }
};

export const StyledContainer = styled.div<Pick<T_AnswerProps, "variant" | "onClick">>(({ variant = "default", onClick }) => ({
  display: "inline-block",
  paddingBlock: 4,
  paddingInline: 12,
  borderRadius: 8,
  border: `1px solid green`,
  ...mapVariantToStyles(variant),

  "&:hover": {
    cursor: onClick ? "pointer" : "default",
  },
}));
