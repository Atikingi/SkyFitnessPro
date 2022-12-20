import styles from './style.module.css';
import React from 'react';

const SuccessfullyAdding = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Курс добавлен в ваш личный кабинет!</h1>
    </div>
  );
};

export default SuccessfullyAdding;
