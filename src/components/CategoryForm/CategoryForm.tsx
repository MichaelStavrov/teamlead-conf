import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { fields } from 'src/appSettings';
import Button from 'components/Button';
import styles from './CategoryForm.module.scss';
import CardLayout from 'components/CardLayout';
import { appStore } from 'src/store/appStore';
import { RoutesMap } from 'routes/routesMap';

const CategoryForm: FC = () => {
  const { getQuestions, questionsFetchingStatus } = appStore;
  const [filedValues, setFieldValues] = useState<
    Record<string, { value: string; checked: boolean }>
  >({});

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    getQuestions();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, name: string) => {
    const { checked, value } = e.target;

    setFieldValues((prev) => ({
      ...prev,
      [name]: {
        value,
        checked,
      },
    }));
  };

  return (
    <CardLayout title="Выберите темы вопросов">
      <form className={styles.form}>
        <ul className={styles.categoryList}>
          {fields.map(({ label, value }) => (
            <li className={styles.item} key={label}>
              <label htmlFor={label}>{label}</label>
              <input
                className={styles.checkbox}
                id={label}
                type="checkbox"
                value={filedValues[label]?.value || value}
                checked={filedValues[label]?.checked || false}
                onChange={(e) => handleChange(e, label)}
              />
            </li>
          ))}
        </ul>
        <div className={styles.disclaimer}>
          Кроме выбранных тем, в игре будут вопросы по алгоритмам, структурам данных и<br />{' '}
          computer science
        </div>
        <div className={styles.controls}>
          <Button
            mw={220}
            view="secondary"
            type="submit"
            onClick={onSubmit}
            isLoading={questionsFetchingStatus.status === 'loading'}
          >
            Начать игру
          </Button>
          <Button mw={220} view="outline">
            <Link to={RoutesMap.TopRating}>Топ игроков</Link>
          </Button>
        </div>
      </form>
    </CardLayout>
  );
};

export default observer(CategoryForm);
