import { useQuery } from "@tanstack/react-query";
import { OpenTBDClient } from "../clients";
import { ROUTES } from "../clients/OpenTBDClient/routes";
import { T_Question } from "../types";
import { Difficulty } from "../../constants";

type T_RequestParams = {
  category: number;
  difficulty: `${Difficulty}`;
};

type T_QuizQuestionsData = {
  results: Array<T_Question>;
};

export const useQuizQuestions = (params: T_RequestParams, enabled = true) => {
  const client = new OpenTBDClient<T_QuizQuestionsData, T_RequestParams>(ROUTES.API);

  return useQuery({
    queryKey: ["questions"],
    queryFn: () => client.attachQueryParameters(params).request(),
    select: (data) => data.results,
    enabled,
  });
};
