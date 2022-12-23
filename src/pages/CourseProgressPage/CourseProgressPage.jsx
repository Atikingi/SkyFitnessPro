import React from 'react';
import CourseVideo from './CourseVideo/CourseVideo';
import CourseExercises from './CourseExercises/CourseExercises';
import CourseProgress from './CourseProgress/CourseProgress';
import styles from './style.module.css';
import Header from '../../components/Header/Header';
import { useAllUserCourseQuery } from '../../services/fitnessApi';

const CourseProgressPage = () => {
  const { data } = useAllUserCourseQuery();
  console.log(data);
  return (
    <div className={styles.wrapper}>
      <Header logoColor="#000000" />
      <section>
        <h1 className={styles.title}>Йога</h1>
        <h3 className={styles.subtitle}>описание</h3>
        <CourseVideo />
      </section>
      <section className={styles.progressContentWrapper}>
        <CourseExercises />
        <CourseProgress />
      </section>
    </div>
  );
};

export default CourseProgressPage;
