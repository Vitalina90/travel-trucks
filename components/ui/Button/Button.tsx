import React from 'react';
import styles from './Button.module.css';

/**
 * Пропси для компонента універсальної кнопки Button.
 * */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**Варіант стилізації кнопки: основний (primary) або вторинний (secondary)*/
  variant?: 'primary' | 'secondary';
  /**Вміст кнопки (текст або вкладені елементи)*/
  children: React.ReactNode;
}

/**
 * Універсальний компонент кнопки з підтримкою різних стильових варіантів та всіх стандартних HTML-атрибутів button.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
