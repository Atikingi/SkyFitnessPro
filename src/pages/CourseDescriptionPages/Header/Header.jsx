import React from 'react';
import styles from './style.module.css';
import Logo from '../../../components/Logo/Logo';

export const Header = () => {
  return (
    <div className={styles.logo}>
      <Logo />
    </div>
  );
};
