import styled from "@emotion/styled";
import { T_ScoreVariants } from "./ResultsPage.types";

const mapVariantToColor = (variant: T_ScoreVariants) => {
  switch (variant) {
    case "bad":
      return "red";
    case "medium":
      return "yellow";
    case "good":
      return "green";
  }
};

export const StyledScore = styled.div<{ variant: T_ScoreVariants }>(({ variant }) => ({
  backgroundColor: mapVariantToColor(variant),
  padding: 8,
  borderRadius: 2,
}));

export const StyledResults = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  alignItems: "flex-start",
}));
