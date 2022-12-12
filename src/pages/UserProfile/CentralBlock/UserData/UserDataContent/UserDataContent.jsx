import React from 'react';
import styles from './style.module.css';
import { useSelector } from 'react-redux';
import { getName, getPassword } from '../../../../../store/selectors/authSelector';
const UserDataContent = () => {
  const name = useSelector(getName);
  const password = useSelector(getPassword);

  return (
    <>
      <div className={`${styles.userDataContent} ${styles.userDataLogin}`}>Логин: {name}</div>
      <div className={`${styles.userDataContent} ${styles.userDataPassword}`}>
        Пароль: {password}
      </div>
    </>
  );
};

export default UserDataContent;
