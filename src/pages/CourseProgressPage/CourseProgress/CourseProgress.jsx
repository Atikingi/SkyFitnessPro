import React from 'react';
import CourseProgressItem from '../CourseProgressItem/CourseProgressItem';
import styles from './style.module.css';

const CourseProgress = ({ exercises }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Мой прогресс по тренировке 2:</h3>
      <div className={styles.progressContainer}>
        {exercises.map(({ _id, name }, i) => (
          <CourseProgressItem key={_id} title={name} colorNumber={i} />
        ))}
      </div>
    </div>
  );
};

export default CourseProgress;
