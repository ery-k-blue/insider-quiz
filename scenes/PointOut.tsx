import React from "react";

export type PointOutSceneProps = {
  setScene: (scene: string) => void;
  pPoint: number;
  qPoint: number;
  setPPoint: (pPoint: number) => void;
  setQPoint: (qPoint: number) => void;
};

export const PointOutScene: React.FC<PointOutSceneProps> = ({
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
    setScene("result");
  };

  return (
    <div>
      <h1>インサイダー指摘タイム</h1>
      {resultScreen()}
      <div className="div-center-align">
        <button onClick={finishGame}>ok</button>
      </div>
    </div>
  );
};
