import React from 'react';
import CourseProgressBar from '../CourseProgressBar/CourseProgressBar';
import styles from './style.module.css';

const CourseProgressItem = ({ title, colorNumber }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <CourseProgressBar colorNumber={colorNumber} />
    </div>
  );
};

export default CourseProgressItem;
