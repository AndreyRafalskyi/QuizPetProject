import React from "react";
import { Answer } from "../../common";
import { T_AnswersListProps } from "./AnswersList.types";
import { StyledAnswersList } from "./AnswersList.styles";

export const AnswersList = ({ answers, onClickAnswer }: T_AnswersListProps) => {
  return (
    <StyledAnswersList>
      {answers.map((answer, index) => {
        return <Answer onClick={onClickAnswer} variant={answer.variant} key={index} text={answer.text} />;
      })}
    </StyledAnswersList>
  );
};
