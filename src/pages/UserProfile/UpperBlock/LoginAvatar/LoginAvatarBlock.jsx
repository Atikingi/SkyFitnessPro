import React from 'react';
import Avatar from './Avatar/Avatar';
import Name from './Name/Name';
import Select from './Select/Select';
import styles from './style.module.css';

const LoginAvatarBlock = () => {
  return (
    <div className={styles.login_avatar_block}>
      <Avatar />
      <Name />
      <Select />
    </div>
  );
};

export default LoginAvatarBlock;
