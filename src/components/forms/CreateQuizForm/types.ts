import { Difficulty } from "../../../constants";
import { T_QuestionType } from "../../../api/types";

export type T_CreateQuizFormProps = {
  values: T_FormValues;
  onChange: (fieldName: keyof T_FormValues, value: T_FormValues[keyof T_FormValues]) => void;
  onSubmit: () => void;
};

export type T_FormValues = {
  category: number;
  difficulty: `${Difficulty}`;
  amount: number;
  type: T_QuestionType;
};
