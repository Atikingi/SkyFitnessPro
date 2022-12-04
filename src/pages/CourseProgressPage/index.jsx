import React from 'react';
import CourseVideo from './CourseVideo/CourseVideo';
import CourseExercises from './CourseExercises/CourseExercises';
import CourseProgress from './CourseProgress/CourseProgress';
import styles from './style.module.css';
import CourseHeader from './CourseHeader/CourseHeader';

const CourseProgressPage = () => {
  return (
    <div className={styles.wrapper}>
      <CourseHeader />
      <section>
        <h1 className={styles.title}>Йога</h1>
        <h3 className={styles.subtitle}>Красота и здоровье / Йога на каждый день / 2 день</h3>
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
