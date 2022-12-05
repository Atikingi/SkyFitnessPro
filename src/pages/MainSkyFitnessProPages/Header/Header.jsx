import React from 'react';
import styles from './style.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/img/logo/logo-dark-theme.svg" alt="SkyPro" />
      <button className={styles.button}>Войти</button>
    </header>
  );
};
