export type Quiz = {
  id: number;
  question: string;
  answer: string;
};

export type PointoutInsiderIndexType = {
  // PlayerP, PlayerQ
  [player: string]: number | null;
};

export type InsiderQuizIndexType = {
  // PlayerP, PlayerQ
  [player: string]: number;
};
