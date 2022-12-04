import React from 'react';
import Logo from '../../../components/Logo/Logo';
import LoginAvatarBlock from '../../../components/LoginAvatar/LoginAvatarBlock';
import styles from './styles.module.css';

const UpperBlock = () => {
  return (
    <div className={styles.upperBlock}>
      <Logo />
      <LoginAvatarBlock />
    </div>
  );
};

export default UpperBlock;
