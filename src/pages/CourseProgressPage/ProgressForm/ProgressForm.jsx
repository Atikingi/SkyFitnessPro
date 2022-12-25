import React from 'react';
import styles from './style.module.css';
import { UIButton } from '../../../components/UI/UIButton/UIButton';

const ProgressForm = ({ onSubmit, exercises }) => {
  return (
    <form className={styles.progressForm} onSubmit={onSubmit}>
      <h2 className={styles.title}>Мой прогресс</h2>
      {exercises.map((exercise) => (
        <div key={exercise._id}>
          <p
            className={styles.subtitle}
          >{`Сколько раз вы выполнили упражнение: ${exercise.name}`}</p>
          <input className={styles.progressValue} type="number" placeholder="Введите значение" />
        </div>
      ))}
      <UIButton text="Отправить" />
    </form>
  );
};

export default ProgressForm;
