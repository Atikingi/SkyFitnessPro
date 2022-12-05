import React from 'react';
import styles from './style.module.css';

const CourseExercises = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Упражнения</h4>
      <ul className={styles.list}>
        <li>Наклон вперед (10 повторений)</li>
        <li>Наклон назад (10 повторений)</li>
        <li>Поднятие ног, согнутых в коленях (5 повторений)</li>
      </ul>
      {/*UI BUTTON*/}
    </div>
  );
};

export default CourseExercises;
