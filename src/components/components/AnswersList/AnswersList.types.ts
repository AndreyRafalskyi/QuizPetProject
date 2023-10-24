import { T_AnswerProps } from "../../common/Answer/Answer.types";

export type T_AnswersListProps = {
  answers: Array<Omit<T_AnswerProps, "onClick">>;
  onClickAnswer?: (answer: string) => void;
};
