import React from 'react';
import { CoverCourseDescription } from './CoverCourseDescription/CoverCourseDescription';
import { Wishes } from './Wishes/Wishes';
import { CourseDirections } from './CourseDirections/CourseDirections';
import { Description } from './Description/Description';
import { SignUpForACourse } from './SignUpForACourse/SignUpForACourse';
import styles from './style.module.css';
import Header from '../../components/Header/Header';
export const CourseDescription = () => {
  return (
    <div className={styles.main}>
      <Header logoColor="#000000" />
      <CoverCourseDescription />
      <h1 className={styles.title}>Подойдет для вас, если:</h1>
      <Wishes />
      <h2>Направления:</h2>
      <CourseDirections />
      <Description />
      <SignUpForACourse />
    </div>
  );
};
