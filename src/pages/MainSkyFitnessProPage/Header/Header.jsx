import React from 'react';
import styles from './style.module.css';
import Logo from '../../../components/Logo/Logo';
export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo color="#ffffff" />
      <button className={styles.button}>Войти</button>
    </header>
  );
};
