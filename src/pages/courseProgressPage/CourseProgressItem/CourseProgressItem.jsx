import React from 'react';
import CourseProgressBar from '../CourseProgressBar/CourseProgressBar';
import styles from './style.module.css';

const CourseProgressItem = ({ exerciseTitle, colorNumber }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{exerciseTitle}</p>
      <CourseProgressBar colorNumber={colorNumber} />
    </div>
  );
};

export default CourseProgressItem;
