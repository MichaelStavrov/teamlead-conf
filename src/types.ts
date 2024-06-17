export type Status = 'idle' | 'loading' | 'loaded' | 'ok' | 'error';

export type FetchingStatus = {
  status: Status;
  errorMessage: string;
};

export type SetStatus = (status: FetchingStatus) => void;

export interface Answer {
  id: number;
  text: string;
  correct: boolean;
}

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
  questionId: string;
}

export type GameResult = 'win' | 'lose' | 'none';

export interface Helpers {
  half: number;
  audience: number;
}

export interface Rating {
  id: number;
  name: string;
  score: number;
  time: number;
}

export type UiRating = Omit<Rating, 'time'> & {
  time: string;
};

export interface ResultData {
  id: string;
  name: string;
  score: number;
  time: number;
}

export type TimeSpentQuestions = Record<string, number>;
