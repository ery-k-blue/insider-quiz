import React, { useEffect, useState } from "react";
import { PointOutPopupArea } from "../components/pointoutscene/PointOutPopupArea";
import {
  InsiderQuizIndexType,
  PointoutInsiderIndexType,
  Quiz,
} from "../components/type/Type";

export type PointOutSceneProps = {
  setScene: (scene: string) => void;
  quizList: Quiz[];
  answerPlayerList: string[];
  insiderQuizIndex: InsiderQuizIndexType;
  pointoutInsiderIndex: PointoutInsiderIndexType;
  setPointoutInsiderIndex: (
    pointoutInsiderIndex: PointoutInsiderIndexType
  ) => void;
  pPoint: number;
  qPoint: number;
  setPPoint: (pPoint: number) => void;
  setQPoint: (qPoint: number) => void;
};

export const PointOutScene: React.FC<PointOutSceneProps> = ({
  setScene,
  quizList,
  answerPlayerList,
  insiderQuizIndex,
  pointoutInsiderIndex,
  setPointoutInsiderIndex,
  pPoint,
  qPoint,
  setPPoint,
  setQPoint,
}) => {
  const [showPopup, setShowPopup] = useState("");
  const [pushablePBtn, setPushablePBtn] = useState(true);
  const [pushableQBtn, setPushableQBtn] = useState(true);
  const [pushableResultBtn, setPushableResultBtn] = useState(false);

  useEffect(() => {
    if (pushablePBtn === false && pushableQBtn === false) {
      setPushableResultBtn(true);
    }
  }, [pushablePBtn, pushableQBtn]);

  useEffect(() => {}, [pointoutInsiderIndex]);

  return (
    <div>
      <h1>
        {pointoutInsiderIndex["PlayerQ"]}
        {pointoutInsiderIndex["PlayerP"]},
      </h1>
      <h1>
        {qPoint}, {pPoint}
      </h1>
      {showPopup && (
        <PointOutPopupArea
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          insiderQuizIndex={insiderQuizIndex}
          pointoutInsiderIndex={pointoutInsiderIndex}
          setPointoutInsiderIndex={setPointoutInsiderIndex}
          setPushablePBtn={setPushablePBtn}
          setPushableQBtn={setPushableQBtn}
          pPoint={pPoint}
          qPoint={qPoint}
          setPPoint={setPPoint}
          setQPoint={setQPoint}
        />
      )}
      <h1>インサイダー指摘タイム</h1>
      <ul>
        {quizList.map((quiz, index) => {
          return (
            <li>
              {index + 1}. 問題文:{quiz.question} 答え:{quiz.answer} 正解者:
              {answerPlayerList[index]}
            </li>
          );
        })}
      </ul>
      <div className="div-center-align">
        {pushableQBtn ? (
          <button onClick={() => setShowPopup("PlayerQ")}>
            PlayerQいんさいだー
          </button>
        ) : (
          <button>DONE</button>
        )}
        {pushablePBtn ? (
          <button onClick={() => setShowPopup("PlayerP")}>
            PlayerPいんさいだー
          </button>
        ) : (
          <button>DONE</button>
        )}
      </div>

      {pushableResultBtn && (
        <div className="div-center-align">
          <button onClick={() => setScene("result")}>ok</button>
        </div>
      )}
    </div>
  );
};
