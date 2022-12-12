import React from 'react';
import Avatar from './Avatar/Avatar';
import Name from './Name/Name';
import styles from './style.module.css';
import LogoutButton from './LogoutButton/LogoutButton';

const LoginAvatarBlock = ({ lightColor }) => {
  return (
    <div className={styles.loginAvatarBlock}>
      <Avatar />
      <Name lightColor={lightColor} />
      <LogoutButton lightColor={lightColor} />
    </div>
  );
};

export default LoginAvatarBlock;
