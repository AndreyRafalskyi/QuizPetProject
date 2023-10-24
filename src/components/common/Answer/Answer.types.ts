export type T_AnswerVariant = "default" | "chosen" | "error";

export type T_AnswerProps = {
  onClick?: (answer: string) => void;
  variant?: T_AnswerVariant;
  text: string;
};
