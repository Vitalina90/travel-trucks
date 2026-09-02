import React from 'react';
import styles from './Loader.module.css';

/**
 * Компонент індикатора завантаження з анімованим спінером та повідомленням з макета для відображення асинхронних процесів.
 */
export const Loader: React.FC = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.loaderWrapper}>
        <div className={styles.spinner}></div>
        <h3 className={styles.title}>Loading tracks...</h3>
        <p className={styles.text}>
          Please wait while we fetch the best travel trucks for you
        </p>
      </div>
    </div>
  );
};
