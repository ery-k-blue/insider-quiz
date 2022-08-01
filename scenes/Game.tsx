import React, { MouseEvent, ChangeEvent, useEffect, useState } from "react";
import { quizzes, Quiz } from "../data/quizzes";
import { PlayerArea } from "../components/gamescene/PlayerArea";
import { QuizSentenceArea } from "../components/gamescene/QuizSentenceArea";
import { randomChar } from "../components/gamescene/CharTool";

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
  const [answerArray, setAnswerArray] = useState<any[]>([]);
  const [quizList, setQuizList] = useState<Quiz[]>([]);
  const [righrToAnswer, setRightToAnswer] = useState<string>("");
  const [rTAflag, setRTAflag] = useState<Boolean>(true);
  const [inputCharCount, setInputCharCount] = useState<number>(0);
  const questinoNum = 3;

  const setQuizeez = () => {
    const max = quizzes.length;
    let _ql: Array<Quiz> = [];
    for (let i = 0; i < questinoNum; i++) {
      _ql.push(quizzes[Math.floor(Math.random() * max)]);
    }
    setQuizList(_ql);
  };

  // const onchangeText = (e: ChangeEvent<HTMLInputElement>) => {
  //   setInputAnswer(e.target.value);
  // };

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

  const makeChoices = (answer: any) => {
    let _arr = answer.split("");
    let choicesArray = [];
    console.log(answer);
    console.log(_arr);

    for (let i = 0; i < answer.length; i++) {
      choicesArray.push(randomChar(_arr[i]));
    }
    setAnswerArray(choicesArray);
  };

  const selectedChoices = (e: MouseEvent<HTMLElement>) => {
    console.log(e);
    console.log(e.target);
    let _answer = inputAnswer + e.target.value;
    console.log(_answer);
    setInputAnswer(_answer);

    console.log("______");
    console.log(answerArray.length);
    console.log(inputCharCount);
    if (inputCharCount < answerArray.length - 1) {
      setInputCharCount((c) => c + 1);
    } else {
      setInputCharCount(0);
    }
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
    } else {
      if (quizProgress > 1) {
        setQuestion(quizList[quizProgress - 1]["question"]);
        setAnswer(quizList[quizProgress - 1]["answer"]);
      }
    }
  }, [quizProgress]);

  useEffect(() => {
    if (answer !== "") {
      makeChoices(answer);
    }
  }, [answer]);

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
        <h2>{inputAnswer}</h2>
      </div>

      {righrToAnswer && (
        <div className="div-center-align">
          <button
            onClick={selectedChoices}
            value={answerArray[inputCharCount][0]}
          >
            {answerArray[inputCharCount][0]}
          </button>
          <button
            onClick={selectedChoices}
            value={answerArray[inputCharCount][1]}
          >
            {answerArray[inputCharCount][1]}
          </button>
          <button
            onClick={selectedChoices}
            value={answerArray[inputCharCount][2]}
          >
            {answerArray[inputCharCount][2]}
          </button>
          <button
            onClick={selectedChoices}
            value={answerArray[inputCharCount][3]}
          >
            {answerArray[inputCharCount][3]}
          </button>
        </div>
      )}

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
      {/* <div className="div-center-align">
        <button onClick={makeChoices}>ooo</button>
      </div> */}
    </div>
  );
};
