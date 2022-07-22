import React from "react";

export type ResultSceneProps = {
  setScene: (scene: string) => void;
};

export const ResultScene: React.FC<ResultSceneProps> = ({ setScene }) => {
  return (
    <div>
      <h1>Insider Quiz</h1>
      <h4>result...</h4>
      <div className="div-center-align">
        <button onClick={() => setScene("start")}>ok</button>
      </div>
    </div>
  );
};
