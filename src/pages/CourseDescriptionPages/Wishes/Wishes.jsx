import React from 'react';
import styles from './style.module.css';
import { WishesItem } from './WishesItem';
export const Wishes = ({ terms }) => {
  return (
    <div className={styles.wishesBlock}>
      {terms.map((el, index) => (
        <WishesItem key={index} index={index + 1} wishesText={el} />
      ))}
    </div>
  );
};
