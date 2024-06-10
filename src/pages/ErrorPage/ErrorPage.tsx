import React, { FC } from 'react';

import errorImage from 'assets/images/error-image.png';
import styles from './ErrorPage.module.scss';

interface ErrorPageProps {
  message?: string;
}

const ErrorPage: FC<ErrorPageProps> = ({ message }) => {
  return (
    <div className={styles.errorPage}>
      <img className={styles.image} src={errorImage} alt="ошибка" />
      <span className={styles.errorMessage}>
        Что-то пошло не так.
        <br />
        <br />
        {message}
      </span>
    </div>
  );
};

export default ErrorPage;
