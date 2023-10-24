import { useQuery } from "@tanstack/react-query";
import { OpenTBDClient } from "../clients";
import { ROUTES } from "../clients/OpenTBDClient/routes";
import { T_Category } from "../types";

type T_CategoriesData = {
  trivia_categories: Array<T_Category>;
};

export const useCategories = () => {
  const client = new OpenTBDClient<T_CategoriesData>(ROUTES.CATEGORIES);

  return useQuery({
    queryKey: ["categories"],
    queryFn: () => client.request(),
    select: (data) => data.trivia_categories,
  });
};
