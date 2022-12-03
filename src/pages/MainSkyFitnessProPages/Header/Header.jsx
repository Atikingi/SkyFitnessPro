import React from 'react';
import styles from './style.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <p>Logo</p>
      <button>Войти</button>
    </header>
  );
};
