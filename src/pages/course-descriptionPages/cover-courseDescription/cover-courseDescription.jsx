import React from 'react';
import styles from './style.module.css';

export const СoverCourseDescription = () => {
  const name = 'Название курса';
  return (
    <div className={styles.skill__card}>
      <h1 className={styles.name}>{name}</h1>
    </div>
  );
};
