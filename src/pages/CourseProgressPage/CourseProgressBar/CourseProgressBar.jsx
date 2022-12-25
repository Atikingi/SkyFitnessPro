import React from 'react';
import styles from './style.module.css';

const CourseProgressBar = ({ colorNumber }) => {
  const barColor = ['blue', 'orange', 'purple', 'green', 'yellow', 'red'];

  return (
    <div className={`${styles.progressBar} ${styles[barColor[colorNumber]]}`}>
      <span className={styles.percents}>45%</span>
    </div>
  );
};

export default CourseProgressBar;
