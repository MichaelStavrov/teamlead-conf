import { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Link, useNavigate } from 'react-router-dom';
import { progressData } from 'src/appSettings';
import { appStore } from 'src/store/appStore';
import { RoutesMap } from 'routes/routesMap';
import winBackground from 'assets/images/win-background.png';
import Input from 'components/Input';
import CardLayout from 'components/CardLayout';
import Button from 'components/Button';
import styles from './FinalScreen.module.scss';

const FinalScreen: FC = () => {
  const {
    onReset,
    onHideFinalScreen,
    sendResult,
    resultSendingStatus,
    questionsCountUserAnswered,
    safeAmount,
    getRating,
    resetRatingFetchingStatus,
  } = appStore;
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const resultQuestion = safeAmount || questionsCountUserAnswered;

  useEffect(() => {
    resetRatingFetchingStatus();
  }, [resetRatingFetchingStatus]);

  const coins = progressData.find(({ num }) => num === resultQuestion)?.count;

  const handleNewGameClick = () => {
    onReset(() => navigate(RoutesMap.StartPage));
    onHideFinalScreen();
  };

  const handleSubmit = async () => {
    sendResult(inputValue);
    getRating();
  };

  return (
    <CardLayout p={0} transparent>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={winBackground} alt="back" />
        <div className={styles.textContainer}>
          <span className={styles.title}>Поздравляем!</span>
          <span className={styles.text}>ваш выигрыш</span>
          <div className={styles.prize}>
            <span>{coins} баллов</span>
          </div>
          <div className={styles.inputWrapper}>
            <Input
              id="winner"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              label="Введите ваше Имя (Фамилию)"
              autoComplete="off"
            />
          </div>
          <div className={styles.controls}>
            <Button
              view="outline"
              mw={200}
              style={{ padding: 8 }}
              onClick={handleSubmit}
              isLoading={resultSendingStatus.status === 'loading'}
              disabled={!inputValue || resultSendingStatus.status === 'loaded'}
            >
              {resultSendingStatus.status !== 'loaded' ? 'Сохранить' : 'Сохранено'}
            </Button>
            <Button mw={200} view="outline">
              <Link to={RoutesMap.TopRating}>Топ игроков</Link>
            </Button>
          </div>
          <span className={styles.sendingStatus}>
            {resultSendingStatus.status === 'error' && 'Не удалось отправить данные'}
            {resultSendingStatus.status === 'loaded' && 'Данные успешно сохранены'}
          </span>
        </div>
      </div>
      <Button mw={240} style={{ padding: 12 }} onClick={handleNewGameClick}>
        Новая игра
      </Button>
    </CardLayout>
  );
};

export default observer(FinalScreen);
