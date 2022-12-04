import React from 'react';
import UpperBlock from './UpperBlock/UpperBlock';
import CentralBlock from './CentralBlock/CentralBlock';
import MyCoursesBlock from './MyCoursesBlock/MyCoursesBlock';
import styles from './style.module.css';

const UserProfile = () => {
  return (
    <>
      <div className={styles.userProfile}>
        <UpperBlock />
        <CentralBlock />
        <MyCoursesBlock />
      </div>
    </>
  );
};

export default UserProfile;
