import React from "react";
import { Select, Button } from "../../common";
import { useCategories } from "../../../api";
import { T_CreateQuizFormProps } from "./types";
import { difficultyValueToLabelMapper } from "../../../utils";
import { Difficulty } from "../../../constants";
import { StyledForm } from "./CreateQuizForm.styles";

export const CreateQuizForm = ({ values, onChange, onSubmit }: T_CreateQuizFormProps) => {
  const { data, isFetching } = useCategories();

  const options = React.useMemo(() => data?.map((option) => option.id) || [], [data]);

  const mapCategoryOptionToLabel = (option: number) => data?.find((category) => category.id === option)?.name || "";
  const mapDifficultyOptionToLabel = (option: Difficulty) => difficultyValueToLabelMapper[option];

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <StyledForm>
      <Select
        id="categorySelect"
        placeholder="Select a category"
        value={values.category}
        onChange={(value: number) => onChange("category", value)}
        options={options}
        mapOptionToLabel={mapCategoryOptionToLabel}
      />
      <Select
        id="difficultySelect"
        placeholder="Select a difficulty"
        value={values.difficulty as never}
        onChange={(value: Difficulty) => onChange("difficulty", value)}
        options={Object.values(Difficulty) as never}
        mapOptionToLabel={mapDifficultyOptionToLabel}
      />
      <Button type="button" onClick={() => onSubmit()} id="createBtn">
        Create
      </Button>
    </StyledForm>
  );
};
