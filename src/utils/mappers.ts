import { Difficulty } from "../constants";

export const difficultyValueToLabelMapper: { [key in Difficulty]: string } = {
  [Difficulty.EASY]: "Easy",
  [Difficulty.HARD]: "Hard",
  [Difficulty.MEDIUM]: "Medium",
};
