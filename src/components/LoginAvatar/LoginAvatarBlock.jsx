import React from 'react';
import Avatar from './Avatar/Avatar';
import Name from './Name/Name';
import styles from './style.module.css';
import LogoutButton from './LogoutButton/LogoutButton';
import { Link } from 'react-router-dom';

const LoginAvatarBlock = ({ lightColor }) => {
  return (
    <div className={styles.loginAvatarBlock}>
      <Link to="/profile" className={styles.link}>
        <Avatar />
        <Name lightColor={lightColor} />
      </Link>
      <LogoutButton lightColor={lightColor} />
    </div>
  );
};

export default LoginAvatarBlock;
