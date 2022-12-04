import React from 'react';
import styles from './style.module.css';
const UserDataContent = () => {
  return (
    <>
      <div className={`${styles.userDataContent} ${styles.userDataLogin}`}>Логин: Sergey</div>
      <div className={`${styles.userDataContent} ${styles.userDataPassword}`}>Пароль: 43646433</div>
    </>
  );
};

export default UserDataContent;
