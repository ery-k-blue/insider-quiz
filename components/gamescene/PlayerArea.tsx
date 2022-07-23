type PlyaerAreaProps = {
  qPoint: number;
  pPoint: number;
};

export const PlayerArea: React.FC<PlyaerAreaProps> = ({ qPoint, pPoint }) => {
  return (
    <div className="player-area">
      <div className="q-area">
        <h4>player Q</h4>
        <h1>{qPoint}</h1>
      </div>
      <div className="p-area">
        <h4>player P</h4>
        <h1>{pPoint}</h1>
      </div>
    </div>
  );
};
