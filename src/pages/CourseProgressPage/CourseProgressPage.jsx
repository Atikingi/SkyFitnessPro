import React from 'react';
import CourseVideo from './CourseVideo/CourseVideo';
import CourseExercises from './CourseExercises/CourseExercises';
import CourseProgress from './CourseProgress/CourseProgress';
import styles from './style.module.css';
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCourseName } from '../../store/selectors/coursesSelector';
import { useFetchExercisesQuery } from '../../services/fitnessApi';

const CourseProgressPage = () => {
  const { id } = useParams();

  const courseName = useSelector(getCourseName);

  const { data, isSuccess } = useFetchExercisesQuery(id);
  console.log(data);

  return (
    <div className={styles.wrapper}>
      <Header logoColor="#000000" />
      <section>
        <h1 className={styles.title}>{courseName}</h1>
        <h3 className={styles.subtitle}>{data?.workoutName}</h3>
        <CourseVideo />
      </section>
      {isSuccess && (
        <section className={styles.progressContentWrapper}>
          <CourseExercises exercises={data?.exercises} />
          <CourseProgress exercises={data?.exercises} />
        </section>
      )}
    </div>
  );
};

export default CourseProgressPage;
