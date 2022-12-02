import React from 'react';
import styles from './style.module.css';

export const ProfCard = () => {
  const nameKurs = 'название курса';
  console.log(styles);
  return (
    <div className={styles.main}>
      <div className={styles.block}>
        <p className={styles.name}>{nameKurs}</p>
      </div>
      <div className={styles.block}>
        <p className={styles.name}>{nameKurs}</p>
      </div>
      <div className={styles.block}>
        <p className={styles.name}>{nameKurs}</p>
      </div>
      <div className={styles.block}>
        <p className={styles.name}>{nameKurs}</p>
      </div>
      <div className={styles.block}>
        <p className={styles.name}>{nameKurs}</p>
      </div>
    </div>
  );
};
