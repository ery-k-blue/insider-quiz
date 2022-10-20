import React, { MouseEvent } from "react";
import { QuestionNum } from "../../pages";
import styles from "../../styles/components/insiderscene/PopupArea.module.css";
import { InsiderQuizIndexType, PointoutInsiderIndexType } from "../type/Type";

type PointOutPopupAreaProps = {
  showPopup: string;
  setShowPopup: (s: string) => void;
  insiderQuizIndex: InsiderQuizIndexType;
  pointoutInsiderIndex: PointoutInsiderIndexType;
  setPointoutInsiderIndex: (
    pointoutInsiderIndex: PointoutInsiderIndexType
  ) => void;
  setPushablePBtn: (bool: boolean) => void;
  setPushableQBtn: (bool: boolean) => void;
  pPoint: number;
  qPoint: number;
  setPPoint: (pPoint: number) => void;
  setQPoint: (qPoint: number) => void;
};

export const PointOutPopupArea: React.FC<PointOutPopupAreaProps> = ({
  showPopup,
  setShowPopup,
  insiderQuizIndex,
  pointoutInsiderIndex,
  setPointoutInsiderIndex,
  setPushablePBtn,
  setPushableQBtn,
  pPoint,
  qPoint,
  setPPoint,
  setQPoint,
}) => {
  const pointOutInsider = (e: MouseEvent<HTMLButtonElement>) => {
    var choiceNumber = e.currentTarget.value;
    if (showPopup === "PlayerP") {
      setPointoutInsiderIndex({
        PlayerP: Number(choiceNumber),
        PlayerQ: pointoutInsiderIndex["PlayerQ"],
      });
    } else if (showPopup === "PlayerQ") {
      setPointoutInsiderIndex({
        PlayerP: pointoutInsiderIndex["PlayerP"],
        PlayerQ: Number(choiceNumber),
      });
    }
  };

  const Buttons = () => {
    var buttonsList = [];
    for (let i = 0; i < QuestionNum; i++) {
      buttonsList.push(
        <button key={"key" + i} onClick={pointOutInsider} value={i}>
          {i + 1}
        </button>
      );
    }
    return buttonsList;
  };

  // btnを無効にする処理＋点数計算＋ポップアップのクローズ
  const pushCloseBtn = () => {
    if (showPopup === "PlayerQ") {
      if (pointoutInsiderIndex["PlayerQ"] !== null) {
        setPushableQBtn(false);
        if (insiderQuizIndex["PlayerP"] === pointoutInsiderIndex["PlayerQ"]) {
          setQPoint(qPoint + 5);
        }
      }
    }
    if (showPopup === "PlayerP") {
      if (pointoutInsiderIndex["PlayerP"] !== null) {
        setPushablePBtn(false);
        if (insiderQuizIndex["PlayerQ"] === pointoutInsiderIndex["PlayerP"]) {
          setPPoint(pPoint + 5);
        }
      }
    }
    setShowPopup("");
  };

  return (
    <div id={styles.overlay}>
      <div id={styles.content}>
        <h3>{showPopup}いんさいだー</h3>
        {Buttons()}
        <button onClick={pushCloseBtn}>close</button>
      </div>
    </div>
  );
};
