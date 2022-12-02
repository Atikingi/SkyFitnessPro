import React from 'react';
import styles from './style.module.css';

export const Wishes = () => {
  const index = '1';
  const wishesText = 'Давно хотели попробовать йогу, но не решались начать.';
  return (
    <div className={styles.wishes__block}>
      <div className={styles.wishes__number}>
        <h1 className={styles.index}>{index}</h1>
        <p className={styles.wishes__text}>{wishesText}</p>
      </div>

      <div className={styles.wishes__number}>
        <h1 className={styles.index}>{index}</h1>
        <p className={styles.wishes__text}>{wishesText}</p>
      </div>

      <div className={styles.wishes__number}>
        <h1 className={styles.index}>{index}</h1>
        <p className={styles.wishes__text}>{wishesText}</p>
      </div>
    </div>
  );
};
