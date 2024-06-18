import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import cn from 'classnames';
import { appStore } from 'src/store/appStore';
import styles from './RatingList.module.scss';

interface RatingListProps {
  center?: boolean;
  withHighlight?: boolean;
}

const RatingList: FC<RatingListProps> = ({ center, withHighlight }) => {
  const { uiRatingData, ratingFetchingStatus } = appStore;

  if (ratingFetchingStatus.status === 'error') {
    return <div>Топ игроков временно недоступен</div>;
  }

  return (
    <div
      className={cn(styles.layout, {
        [styles.center]: center,
      })}
    >
      <div className={styles.title}>Топ игроков</div>
      {uiRatingData?.length > 0 && (
        <ul className={styles.list}>
          {uiRatingData.slice(0, 5).map(({ id, name, score, time }, index) => (
            <li
              style={
                index === 0 && withHighlight
                  ? { backgroundColor: 'rgb(249, 191, 80)', color: 'black' }
                  : {}
              }
              className={styles.item}
              key={id}
            >
              <span className={styles.name} title={name}>
                {name}
              </span>
              <span style={{ textAlign: 'center' }}>{score}</span>
              <span>{time}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default observer(RatingList);
