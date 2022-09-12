import React, { MouseEvent, useEffect, useState } from "react";
import { PlayerArea } from "../components/gamescene/PlayerArea";
import { QuizSentenceArea } from "../components/gamescene/QuizSentenceArea";
import { randomChar } from "../components/gamescene/CharTool";
import { Quiz } from "../components/type/Type";

export type GameSceneProps = {
  setScene: (scene: string) => void;
  quizList: Array<Quiz>;
  pPoint: number;
  qPoint: number;
  setPPoint: (pPoint: number) => void;
  setQPoint: (qPoint: number) => void;
};

export const GameScene: React.FC<GameSceneProps> = ({
  setScene,
  quizList,
  pPoint,
  qPoint,
  setPPoint,
  setQPoint,
}) => {
  const questinoNum = 3;
  const [quizProgress, setQuizProgress] = useState<number>(1);

  const [inputCheck, setinputCheck] = useState<string>("");
  const [seikaiflag, setSeikaiflag] = useState<Boolean>(false);

  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [choicesArray, setChoicesArray] = useState<any[]>([]);

  const [inputAnswer, setInputAnswer] = useState<string>("");
  const [inputCharCount, setInputCharCount] = useState<number>(0);

  const [righrToAnswer, setRightToAnswer] = useState<string>("");
  const [rTAflag, setRTAflag] = useState<Boolean>(true);

  const [startAnimation, setStartAnimation] = useState<Boolean>(true);
  const [pauseAnimation, setPauseAnimation] = useState<Boolean>(false);

  const makeChoices = (answer: any) => {
    let _arr = answer.split("");
    let _carr = [];
    console.log(answer);
    console.log(_arr);

    for (let i = 0; i < answer.length; i++) {
      _carr.push(randomChar(_arr[i]));
    }
    setChoicesArray(_carr);
  };

  const selectedChoices = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.value === answer[inputCharCount]) {
      let _answer = inputAnswer + e.currentTarget.value;
      setInputAnswer(_answer);
      setInputCharCount((c) => c + 1);
      // 答えと入力が完全一致したら
      if (_answer === answer) {
        seikaiProcess();
      }
    } else {
      huseikaiProcess();
    }
  };

  const seikaiProcess = () => {
    if (righrToAnswer === "Q") {
      setQPoint(qPoint + 1);
    } else if (righrToAnswer === "P") {
      setPPoint(pPoint + 1);
    }

    setSeikaiflag(true);
    setPauseAnimation(false);
    setStartAnimation(false);
    setRightToAnswer("");
    setTimeout(() => {
      setSeikaiflag(false);
      setQuizProgress((count) => count + 1);
      setInputAnswer("");
      setInputCharCount(0);
      setRTAflag(true);
      setinputCheck("");
      setStartAnimation(true);
    }, 2000);
  };

  const huseikaiProcess = () => {
    setRightToAnswer("");
    setInputAnswer("");
    setInputCharCount(0);
    setPauseAnimation(false);
    setRTAflag(true);
    setinputCheck("違うよ！");
  };

  const keydownEvent = (e: KeyboardEvent) => {
    if (e.key === "q") {
      setRightToAnswer("Q");
      setRTAflag(false);
      setPauseAnimation(true);
      setinputCheck("");
    } else if (e.key === "p") {
      setRightToAnswer("P");
      setRTAflag(false);
      setPauseAnimation(true);
      setinputCheck("");
    }
  };

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
        console.log(quizProgress - 1);
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
        startAnimation={startAnimation}
        pauseAnimation={pauseAnimation}
      />
      <div className="div-center-align">
        <p style={{ fontSize: 80, margin: 0 }}>{inputAnswer}</p>
      </div>

      {seikaiflag && (
        <div>
          <h1>seikai!!!!!</h1>
        </div>
      )}

      {righrToAnswer && (
        <div className="div-center-align">
          <button
            onClick={selectedChoices}
            value={choicesArray[inputCharCount][0]}
          >
            {choicesArray[inputCharCount][0]}
          </button>
          <button
            onClick={selectedChoices}
            value={choicesArray[inputCharCount][1]}
          >
            {choicesArray[inputCharCount][1]}
          </button>
          <button
            onClick={selectedChoices}
            value={choicesArray[inputCharCount][2]}
          >
            {choicesArray[inputCharCount][2]}
          </button>
          <button
            onClick={selectedChoices}
            value={choicesArray[inputCharCount][3]}
          >
            {choicesArray[inputCharCount][3]}
          </button>
        </div>
      )}

      <div>
        <h1>{righrToAnswer}</h1>
      </div>

      <PlayerArea qPoint={qPoint} pPoint={pPoint} />

      <div className="div-center-align">
        <button onClick={() => setScene("result")}>finish</button>
      </div>
    </div>
  );
};
