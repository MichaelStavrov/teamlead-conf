import { observer } from 'mobx-react-lite';
import { appStore } from 'src/store/appStore';
import CardLayout from 'components/CardLayout';
import Table from './components/Table';
import styles from './TopRating.module.scss';
import { useNavigate } from 'react-router-dom';

const TopRating = () => {
  const { uiRatingData } = appStore;
  const navigate = useNavigate();

  const onPrev = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <CardLayout title="Топ 100 игроков" gap={8} p="30px 40px">
        <div className={styles.ratingLayout}>
          <button className={styles.prevBtn} onClick={onPrev}>
            Назад
          </button>
          <Table data={uiRatingData} />
        </div>
      </CardLayout>
    </div>
  );
};

export default observer(TopRating);
