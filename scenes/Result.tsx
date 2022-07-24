import React from "react";

export type ResultSceneProps = {
  setScene: (scene: string) => void;
  pPoint: number;
  qPoint: number;
  setPPoint: (pPoint: number) => void;
  setQPoint: (qPoint: number) => void;
};

export const ResultScene: React.FC<ResultSceneProps> = ({
  setScene,
  pPoint,
  qPoint,
  setPPoint,
  setQPoint,
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

  const finishGame = () => {
    setScene("start");
    setPPoint(0);
    setQPoint(0);
  };

  return (
    <div>
      <h1>結果発表</h1>
      {resultScreen()}
      <div className="div-center-align">
        <button onClick={finishGame}>ok</button>
      </div>
    </div>
  );
};
