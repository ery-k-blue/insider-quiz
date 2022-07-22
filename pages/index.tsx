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

  return (
    <div className={styles.container}>
      <Head>
        <title>insider quiz</title>
      </Head>

      <main className={styles.main}>
        {scene === "start" && <StartScene setScene={setScene} />}
        {scene === "game" && <GameScene setScene={setScene} />}
        {scene === "result" && <ResultScene setScene={setScene} />}
      </main>
    </div>
  );
};

export default Home;
