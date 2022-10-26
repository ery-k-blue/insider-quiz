import React from "react";
import { PlayerArea } from "../components/gamescene/PlayerArea";
import {
  InsiderQuizIndexType,
  PointoutInsiderIndexType,
} from "../components/type/Type";

export type ResultSceneProps = {
  setScene: (scene: string) => void;
  pPoint: number;
  qPoint: number;
  setPPoint: (pPoint: number) => void;
  setQPoint: (qPoint: number) => void;
  insiderQuizIndex: InsiderQuizIndexType;
  pointoutInsiderIndex: PointoutInsiderIndexType;
};

export const ResultScene: React.FC<ResultSceneProps> = ({
  setScene,
  pPoint,
  qPoint,
  setPPoint,
  setQPoint,
  insiderQuizIndex,
  pointoutInsiderIndex,
}) => {
  const resultScreen = () => {
    if (pPoint > qPoint) {
      return (
        <div style={{ backgroundColor: "#5998C5" }}>
          <h2>Win Player P</h2>
        </div>
      );
    } else if (qPoint > pPoint) {
      return (
        <div style={{ backgroundColor: "#FF5400" }}>
          <h2>Win Player Q</h2>
        </div>
      );
    } else {
      return <h2>Drow...</h2>;
    }
  };

  const resultPointOut = () => {
    return (
      <div className="player-area">
        <div className="q-area">
          {pointoutInsiderIndex["PlayerQ"] == insiderQuizIndex["PlayerP"] ? (
            <h1>指摘成功</h1>
          ) : (
            <h1>指摘失敗</h1>
          )}
        </div>
        <div className="p-area">
          {pointoutInsiderIndex["PlayerP"] == insiderQuizIndex["PlayerQ"] ? (
            <h1>指摘成功</h1>
          ) : (
            <h1>指摘失敗</h1>
          )}
        </div>
      </div>
    );
  };

  const finishGame = () => {
    window.location.reload();
  };

  return (
    <div style={{ width: "100%" }}>
      <h1>結果発表</h1>
      {resultScreen()}
      <PlayerArea qPoint={qPoint} pPoint={pPoint} />
      {resultPointOut()}
      <div className="div-center-align">
        <button onClick={finishGame}>ok</button>
      </div>
    </div>
  );
};
