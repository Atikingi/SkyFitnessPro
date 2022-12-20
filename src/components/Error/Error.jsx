import React from 'react';
import styles from './style.module.css';

export const Error = () => {
  return (
    <div className={styles.mainBlock}>
      <h1>Ошибка.</h1>
      <div>Попробуйте зайти позже</div>
    </div>
  );
};
