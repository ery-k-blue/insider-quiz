import React, { useEffect, useState } from "react";
import styles from "../../styles/components/gamescene/QuizSentenceArea.module.css";
import { QuizSentenceBlock } from "./QuizSentenceBlock";

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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth - 64);
  const [sentenceArray, setSentenceArray] = useState<string[]>([]);

  useEffect(() => {
    const onResize = () => {
      setWindowWidth(() => window.innerWidth - 64);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    var columnsCharNum = Math.floor(windowWidth / 24);
    var chunk = question.match(new RegExp(".{1," + columnsCharNum + "}", "g"));
    console.log(columnsCharNum);
    console.log(windowWidth);
    if (chunk) {
      setSentenceArray(chunk);
    }
  }, [question]);

  return (
    <div>
      <h3>Q{quizProgress}.</h3>
      {startAnimation ? (
        <QuizSentenceBlock
          sentenceArray={sentenceArray}
          pauseAnimation={pauseAnimation}
        />
      ) : (
        <h3 className={styles.questionSentence}>{question}</h3>
      )}
      {inputCheck && <h3>{inputCheck}</h3>}
    </div>
  );
};
