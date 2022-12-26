import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from './Avatar/Avatar';
import Name from './Name/Name';
import LogoutButton from './LogoutButton/LogoutButton';
import styles from './style.module.css';

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
