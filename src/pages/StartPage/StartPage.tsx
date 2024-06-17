import { useNavigate } from 'react-router-dom';
import { RoutesMap } from 'routes/routesMap';
import CardLayout from 'components/CardLayout';
import Button from 'components/Button';
import styles from './StartPage.module.scss';

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <CardLayout>
      <div className={styles.startPageLayout}>
        <h2 className={styles.title}>
          <b>Попробуй свои знания и силы!</b>
          <br /> Ответь в формате известной увлекательной игры на вопросы по управленческим
          компетенциям и ситуациям.
        </h2>
        <div className={styles.controls}>
          <Button
            mw={220}
            h={44}
            view="secondary"
            type="submit"
            onClick={() => navigate(RoutesMap.MainPage)}
          >
            Начать игру
          </Button>
          <Button mw={220} h={44} view="outline" onClick={() => navigate(RoutesMap.TopRating)}>
            Топ игроков
          </Button>
        </div>
      </div>
    </CardLayout>
  );
};

export default StartPage;
