import { FC, InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: FC<InputProps> = ({ type = 'text', label, id, ...props }) => {
  return (
    <div className={styles.container}>
      {label && <label htmlFor={id}>{label}</label>}

      <input id={id} className={styles.input} {...props} type={type} />
    </div>
  );
};

export default Input;
