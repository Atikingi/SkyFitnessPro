import React from 'react';
import styles from './style.module.css';

export const WishesItem = ({ index, wishesText }) => {
  return (
    <div className={styles.wishesNumber}>
      <h1 className={styles.index}>{index}</h1>
      <p className={styles.wishesText}>{wishesText}</p>
    </div>
  );
};
