import React from "react";
import { QuizContext } from "../../layouts";
import { AnswersList } from "../../components";
import { StyledResults, StyledScore } from "./ResultsPage.styles";
import { T_ScoreVariants } from "./ResultsPage.types";
import { Button } from "../../common";
import { useNavigate } from "react-router-dom";
import { queryClient } from "../../../App";
import { QueryFilters } from "@tanstack/react-query";

export const ResultsPage = () => {
  const navigate = useNavigate();
  const { questionsData, setQuestionsData } = React.useContext(QuizContext);

  const mapScoreToScoreVariant = (score: number): T_ScoreVariants => {
    if (score < 2) {
      return "bad";
    }

    if (score < 4) {
      return "medium";
    }

    return "good";
  };

  React.useEffect(() => {
    setQuestionsData(
      questionsData.map((question) => ({
        ...question,
        answers: question.answers.map((answer) => ({
          ...answer,
          variant:
            answer.variant === "chosen"
              ? question.correctAnswer !== answer.text
                ? "error"
                : "chosen"
              : question.correctAnswer === answer.text
              ? "chosen"
              : "default",
        })),
      }))
    );
  }, []);

  const goToQuiz = () => {
    queryClient.removeQueries("questions" as QueryFilters);
    navigate("/");
  };

  const rightAnswers = React.useMemo(
    () => questionsData.filter((question) => !question.answers.some((answer) => answer.variant === "error")).length,
    [questionsData]
  );

  return (
    <StyledResults>
      {questionsData.map((question, index) => {
        return (
          <div key={index}>
            <p>{question.text}</p>
            <AnswersList answers={question.answers} />
          </div>
        );
      })}
      <StyledScore
        variant={mapScoreToScoreVariant(rightAnswers)}
      >{`You scored ${rightAnswers} of ${questionsData.length}`}</StyledScore>
      <Button type="button" onClick={goToQuiz}>
        Create a new quiz
      </Button>
    </StyledResults>
  );
};
