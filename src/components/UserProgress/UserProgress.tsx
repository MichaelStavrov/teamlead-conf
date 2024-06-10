import { progressDataWithSafeAmounts } from 'src/appSettings';
import styles from './UserProgress.module.scss';
import { appStore } from 'src/store/appStore';
import { observer } from 'mobx-react-lite';

const UserProgress = () => {
  const { currentQuestionNum, safeAmount } = appStore;

  return (
    <ul className={styles.list}>
      {progressDataWithSafeAmounts.map(({ num, count, color }) => {
        const currentQuestion = (safeAmount || currentQuestionNum) === num;
        return (
          <li
            style={{
              color: currentQuestion ? 'black' : color,
              backgroundColor: currentQuestion ? '#f9bf50' : undefined,
            }}
            className={styles.item}
            key={num}
          >
            <span className={styles.itemCol1}>{num}</span>
            <span className={styles.itemCol2}>&bull;</span>
            <span className={styles.itemCol3}>{count}</span>
            <span className={styles.itemCol4}>баллов</span>
          </li>
        );
      })}
    </ul>
  );
};

export default observer(UserProgress);
