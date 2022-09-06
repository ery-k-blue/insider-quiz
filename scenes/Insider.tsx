export type InsiderSceneProps = {
  setScene: (scene: string) => void;
};

export const InsiderScene: React.FC<InsiderSceneProps> = ({ setScene }) => {
  return (
    <div>
      <h1>Insider Quiz</h1>
      <div className="div-center-align">
        <button onClick={() => setScene("game")}>start</button>
      </div>
    </div>
  );
};
