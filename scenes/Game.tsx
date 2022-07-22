import React, { ChangeEvent, useEffect, useState } from "react";
import { quizzes, Quiz } from "../data/quizzes";

export type GameSceneProps = {
  setScene: (scene: string) => void;
};

export const GameScene: React.FC<GameSceneProps> = ({ setScene }) => {
  const [quizProgress, setQuizProgress] = useState<number>(1);
  const [inputAnswer, setInputAnswer] = useState<string>("");
  const [inputCheck, setinputCheck] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const questinoNum = 3;
  const [quizList, setQuizList] = useState<Quiz[]>([]);

  const randomNumber = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const setQuizeez = () => {
    const max = quizzes.length;
    for (let i = 0; i < questinoNum; i++) {
      var _q = quizzes[randomNumber(max)];
      console.log(_q);
      setQuizList((quizList) => [...quizList, _q]);
      // setQuizList((quizList) => [...quizList, quizzes[randomNumber(max)]]);
    }
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
      console.log(quizProgress);
      console.log(quizList);
      setQuestion(quizList[quizProgress - 1]["question"]);
      setAnswer(quizList[quizProgress - 1]["answer"]);
    } else {
      setinputCheck("違うよ！");
    }
    setInputAnswer("");
  };

  useEffect(() => {
    setQuizeez();
  }, []);

  useEffect(() => {
    if (quizList.length !== 0) {
      console.log("____________");
      console.log(quizList);
      console.log("____________");
      setQuestion(quizList[quizProgress - 1]["question"]);
      setAnswer(quizList[quizProgress - 1]["answer"]);
    }
  }, [quizList]);

  useEffect(() => {
    if (quizProgress === 4) {
      setScene("result");
    }
  }, [quizProgress]);

  return (
    <div>
      <h1>Insider Quiz</h1>
      <h3>Q{quizProgress}.</h3>
      <h3>{question}</h3>
      {inputCheck && <h3>{inputCheck}</h3>}
      <div className="div-center-align">
        <input value={inputAnswer} onChange={onchangeText} type="text" />
      </div>
      <div className="div-center-align">
        <button onClick={submitAnswer}>submit</button>
      </div>

      <div className="div-center-align">
        <button onClick={() => setScene("result")}>finish</button>
      </div>
    </div>
  );
};
