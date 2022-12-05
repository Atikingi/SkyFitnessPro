import React from 'react';
import styles from './style.module.css';
import { UIButton } from '../../../components/UI/UIButton/UIButton';

const ProgressForm = ({ onSubmit }) => {
  return (
    <form className={styles.progressForm} onSubmit={onSubmit}>
      <h2 className={styles.title}>Мой прогресс</h2>
      <p className={styles.subtitle}>Сколько раз вы сделали наклоны вперед?</p>
      <input className={styles.progressValue} type="number" placeholder="Введите значение" />
      <p className={styles.subtitle}>Сколько раз вы сделали наклоны назад?</p>
      <input className={styles.progressValue} type="number" placeholder="Введите значение" />
      <p className={styles.subtitle}>Сколько раз вы сделали поднятие ног, согнутых в коленях?</p>
      <input className={styles.progressValue} type="number" placeholder="Введите значение" />
      <UIButton text="Отправить" />
    </form>
  );
};

export default ProgressForm;
