import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { StartScene } from "../scenes/Start";
import { InsiderScene } from "../scenes/Insider";
import { GameScene } from "../scenes/Game";
import { ResultScene } from "../scenes/Result";

const Home: NextPage = () => {
  // Sceneを持たせる
  const [scene, setScene] = useState<string>("start");
  const [pPoint, setPPoint] = useState<number>(0);
  const [qPoint, setQPoint] = useState<number>(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>insider quiz</title>
      </Head>

      <main className={styles.main}>
        {scene === "start" && <StartScene setScene={setScene} />}
        {scene === "insider" && <InsiderScene setScene={setScene} />}
        {scene === "game" && (
          <GameScene
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
