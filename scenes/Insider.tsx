import React, { useState } from "react";
import { InsiderPopupArea } from "../components/insiderscene/InsiderPopupArea";
import { Quiz, InsiderQuizIndexType } from "../components/type/Type";

export type InsiderSceneProps = {
  setScene: (scene: string) => void;
  quizList: Array<Quiz>;
  insiderQuizIndex: InsiderQuizIndexType;
};

export const InsiderScene: React.FC<InsiderSceneProps> = ({
  setScene,
  quizList,
  insiderQuizIndex,
}) => {
  const [showPopup, setShowPopup] = useState("");
  return (
    <div>
      {showPopup && (
        <InsiderPopupArea
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
        <button onClick={() => setShowPopup("PlayerQ")}>
          PlayerQいんさいだー
        </button>
        <button onClick={() => setShowPopup("PlayerP")}>
          PlayerPいんさいだー
        </button>
      </div>

      <div className="div-center-align">
        <button onClick={() => setScene("game")}>start</button>
      </div>
    </div>
  );
};
