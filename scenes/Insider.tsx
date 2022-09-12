import React, { useState } from "react";
import { PopupArea } from "../components/insiderscene/PopupArea";
import { Quiz, InsiderIndexDict } from "../components/type/Type";

export type InsiderSceneProps = {
  setScene: (scene: string) => void;
  quizList: Array<Quiz>;
  insiderQuizIndex: InsiderIndexDict;
};

export const InsiderScene: React.FC<InsiderSceneProps> = ({
  setScene,
  quizList,
  insiderQuizIndex,
}) => {
  const [showPopup, setShowPopup] = useState("");
  console.log(insiderQuizIndex);
  return (
    <div>
      {showPopup && (
        <PopupArea
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          pQuiz={quizList[insiderQuizIndex["PlayerP"]]}
          qQuiz={quizList[insiderQuizIndex["PlayerQ"]]}
        />
      )}
      <h1>いんさいだー</h1>
      <p>
        インサイダーの時間です。それぞれ自分のインサイダーボタンを押してクイズとその答えをインサイダーしましょう。
      </p>
      <p>
        注意：片方のプレイヤーがインサイダーしている間はもう一方のプレイヤーは目をつぶってね
      </p>

      <div className="div-center-align">
        <button onClick={() => setShowPopup("PlayerP")}>
          PlayerPいんさいだー
        </button>
        <button onClick={() => setShowPopup("PlayerQ")}>
          PlayerQいんさいだー
        </button>
      </div>

      <div className="div-center-align">
        <button onClick={() => setScene("game")}>start</button>
      </div>
    </div>
  );
};
