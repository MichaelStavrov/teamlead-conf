import GameHelpers from 'components/GameHelpers';
import QuestionComponent from 'components/QuestionComponent';
import RatingList from 'components/Rating/RatingList';
import Timer from 'components/Timer';
import UserProgress from 'components/UserProgress';
import styles from './MainPage.module.scss';
import CategoryForm from 'components/CategoryForm';
import ErrorPage from 'pages/ErrorPage';
import FinalScreen from 'components/FinalScreen';
import { appStore } from 'src/store/appStore';
import { observer } from 'mobx-react-lite';
import { progressData } from 'src/appSettings';

const MainPage = () => {
  const { questions, questionsFetchingStatus, showFinalScreen } = appStore;

  if (questionsFetchingStatus.status === 'error')
    return <ErrorPage message={questionsFetchingStatus.errorMessage} />;

  if (showFinalScreen) return <FinalScreen />;

  const GameContent = (
    <>
      {questions.length < progressData.length && (
        <div style={{ color: 'var(--primary)', textAlign: 'center', margin: '0 0 40px' }}>
          пришло {questions.length} вопросов, это меньше необходимого количесвта
        </div>
      )}
      <div className={styles.topContainer}>
        <RatingList withHighlight />
        <div className={styles.centerContainer}>
          <GameHelpers />
          <div className={styles.timer}>
            <Timer />
          </div>
        </div>

        <UserProgress />
      </div>
      <QuestionComponent />
    </>
  );

  return (
    <>
      {questions.length > 0 ? (
        <div className={styles.mainPage}>{GameContent}</div>
      ) : (
        <CategoryForm />
      )}
    </>
  );
};

export default observer(MainPage);
