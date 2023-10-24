import React from "react";
import { T_AnswerProps } from "./Answer.types";
import { StyledContainer } from "./Answer.styles";

export const Answer = ({ text, variant, onClick }: T_AnswerProps) => {
  return (
    <StyledContainer variant={variant} onClick={() => onClick && onClick(text)}>
      {text}
    </StyledContainer>
  );
};
