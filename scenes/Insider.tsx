import React, { useState } from "react";
import { PopupArea } from "../components/insiderscene/PopupArea";
import { Quiz } from "../data/quizzes";

export type InsiderSceneProps = {
  setScene: (scene: string) => void;
  quizList: Array<Quiz>;
};

export const InsiderScene: React.FC<InsiderSceneProps> = ({
  setScene,
  quizList,
}) => {
  const [showPopup, setShowPopup] = useState("");
  return (
    <div>
      {showPopup && (
        <PopupArea showPopup={showPopup} setShowPopup={setShowPopup} />
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
