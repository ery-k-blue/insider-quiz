export type StartSceneProps = {
  setScene: (scene: string) => void;
};

export const StartScene: React.FC<StartSceneProps> = ({ setScene }) => {
  return (
    <div>
      <h1>Insider Quiz</h1>
      <div className="div-center-align">
        <button onClick={() => setScene("insider")}>start</button>
      </div>
    </div>
  );
};
