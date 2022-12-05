import React from 'react';
import styles from './style.module.css';

export const CoverCourseDescription = () => {
  const name = 'Название курса';
  return (
    <div className={styles.skillCard}>
      <h1 className={styles.name}>{name}</h1>
    </div>
  );
};
