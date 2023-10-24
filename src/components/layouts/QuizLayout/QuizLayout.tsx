import React from "react";
import { T_AnswerVariant } from "../../common/Answer/Answer.types";

export type T_QuestionItem = {
  text: string;
  category: string;
  correctAnswer: string;
  answers: Array<{
    text: string;
    variant: T_AnswerVariant;
  }>;
};

type T_QuizContext = {
  questionsData: Array<T_QuestionItem>;
  setQuestionsData: React.Dispatch<React.SetStateAction<Array<T_QuestionItem>>>;
};

export const QuizContext = React.createContext<T_QuizContext>({
  questionsData: [],
  setQuestionsData: () => {},
});

export const QuizLayout = ({ children }: React.PropsWithChildren) => {
  const [questionsData, setQuestionsData] = React.useState<Array<T_QuestionItem>>([]);
  return (
    <QuizContext.Provider value={{ questionsData, setQuestionsData }}>
      <h1>Quiz</h1>
      {children}
    </QuizContext.Provider>
  );
};
