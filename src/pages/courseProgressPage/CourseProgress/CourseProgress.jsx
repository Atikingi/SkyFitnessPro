import React from 'react';
import CourseProgressItem from '../CourseProgressItem/CourseProgressItem';
import styles from './style.module.css';

const CourseProgress = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Мой прогресс по тренировке 2:</h3>
      <div className={styles.progressContainer}>
        <CourseProgressItem exerciseTitle="Наклоны вперед" colorNumber="0" />
        <CourseProgressItem exerciseTitle="Наклоны назад" colorNumber="1" />
        <CourseProgressItem exerciseTitle="Поднятие ног, согнутых в коленях" colorNumber="2" />
      </div>
    </div>
  );
};

export default CourseProgress;
