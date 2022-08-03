import React from "react";
import styles from "../../styles/components/QuizSentenceArea.module.css";

type QuizSentenceAreaProps = {
  quizProgress: number;
  question: string;
  inputCheck: string;
  startAnimation: Boolean;
  pauseAnimation: Boolean;
};

export const QuizSentenceArea: React.FC<QuizSentenceAreaProps> = ({
  quizProgress,
  question,
  inputCheck,
  startAnimation,
  pauseAnimation,
}) => {
  return (
    <div>
      <h3>Q{quizProgress}.</h3>
      {startAnimation ? (
        <h3
          id="animationQuestionSentence"
          className={`${styles.animation} + ${
            pauseAnimation ? styles.pauseanimation : ""
          }`}
        >
          {question}
        </h3>
      ) : (
        <h3 className={styles.questionSentence}>{question}</h3>
      )}
      {inputCheck && <h3>{inputCheck}</h3>}
    </div>
  );
};

// jsそのものを使う方法
// https://web-designer.cman.jp/css_ref/abc_list/animation-play-state/
// https://tech-blog.cloud-config.jp/2021-06-01-react-making-slotmachine/

// {animation ? (
//   <h3
//     id="animationQuestionSentence"
//     className={styles.animation + (rTAflag ? "" : styles.pauseAnimation)}
//   >
//     {question}
//   </h3>
// ) : (
//   <h3 className={styles.questionSentence}>{question}</h3>
// )}

{
  /* <h3
className={`${styles.animation} ${
  animation ? "" : styles.pauseanimation
}`}
>
{question}
</h3> */
}
