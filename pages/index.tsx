import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { StartScene } from "../scenes/Start";
import { InsiderScene } from "../scenes/Insider";
import { GameScene } from "../scenes/Game";
import { ResultScene } from "../scenes/Result";
import { quizzes } from "../data/quizzes";
import { Quiz, InsiderIndexDict } from "../components/type/Type";
import { PointOutScene } from "../scenes/PointOut";

const Home: NextPage = () => {
  const questinoNum = 3;
  const [scene, setScene] = useState<string>("start");
  const [pPoint, setPPoint] = useState<number>(0);
  const [qPoint, setQPoint] = useState<number>(0);
  const [quizList, setQuizList] = useState<Quiz[]>([]);
  const [insiderQuizIndex, setInsiderQuizIndex] = useState<InsiderIndexDict>(
    {}
  );

  const setQuizeez = () => {
    const max = quizzes.length;
    let _ql: Array<Quiz> = [];
    for (let i = 0; i < questinoNum; i++) {
      _ql.push(quizzes[Math.floor(Math.random() * max)]);
    }
    setQuizList(_ql);
  };

  useEffect(() => {
    setQuizeez();
    setInsiderQuizIndex({
      PlayerP: Math.floor(Math.random() * questinoNum),
      PlayerQ: Math.floor(Math.random() * questinoNum),
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
            pPoint={pPoint}
            qPoint={qPoint}
            setPPoint={setPPoint}
            setQPoint={setQPoint}
          />
        )}
        {scene === "pointout" && (
          <PointOutScene
            setScene={setScene}
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
