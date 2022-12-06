import React from 'react';
import styles from './style.module.css';

export const ProfCard = ({ courseName }) => {
  return (
    <div className={styles.block}>
      <p className={styles.name}>{courseName}</p>
    </div>
  );
};
