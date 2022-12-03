import React from 'react';
import styles from './style.module.css';
const UserDataContent = () => {
  return (
    <>
      <div className={[styles.user_data_content, styles.user_data_login].join(' ')}>
        Логин: Sergey
      </div>
      <div className={[styles.user_data_content, styles.user_data_password].join(' ')}>
        Пароль: 43646433
      </div>
    </>
  );
};

export default UserDataContent;
