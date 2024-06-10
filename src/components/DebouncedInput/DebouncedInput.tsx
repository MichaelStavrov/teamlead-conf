import { FC, InputHTMLAttributes, useEffect, useState } from 'react';
import Input from 'components/Input';
import closeIcon from 'assets/icons/close-icon.svg';
import styles from './DebouncedInput.module.scss';

interface DebouncedInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
}

const DebouncedInput: FC<DebouncedInputProps> = ({
  value: initialValue,
  onChange,
  debounce,
  ...props
}) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className={styles.inputWrapper}>
      <Input {...props} value={value} onChange={(e) => setValue(e.target.value)} />
      <button className={styles.clearBtn} onClick={() => setValue('')}>
        <img className={styles.clearIcon} src={closeIcon} alt="clear input" />
      </button>
    </div>
  );
};

export default DebouncedInput;
