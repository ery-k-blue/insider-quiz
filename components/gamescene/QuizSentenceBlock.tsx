import styles from "../../styles/components/gamescene/QuizSentenceArea.module.css";

type QuizSentenceProps = {
  sentenceArray: string[];
  pauseAnimation: Boolean;
};

export const QuizSentenceBlock: React.FC<QuizSentenceProps> = ({
  sentenceArray,
  pauseAnimation,
}) => {
  if (sentenceArray) {
    return (
      <>
        {sentenceArray.map((_sentence: string, index: number) => {
          return (
            <p
              key={index}
              className={`${styles.animation} + ${
                pauseAnimation ? styles.pauseanimation : ""
              }`}
            >
              {_sentence}
            </p>
          );
        })}
      </>
    );
  } else {
    return <></>;
  }
};
