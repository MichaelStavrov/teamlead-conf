import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styles from './Timer.module.scss';
import { getTimeStyles } from './utils';
import { questionsTime, timerProps } from 'src/appSettings';
import { appStore } from 'src/store/appStore';
import { observer } from 'mobx-react-lite';

const Timer = () => {
  const {
    timerIsPlaying,
    onToggleTimer,
    setTimerIsOver,
    timerKey,
    onChangeTimeSpentQuestions,
    currentQuestionNum,
  } = appStore;

  const duration = questionsTime[currentQuestionNum];

  return (
    <div className={styles.timerWrapper} onClick={onToggleTimer}>
      <CountdownCircleTimer
        key={timerKey}
        isPlaying={timerIsPlaying}
        colors={['#ff7701', '#f44c04', '#f63c3c', '#f81d1d']}
        trailColor="#f5c75d"
        colorsTime={[duration, 10, 5, 0]}
        onComplete={() => setTimerIsOver(true)}
        onUpdate={(time) => onChangeTimeSpentQuestions(duration - time)}
        duration={duration}
        {...timerProps}
      >
        {({ remainingTime }) => {
          return (
            <span style={{ fontWeight: 'var(--fw-bold)', ...getTimeStyles(remainingTime) }}>
              {remainingTime}
            </span>
          );
        }}
      </CountdownCircleTimer>
    </div>
  );
};

export default observer(Timer);
