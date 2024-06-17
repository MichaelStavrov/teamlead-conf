import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import { Answer } from 'src/types';
import styles from './QuestionComponent.module.scss';

import Button from 'components/Button';
import { getIncorrectQuestionIndexes } from 'utils/getIncorrectQuestionIndexes';
import { getSafeAmount } from 'utils/getSafeAmount';
import { getBc } from 'utils/getBc';
import { appStore } from 'src/store/appStore';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { RoutesMap } from 'routes/routesMap';

const QuestionComponent: FC = () => {
  const {
    questions,
    nextQuestion,
    onPlayTimer,
    onPauseTimer,
    currentQuestionNum,
    setSafeAmount,
    gameResult,
    setGameResult,
    onReset,
    userAnswer,
    setUserAnswer,
    timerIsOver,
    incTimerKey,
    gameHelpers,
    onShowFinalScreen,
    incQuestionsCountUserAnswered,
  } = appStore;
  const navigate = useNavigate();
  const [blinkTimer, setBlinkTimer] = useState(0);
  const [userPickUpCoins, setUserPickUpCoins] = useState(false);
  const BLINK_DURATION = 2;

  useEffect(() => {
    if (timerIsOver) {
      const safeAmount = getSafeAmount(currentQuestionNum);
      setSafeAmount(safeAmount);

      setGameResult('lose');
    }
  }, [currentQuestionNum, onReset, setGameResult, setSafeAmount, timerIsOver]);

  useEffect(() => {
    let interval: any = null;

    if (userAnswer) {
      interval = setInterval(() => {
        setBlinkTimer((prev) => (prev += 1));
      }, 1000);
      if (blinkTimer >= BLINK_DURATION) {
        if (!userAnswer.correct) {
          const safeAmount = getSafeAmount(currentQuestionNum);
          setSafeAmount(safeAmount);
        }
        clearInterval(interval);
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, [blinkTimer, userAnswer, currentQuestionNum, setSafeAmount]);

  const question = questions[currentQuestionNum - 1];
  const [halfIncorrectVariants, setHalfIncorrectVariants] = useState(() =>
    getIncorrectQuestionIndexes(question.answers)
  );

  useEffect(() => {
    setHalfIncorrectVariants(getIncorrectQuestionIndexes(question.answers));
  }, [question.answers]);

  if (!question) return null;

  const handleAnswerClick = (answer: Answer) => {
    onPauseTimer();
    setUserAnswer(answer);
    if (answer.correct) incQuestionsCountUserAnswered();
  };

  const handlePickUpCoinsClick = async () => {
    onPauseTimer();
    setUserPickUpCoins(true);
    setGameResult('win');

    setUserPickUpCoins(false);
    onShowFinalScreen();
  };

  const onNext = () => {
    incTimerKey();
    if (gameResult === 'none') {
      setUserAnswer(null);
      nextQuestion();
      onPlayTimer();
    } else {
      onReset(() => navigate(RoutesMap.StartPage));
    }
    setBlinkTimer(0);
  };

  const showAnswerBackground =
    (userAnswer && blinkTimer === BLINK_DURATION) || timerIsOver || userPickUpCoins;
  const answerDisabled = blinkTimer === BLINK_DURATION || !!userAnswer || timerIsOver;
  const getAnswerStyles = (id: number, index: number) => ({
    [styles.animateAnswer]: userAnswer?.id === id,
    [styles.nonHover]: blinkTimer === BLINK_DURATION || !!userAnswer,
    [styles.hidden]:
      gameHelpers.half === currentQuestionNum &&
      (index === halfIncorrectVariants.randomFirst || index === halfIncorrectVariants.randomSecond),
  });

  return (
    <div className={styles.layout}>
      <span className={styles.question} dangerouslySetInnerHTML={{ __html: question.question }} />
      <div className={styles.answers}>
        {question.answers.map(({ id, text, correct }, index) => (
          <button
            type="button"
            className={cn(styles.answer, getAnswerStyles(id, index))}
            key={id}
            onClick={() => handleAnswerClick({ id, text, correct })}
            style={{
              background: getBc(
                showAnswerBackground && userAnswer?.id === id,
                id,
                correct,
                userAnswer?.id
              ),
            }}
            disabled={answerDisabled}
          >
            {text}
          </button>
        ))}
      </div>
      <Button
        mw={240}
        style={{ padding: 12 }}
        onClick={onNext}
        disabled={
          (blinkTimer !== BLINK_DURATION && !timerIsOver) ||
          gameResult === 'win' ||
          appStore.safeAmount > 0
        }
      >
        {gameResult !== 'lose' ? 'Следующий вопрос' : 'Сыграть заново'}
      </Button>
      <Button
        mw={240}
        style={{ padding: 12 }}
        onClick={handlePickUpCoinsClick}
        disabled={
          (currentQuestionNum === 1 && blinkTimer !== BLINK_DURATION) || gameResult !== 'none'
        }
      >
        Забрать выигрыш
      </Button>
    </div>
  );
};

export default observer(QuestionComponent);
