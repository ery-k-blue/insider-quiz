import styles from "../../styles/components/insiderscene/PopupArea.module.css";
import { InsiderIndexDict, Quiz } from "../type/Type";

type PopupAreaProps = {
  showPopup: string;
  setShowPopup: (s: string) => void;
  pQuiz: Quiz;
  qQuiz: Quiz;
};

export const PopupArea: React.FC<PopupAreaProps> = ({
  showPopup,
  setShowPopup,
  pQuiz,
  qQuiz,
}) => {
  return (
    <div id={styles.overlay}>
      <div id={styles.content}>
        <h3>{showPopup}いんさいだー</h3>
        {showPopup === "PlayerP" && (
          <>
            <h5>問題文</h5>
            <p>{pQuiz.question}</p>
            <h5>答え</h5>
            <p>{pQuiz.answer}</p>
          </>
        )}
        {showPopup === "PlayerQ" && (
          <>
            <h5>問題文</h5>
            <p>{qQuiz.question}</p>
            <h5>答え</h5>
            <p>{qQuiz.answer}</p>
          </>
        )}
        <button onClick={() => setShowPopup("")}>close</button>
      </div>
    </div>
  );
};
