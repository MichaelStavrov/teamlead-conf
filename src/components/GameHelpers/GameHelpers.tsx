import { FC } from 'react';
import cn from 'classnames';
import closeIcon from 'assets/images/close.png';
import styles from './GameHelpers.module.scss';
import { Helpers } from 'src/types';
import { appStore } from 'src/store/appStore';
import { observer } from 'mobx-react-lite';

const GameHelpers: FC = () => {
  const { setGameHelpers, gameHelpers, currentQuestionNum, gameResult, onPauseTimer, userAnswer } =
    appStore;
  const handleHelperClick = (helperName: keyof Helpers) => {
    if (gameHelpers[helperName]) return;

    setGameHelpers({
      ...gameHelpers,
      [helperName]: currentQuestionNum,
    });

    if (helperName === 'audience') {
      onPauseTimer();
    }
  };

  const disableHelper = (helper: keyof Helpers) =>
    gameResult !== 'none' || !!gameHelpers[helper] || !!userAnswer;

  return (
    <div className={styles.layout}>
      <button
        className={cn(styles.helper, styles['helper-1'])}
        onClick={() => handleHelperClick('half')}
        disabled={disableHelper('half')}
      >
        {!!gameHelpers.half && <img className={styles.closeIcon} src={closeIcon} alt="img" />}
      </button>
      <button
        className={cn(styles.helper, styles['helper-2'])}
        onClick={() => handleHelperClick('audience')}
        disabled={disableHelper('audience')}
      >
        {!!gameHelpers.audience && <img className={styles.closeIcon} src={closeIcon} alt="img" />}
      </button>
    </div>
  );
};

export default observer(GameHelpers);
