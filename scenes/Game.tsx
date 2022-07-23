import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { quizzes, Quiz } from "../data/quizzes";
import { PlayerArea } from "../components/gamescene/PlayerArea";
import { QuizSentenceArea } from "../components/gamescene/QuizSentenceArea";

export type GameSceneProps = {
  setScene: (scene: string) => void;
  pPoint: number;
  qPoint: number;
  setPPoint: (pPoint: number) => void;
  setQPoint: (qPoint: number) => void;
};

export const GameScene: React.FC<GameSceneProps> = ({
  setScene,
  pPoint,
  qPoint,
  setPPoint,
  setQPoint,
}) => {
  const [quizProgress, setQuizProgress] = useState<number>(1);
  const [inputAnswer, setInputAnswer] = useState<string>("");
  const [inputCheck, setinputCheck] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [quizList, setQuizList] = useState<Quiz[]>([]);
  const [righrToAnswer, setRightToAnswer] = useState<string>("");
  const [rTAflag, setRTAflag] = useState<Boolean>(true);
  const questinoNum = 6;

  const randomNumber = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const setQuizeez = () => {
    const max = quizzes.length;
    let _ql: Array<Quiz> = [];
    for (let i = 0; i < questinoNum; i++) {
      _ql.push(quizzes[randomNumber(max)]);
    }
    setQuizList(_ql);
  };

  const onchangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setInputAnswer(e.target.value);
  };

  const submitAnswer = () => {
    console.log(inputAnswer);
    console.log(answer);
    if (inputAnswer == answer) {
      setQuizProgress((count) => count + 1);
      setinputCheck("");
      if (righrToAnswer === "Q") {
        setQPoint(qPoint + 1);
      } else if (righrToAnswer === "P") {
        setPPoint(pPoint + 1);
      }
    } else {
      setinputCheck("違うよ！");
    }
    setInputAnswer("");
    setRTAflag(true);
    setRightToAnswer("");
  };

  const keydownEvent = (e: KeyboardEvent) => {
    if (e.key === "q") {
      setRightToAnswer("Q");
      setRTAflag(false);
    } else if (e.key === "p") {
      setRightToAnswer("P");
      setRTAflag(false);
    }
  };

  useEffect(() => {
    setQuizeez();
  }, []);

  useEffect(() => {
    if (quizList.length !== 0) {
      console.log(quizList);
      setQuestion(quizList[quizProgress - 1]["question"]);
      setAnswer(quizList[quizProgress - 1]["answer"]);
    }
  }, [quizList]);

  useEffect(() => {
    if (quizProgress === questinoNum + 1) {
      setScene("result");
    }
    if (quizProgress > 1) {
      setQuestion(quizList[quizProgress - 1]["question"]);
      setAnswer(quizList[quizProgress - 1]["answer"]);
    }
  }, [quizProgress]);

  useEffect(() => {
    if (rTAflag) {
      document.addEventListener("keydown", keydownEvent, false);
      return () => {
        document.removeEventListener("keydown", keydownEvent, false);
      };
    }
  }, [keydownEvent]);

  return (
    <div style={{ width: "100%" }}>
      <QuizSentenceArea
        quizProgress={quizProgress}
        question={question}
        inputCheck={inputCheck}
      />
      <div className="div-center-align">
        <input value={inputAnswer} onChange={onchangeText} type="text" />
      </div>
      <div className="div-center-align">
        {(() => {
          if (righrToAnswer == "Q") {
            return (
              <button
                onClick={submitAnswer}
                style={{ backgroundColor: "#FF5400" }}
              >
                submit
              </button>
            );
          } else if (righrToAnswer === "P") {
            return (
              <button
                onClick={submitAnswer}
                style={{ backgroundColor: "#5998C5" }}
              >
                submit
              </button>
            );
          } else {
            return <button onClick={submitAnswer}>submit</button>;
          }
        })()}
      </div>

      <PlayerArea qPoint={qPoint} pPoint={pPoint} />

      <div className="div-center-align">
        <button onClick={() => setScene("result")}>finish</button>
      </div>
    </div>
  );
};
