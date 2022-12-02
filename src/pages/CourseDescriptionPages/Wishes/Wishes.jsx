import React from 'react';
import styles from './style.module.css';

export const Wishes = () => {
  const index = '1';
  const wishesText = 'Давно хотели попробовать йогу, но не решались начать.';
  return (
    <div className={styles.wishesBlock}>
      <div className={styles.wishesNumber}>
        <h1 className={styles.index}>{index}</h1>
        <p className={styles.wishesText}>{wishesText}</p>
      </div>

      <div className={styles.wishesNumber}>
        <h2 className={styles.index}>{index}</h2>
        <p className={styles.wishesText}>{wishesText}</p>
      </div>

      <div className={styles.wishesNumber}>
        <h3 className={styles.index}>{index}</h3>
        <p className={styles.wishesText}>{wishesText}</p>
      </div>
    </div>
  );
};
