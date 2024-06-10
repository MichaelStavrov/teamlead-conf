import { autorun, makeAutoObservable, runInAction } from 'mobx';
import {
  Answer,
  FetchingStatus,
  GameResult,
  Helpers,
  Question,
  Rating,
  ResultData,
  TimeSpentQuestions,
  LogAnswer,
} from 'src/types';
import { service } from './appStore.service';
import { errorHasMessage } from 'utils/errorHasMessage';
import { safeAmounts as safeAmountsFromSettings } from 'src/appSettings';
import { secondsToTime } from 'utils/secondsToTime';
// import { questions as mockQuestions, rating as mockRating } from 'src/mocks';

class AppStore {
  questions: Question[] = [];

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

  onReset() {
    this.questions = [];
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
        .map((item) => ({
          ...item,
          time: secondsToTime(item.time),
        }))
    );
  }

  async getQuestions(data: string[]) {
    try {
      this.questionsFetchingStatus.status = 'loading';

      const res = await service.fetchQuestions(data);
      this.setQuestions(res);
      this.questionsFetchingStatus.status = 'loaded';
      this.startTimeCurrentQuestion = Date.now();
    } catch (err) {
      console.log('err', err);
      this.questionsFetchingStatus.status = 'error';

      if (errorHasMessage(err)) {
        this.questionsFetchingStatus.errorMessage = err.message;
      }
    }
  }

  async sendResult(userName: string) {
    const totalTimeSpent = Object.values(this.timeSpentQuestions).reduce(
      (timeSpent, acc) => acc + timeSpent,
      0
    );

    const data: ResultData = {
      name: userName,
      score: this.questionsCountUserAnswered,
      time: totalTimeSpent,
    };

    try {
      this.resultSendingStatus.status = 'loading';

      await service.sendResult(data);

      this.resultSendingStatus.status = 'loaded';
    } catch (err) {
      console.log('err', err);
      this.resultSendingStatus.status = 'error';

      if (errorHasMessage(err)) {
        this.resultSendingStatus.errorMessage = err.message;
      }
    }
  }

  async getRating() {
    try {
      this.ratingFetchingStatus.status = 'loading';

      const data = await service.fetchRating();
      this.setRatingData(data);
      this.ratingFetchingStatus.status = 'loaded';
    } catch (err) {
      console.log('err', err);
      this.ratingFetchingStatus.status = 'error';
    }
  }

  async logAnswer(question: Question, answer: Answer) {
    try {
      const logAnswer: LogAnswer = {
        questionId: question.questionId,
        correct: answer.correct,
        answer: answer.text,
        time: Date.now() - this.startTimeCurrentQuestion,
      };

      service.logAnswer(logAnswer);
    } catch (err) {
      console.log('err', err);
    }
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
