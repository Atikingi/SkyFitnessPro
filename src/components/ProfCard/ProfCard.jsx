import React from 'react';
import styles from './style.module.css';

export const ProfCard = () => {
  const courseName = 'название курса';
  return (
    <div className={styles.main}>
      <div className={styles.block}>
        <p className={styles.name}>{courseName}</p>
      </div>
      <div className={styles.block}>
        <p className={styles.name}>{courseName}</p>
      </div>
      <div className={styles.block}>
        <p className={styles.name}>{courseName}</p>
      </div>
      <div className={styles.block}>
        <p className={styles.name}>{courseName}</p>
      </div>
      <div className={styles.block}>
        <p className={styles.name}>{courseName}</p>
      </div>
    </div>
  );
};
