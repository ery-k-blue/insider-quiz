export type Quiz = {
  id: number;
  question: string;
  answer: string;
};

// 指摘した問題番号
export type PointoutInsiderIndexType = {
  // PlayerP, PlayerQ
  [player: string]: number | null;
};

// 回答を知っている問題番号
export type InsiderQuizIndexType = {
  // PlayerP, PlayerQ
  [player: string]: number;
};
