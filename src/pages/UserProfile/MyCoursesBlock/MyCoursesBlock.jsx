import React from 'react';
import styles from './style.module.css';
import HeadingMyCourses from './HeadingMyCourses/HeadingMyCourses';
import MyCoursesContent from './MyCoursesContent/MyCoursesContent';
const MyCoursesBlock = () => {
  return (
    <div className={styles.my_courses_block}>
      <HeadingMyCourses />
      <MyCoursesContent />
    </div>
  );
};

export default MyCoursesBlock;
