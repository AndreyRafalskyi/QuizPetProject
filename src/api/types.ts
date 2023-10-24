import { Difficulty } from "../constants";

export type T_Category = {
  id: number;
  name: string;
};

export type T_QuestionType = "multiple" | "boolean";

export type T_Question = {
  category: string;
  type: T_QuestionType;
  difficulty: `${Difficulty}`;
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
};
