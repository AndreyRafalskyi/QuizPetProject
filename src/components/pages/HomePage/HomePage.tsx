import React from "react";
import { useQuizQuestions } from "../../../api";
import { CreateQuizForm } from "../../forms";
import { T_FormValues } from "../../forms/CreateQuizForm/types";
import { Difficulty } from "../../../constants";
import { shuffleArray } from "../../../utils";
import { AnswersList } from "../../components";
import { Button } from "../../common";
import { T_QuestionItem, QuizContext } from "../../layouts";
import { useNavigate } from "react-router-dom";
import { StyledHomePage } from "./HomePage.styles";

export const HomePage = () => {
  const navigate = useNavigate();

  const { questionsData, setQuestionsData } = React.useContext(QuizContext);
  const [formValues, setFormValues] = React.useState<T_FormValues>({
    category: 0,
    difficulty: Difficulty.MEDIUM,
    amount: 5,
    type: "multiple",
  });

  const { data, refetch, isFetching: isQuestionsFetching } = useQuizQuestions(formValues, false);

  const questions = React.useMemo<Array<T_QuestionItem>>(
    () =>
      data?.map((question) => ({
        text: question.question,
        category: question.category,
        correctAnswer: question.correct_answer,
        answers: shuffleArray([question.correct_answer, ...question.incorrect_answers]).map((answer) => ({
          text: answer,
          variant: "default",
        })),
      })) || [],
    [data]
  );

  React.useEffect(() => {
    setQuestionsData(questions);
  }, [questions]);

  const isAllAnswered = React.useMemo(
    () => questionsData.every((question) => question.answers.some((answer) => answer.variant === "chosen")),
    [questionsData]
  );

  const onChangeFormValue = (fieldName: keyof T_FormValues, value: T_FormValues[keyof T_FormValues]) => {
    setFormValues({
      ...formValues,
      ...{ [fieldName]: value },
    });
  };

  const onSubmit = async () => {
    await refetch();
  };

  const onClickAnswer = (index: number, answer: string) => {
    const answers = questionsData[index].answers.map((answer) => ({
      ...answer,
      variant: "default" as const,
    }));
    const selectedAnswerIndex = answers.findIndex((answerItem) => answerItem.text === answer);
    const selectedAnswer = answers[selectedAnswerIndex];
    const newAnswers = [
      ...answers.slice(0, selectedAnswerIndex),
      { ...selectedAnswer, variant: "chosen" as const },
      ...answers.slice(selectedAnswerIndex + 1),
    ];
    setQuestionsData([
      ...questionsData.slice(0, index),
      { ...questionsData[index], answers: newAnswers },
      ...questionsData.slice(index + 1),
    ]);
  };

  const goToResults = () => {
    navigate("/results");
  };

  return (
    <StyledHomePage>
      <CreateQuizForm values={formValues} onChange={onChangeFormValue} onSubmit={onSubmit} />
      {isQuestionsFetching
        ? "Loading..."
        : questionsData.map((question, index) => {
            return (
              <div key={index}>
                <p>{question.text}</p>
                <AnswersList answers={question.answers} onClickAnswer={(answer) => onClickAnswer(index, answer)} />
              </div>
            );
          })}
      {questionsData.length > 0 && isAllAnswered && <Button onClick={goToResults}>Submit</Button>}
    </StyledHomePage>
  );
};
