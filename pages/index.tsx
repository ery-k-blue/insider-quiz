import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { StartScene } from "../scenes/Start";
import { GameScene } from "../scenes/Game";
import { ResultScene } from "../scenes/Result";

const Home: NextPage = () => {
  // Sceneを持たせる
  const [scene, setScene] = useState("start");
  const [pPoint, setPPoint] = useState(0);
  const [qPoint, setQPoint] = useState(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>insider quiz</title>
      </Head>

      <main className={styles.main}>
        {scene === "start" && <StartScene setScene={setScene} />}
        {scene === "game" && (
          <GameScene
            setScene={setScene}
            pPoint={pPoint}
            qPoint={qPoint}
            setPPoint={setPPoint}
            setQPoint={setQPoint}
          />
        )}
        {scene === "result" && <ResultScene setScene={setScene} />}
      </main>
    </div>
  );
};

export default Home;
