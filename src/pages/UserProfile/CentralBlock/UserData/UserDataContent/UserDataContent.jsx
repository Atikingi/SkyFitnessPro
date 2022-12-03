import React from 'react';
import styles from './style.module.css';
const UserDataContent = () => {
  return (
    <>
      <div className={[styles.userDataContent, styles.userDataLogin].join(' ')}>Логин: Sergey</div>
      <div className={[styles.userDataContent, styles.userDataPassword].join(' ')}>
        Пароль: 43646433
      </div>
    </>
  );
};

export default UserDataContent;
