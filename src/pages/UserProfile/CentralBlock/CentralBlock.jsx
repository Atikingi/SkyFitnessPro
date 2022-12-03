import React from 'react';
import HeadingMyProfile from './Heading/HeadingMyProfile';
import UserData from './UserData/UserData';
import Buttons from './Buttons/Buttons';
import styles from './styles.module.css';
const CentralBlock = () => {
  return (
    <div className={styles.centralBlock}>
      <HeadingMyProfile />
      <UserData />
      <Buttons />
    </div>
  );
};

export default CentralBlock;
