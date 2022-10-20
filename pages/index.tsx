import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { StartScene } from "../scenes/Start";
import { InsiderScene } from "../scenes/Insider";
import { GameScene } from "../scenes/Game";
import { ResultScene } from "../scenes/Result";
import { quizzes } from "../data/quizzes";
import {
  Quiz,
  InsiderQuizIndexType,
  PointoutInsiderIndexType,
} from "../components/type/Type";
import { PointOutScene } from "../scenes/PointOut";

export const QuestionNum = 3;

const Home: NextPage = () => {
  const [scene, setScene] = useState<string>("start");
  const [pPoint, setPPoint] = useState<number>(0);
  const [qPoint, setQPoint] = useState<number>(0);
  const [answerPlayerList, setAnswerPlayerList] = useState<string[]>([]);
  const [pointoutInsiderIndex, setPointoutInsiderIndex] =
    useState<PointoutInsiderIndexType>({ PlayerQ: null, PlayerP: null });
  const [quizList, setQuizList] = useState<Quiz[]>([]);
  const [insiderQuizIndex, setInsiderQuizIndex] =
    useState<InsiderQuizIndexType>({});

  const setQuizeez = () => {
    const max = quizzes.length;
    let _ql: Array<Quiz> = [];
    for (let i = 0; i < QuestionNum; i++) {
      _ql.push(quizzes[Math.floor(Math.random() * max)]);
    }
    setQuizList(_ql);
  };

  useEffect(() => {
    setQuizeez();
    setInsiderQuizIndex({
      PlayerP: Math.floor(Math.random() * QuestionNum),
      PlayerQ: Math.floor(Math.random() * QuestionNum),
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>insider quiz</title>
      </Head>

      <main className={styles.main}>
        {scene === "start" && <StartScene setScene={setScene} />}
        {scene === "insider" && (
          <InsiderScene
            setScene={setScene}
            quizList={quizList}
            insiderQuizIndex={insiderQuizIndex}
          />
        )}
        {scene === "game" && (
          <GameScene
            setScene={setScene}
            quizList={quizList}
            answerPlayerList={answerPlayerList}
            setAnswerPlayerList={setAnswerPlayerList}
            pPoint={pPoint}
            qPoint={qPoint}
            setPPoint={setPPoint}
            setQPoint={setQPoint}
          />
        )}
        {scene === "pointout" && (
          <PointOutScene
            setScene={setScene}
            quizList={quizList}
            answerPlayerList={answerPlayerList}
            insiderQuizIndex={insiderQuizIndex}
            pointoutInsiderIndex={pointoutInsiderIndex}
            setPointoutInsiderIndex={setPointoutInsiderIndex}
            pPoint={pPoint}
            qPoint={qPoint}
            setPPoint={setPPoint}
            setQPoint={setQPoint}
          />
        )}
        {scene === "result" && (
          <ResultScene
            setScene={setScene}
            pPoint={pPoint}
            qPoint={qPoint}
            setPPoint={setPPoint}
            setQPoint={setQPoint}
          />
        )}
      </main>
    </div>
  );
};

export default Home;
