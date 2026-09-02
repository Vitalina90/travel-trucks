import React from 'react';
import styles from './Input.module.css';

/**
 * Пропси для компонента текстового поля вводу Input.
 */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Текст помилки для підсвічування поля валідації.*/
  error?: string;
}

/**
 * Базовий компонент текстового імпута з відображенням станів помилки та текстових підказок.
 */
export const Input: React.FC<InputProps> = ({
  error,
  className = '',
  ...props
}) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={`${styles.input} ${error ? styles.errorInput : ''} ${className}`}
        {...props}
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};
