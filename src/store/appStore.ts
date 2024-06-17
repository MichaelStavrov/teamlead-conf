import { autorun, makeAutoObservable, runInAction } from 'mobx';
import { nanoid } from 'nanoid';
import {
  Answer,
  FetchingStatus,
  GameResult,
  Helpers,
  Question,
  Rating,
  ResultData,
  TimeSpentQuestions,
} from 'src/types';
import { getValue, keys, setValue } from './localStorageApi';
import { safeAmounts as safeAmountsFromSettings } from 'src/appSettings';
import { secondsToTime } from 'utils/secondsToTime';
import { makeGameQuestions } from 'src/mocks';
// import { questions as mockQuestions, rating as mockRating } from 'src/mocks';

class AppStore {
  questions: Question[] = makeGameQuestions();

  questionsFetchingStatus: FetchingStatus = {
    status: 'idle',
    errorMessage: '',
  };

  currentQuestionNum = 1;

  userAnswer: Answer | null = null;

  startTimeCurrentQuestion = Date.now();

  timerIsPlaying = true;

  timerIsOver = false;

  timerKey = 1;

  safeAmount = 0;

  gameResult: GameResult = 'none';

  gameHelpers: Helpers = {
    half: 0,
    audience: 0,
  };

  showFinalScreen = false;

  resultSendingStatus: FetchingStatus = {
    status: 'idle',
    errorMessage: '',
  };

  timeSpentQuestions: TimeSpentQuestions = {};

  questionsCountUserAnswered = 0;

  ratingData: Rating[] = [];

  ratingFetchingStatus: FetchingStatus = {
    status: 'idle',
    errorMessage: '',
  };

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });

    runInAction(() => {
      this.getRating();
    });
  }

  setQuestions(data: Question[]) {
    this.questions = data;
  }

  setCurrentQuestionNum(num: number) {
    this.currentQuestionNum = num;
  }

  nextQuestion() {
    this.currentQuestionNum += 1;
    this.startTimeCurrentQuestion = Date.now();
  }

  setUserAnswer(data: Answer | null) {
    this.userAnswer = data;
  }

  setTimerIsPlaying(isPlaying: boolean) {
    this.timerIsPlaying = isPlaying;
  }

  setTimerIsOver(isOver: boolean) {
    this.timerIsOver = isOver;
  }

  setTimerKey(key: number) {
    this.timerKey = key;
  }

  incTimerKey() {
    this.timerKey += 1;
  }

  onPauseTimer() {
    this.timerIsPlaying = false;
  }

  onPlayTimer() {
    this.timerIsPlaying = true;
  }

  onToggleTimer() {
    this.timerIsPlaying = !this.timerIsPlaying;
  }

  setSafeAmount(amount: number) {
    this.safeAmount = amount;
  }

  setGameResult(result: GameResult) {
    this.gameResult = result;
  }

  setGameHelpers(helpers: Helpers) {
    this.gameHelpers = helpers;
  }

  setShowFinalScreen(showFinal: boolean) {
    this.showFinalScreen = showFinal;
  }

  onShowFinalScreen() {
    this.showFinalScreen = true;
  }

  onHideFinalScreen() {
    this.showFinalScreen = false;
  }

  setTimeSpentQuestions(data: TimeSpentQuestions) {
    this.timeSpentQuestions = data;
  }

  onChangeTimeSpentQuestions(time: number) {
    this.timeSpentQuestions[this.currentQuestionNum] = time;
  }

  setQuestionsCountUserAnswered(count: number) {
    this.questionsCountUserAnswered = count;
  }

  incQuestionsCountUserAnswered() {
    this.questionsCountUserAnswered += 1;
  }

  onReset(cb: () => void) {
    this.questions = makeGameQuestions();
    this.currentQuestionNum = 1;
    this.timerIsPlaying = true;
    this.safeAmount = 0;
    this.gameResult = 'none';
    this.userAnswer = null;
    this.timerIsOver = false;
    this.gameHelpers = {
      half: 0,
      audience: 0,
    };
    this.resultSendingStatus = {
      status: 'idle',
      errorMessage: '',
    };
    this.questionsCountUserAnswered = 0;
    this.timeSpentQuestions = {};
    this.startTimeCurrentQuestion = Date.now();
    cb();
  }

  setRatingData(data: Rating[]) {
    this.ratingData = data;
  }

  resetRatingFetchingStatus() {
    this.ratingFetchingStatus = {
      status: 'idle',
      errorMessage: '',
    };
  }

  get uiRatingData() {
    if (this.ratingData?.length === 0) return [];

    return (
      [...this.ratingData]
        .sort((a, b) => {
          if (a.score === b.score) {
            return a.time - b.time;
          }

          return b.score - a.score;
        })
        // .slice(0, 5)
        .map((item, index) => ({
          ...item,
          time: secondsToTime(item.time),
          orderBy: index + 1,
        }))
    );
  }

  getQuestions() {
    return this.questions;
  }

  sendResult(userName: string) {
    const totalTimeSpent = Object.values(this.timeSpentQuestions).reduce(
      (timeSpent, acc) => acc + timeSpent,
      0
    );

    const newData: ResultData = {
      id: nanoid(),
      name: userName,
      score: this.questionsCountUserAnswered,
      time: totalTimeSpent,
    };

    const results = getValue<ResultData[]>(keys.results);
    const value = results ? [...results, newData] : [newData];

    setValue(keys.results, value);
    this.resultSendingStatus = {
      status: 'loaded',
      errorMessage: '',
    };
  }

  getRating() {
    const data = getValue<Rating[]>(keys.results);

    this.setRatingData(data ?? []);
  }
}

export const appStore = new AppStore();

autorun(() => {
  const isLose = appStore.userAnswer?.correct === false;

  if (isLose) {
    setTimeout(() => {
      appStore.setGameResult('lose');
    }, 2000);
  }
});

autorun(() => {
  const isWin =
    appStore.questions.length === appStore.currentQuestionNum && appStore.userAnswer?.correct;
  const isWinBySafeAmount = appStore.safeAmount >= safeAmountsFromSettings[0];

  setTimeout(() => {
    if (isWin || isWinBySafeAmount) {
      appStore.setGameResult('win');

      setTimeout(() => {
        appStore.onShowFinalScreen();
      }, 1000);
    }
  }, 2000);
});
