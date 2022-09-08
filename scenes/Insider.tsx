import React, { useState } from "react";
import styles from "../styles/components/insiderscene/PopupArea.module.css";

export type InsiderSceneProps = {
  setScene: (scene: string) => void;
};

type PopupAreaProps = {
  showPopup: string;
  setShowPopup: (s: string) => void;
};

const PopupArea: React.FC<PopupAreaProps> = ({ showPopup, setShowPopup }) => {
  return (
    <div id={styles.overlay}>
      <div id={styles.content}>
        <p>{showPopup}いんさいだー</p>
        <button onClick={() => setShowPopup("")}>close</button>
      </div>
    </div>
  );
};

export const InsiderScene: React.FC<InsiderSceneProps> = ({ setScene }) => {
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
