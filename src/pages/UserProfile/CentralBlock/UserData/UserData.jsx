import React from 'react';
import styles from './styles.module.css';
import UserDataContent from './UserDataContent/UserDataContent';
const UserData = () => {
  return (
    <div className={styles.user_data_container}>
      <UserDataContent />
    </div>
  );
};

export default UserData;
