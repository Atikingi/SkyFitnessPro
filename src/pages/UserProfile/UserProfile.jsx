import React from 'react';
import CentralBlock from './CentralBlock/CentralBlock';
import MyCoursesBlock from './MyCoursesBlock/MyCoursesBlock';
import styles from './style.module.css';
import Header from '../../components/Header/Header';

const UserProfile = () => {
  return (
    <>
      <div className={styles.userProfile}>
        <Header logoColor="#000000" />
        <CentralBlock />
        <MyCoursesBlock />
      </div>
    </>
  );
};

export default UserProfile;
