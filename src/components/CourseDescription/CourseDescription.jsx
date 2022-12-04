import React from 'react';
import { Header } from '../../pages/CourseDescriptionPages/Header/Header';
import { СoverCourseDescription } from '../../pages/CourseDescriptionPages/CoverCourseDescription/CoverCourseDescription';
import { Wishes } from '../../pages/CourseDescriptionPages/Wishes/Wishes';
import { CourseDirections } from '../../pages/CourseDescriptionPages/CourseDirections/CourseDirections';
import { Description } from '../../pages/CourseDescriptionPages/Description/Description';
import { SignUpForACourse } from '../../pages/CourseDescriptionPages/SignUpForACourse/SignUpForACourse';
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