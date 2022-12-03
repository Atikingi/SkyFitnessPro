import React from 'react';
import Logo from '../../../components/Logo/Logo';
import LoginAvatarBlock from './LoginAvatar/LoginAvatarBlock';
import styles from './styles.module.css';
const UpperBlock = () => {
  return (
    <div className={styles.upper_block}>
      <Logo />
      <LoginAvatarBlock />
    </div>
  );
};

export default UpperBlock;
