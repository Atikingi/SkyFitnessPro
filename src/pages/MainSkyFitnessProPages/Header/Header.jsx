import React from 'react';
import styles from './style.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      {/* {Logo} */}
      <button className={styles.button}>Войти</button>
    </header>
  );
};
