import React from "react";

type QuizSentenceAreaProps = {
  quizProgress: number;
  question: string;
  inputCheck: string;
};

export const QuizSentenceArea: React.FC<QuizSentenceAreaProps> = ({
  quizProgress,
  question,
  inputCheck,
}) => {
  return (
    <div>
      <h3>Q{quizProgress}.</h3>
      <h3 style={{ textAlign: "center" }}>{question}</h3>
      {inputCheck && <h3>{inputCheck}</h3>}
    </div>
  );
};
