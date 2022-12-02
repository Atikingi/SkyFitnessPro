import React from 'react';
import { Header } from '../../pages/course-descriptionPages/header/header';
import { СoverCourseDescription } from '../../pages/course-descriptionPages/cover-courseDescription/cover-courseDescription';
import { Wishes } from '../../pages/course-descriptionPages/wishes/wishes';
import { CourseDirections } from '../../pages/course-descriptionPages/course-directions/course-directions';
import { Description } from '../../pages/course-descriptionPages/description/description';
import { SignUpForACourse } from '../../pages/course-descriptionPages/sign-up-for-a-course/sign-up-for-a-course';
import styles from './style.module.css';
export const CourseDescription = () => {
  return (
    <div className={styles.main}>
      <Header />
      <СoverCourseDescription />
      <h1>Подойдет для вас, если:</h1>
      <Wishes />
      <h2>Направления:</h2>
      <CourseDirections />
      <Description />
      <SignUpForACourse />
    </div>
  );
};
