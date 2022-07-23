export type Quiz = {
  id: number;
  question: string;
  answer: string;
};

export const quizzes: Array<Quiz> = [
  {
    id: 1,
    question: "1 + 1は？",
    answer: "2",
  },
  {
    id: 2,
    question:
      "アルファベットでaから順にbc...と数えていくときに、15番目はなんでしょうか？",
    answer: "o",
  },
  {
    id: 3,
    question: "10円玉のおつりは一回の会計で最大何枚もらえるでしょうか？",
    answer: "4",
  },
];
