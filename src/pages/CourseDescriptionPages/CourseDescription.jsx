import React from 'react';
import { CoverCourseDescription } from './CoverCourseDescription/CoverCourseDescription';
import { Wishes } from './Wishes/Wishes';
import { CourseDirections } from './CourseDirections/CourseDirections';
import { Description } from './Description/Description';
import { SignUpForACourse } from './SignUpForACourse/SignUpForACourse';
import styles from './style.module.css';
import Header from '../../components/Header/Header';
import { useFetchCoursePageQuery } from '../../services/fitnessApi';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { Error } from '../../components/Error/Error';

export const CourseDescription = () => {
  const { id } = useParams();

  const { data, isSuccess, isLoading, isError } = useFetchCoursePageQuery(id);

  return (
    <div className={styles.main}>
      {isLoading && (
        <div className={styles.logoCentered}>
          <Loader />
        </div>
      )}
      {isError && <Error />}
      {isSuccess && (
        <>
          <Header logoColor="#000000" />
          <CoverCourseDescription name={data.name} />
          <h1 className={styles.title}>Подойдет для вас, если:</h1>
          <Wishes terms={data.terms} />
          <h2>Направления:</h2>
          <CourseDirections directions={data.directions} />
          <Description description={data.description} />
          <SignUpForACourse />
        </>
      )}
    </div>
  );
};
