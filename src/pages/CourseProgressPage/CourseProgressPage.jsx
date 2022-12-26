import CourseVideo from './CourseVideo/CourseVideo';
import CourseExercises from './CourseExercises/CourseExercises';
import CourseProgress from './CourseProgress/CourseProgress';
import Header from '../../components/Header/Header';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseName } from '../../store/selectors/coursesSelector';
import { useFetchExercisesQuery } from '../../services/fitnessApi';
import { pushArr } from '../../store/slices/progressSlice';
import styles from './style.module.css';
import { motion } from 'framer-motion';
const CourseProgressPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const courseName = useSelector(getCourseName);

  const { data, isSuccess } = useFetchExercisesQuery(id);

  useEffect(() => {
    dispatch(pushArr({ percent: [] }));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className={styles.wrapper}
    >
      <Header logoColor="#000000" />
      <section>
        <h1 className={styles.title}>{courseName}</h1>
        <h3 className={styles.subtitle}>{data?.workoutName}</h3>
        <CourseVideo workoutVideo={data?.workoutVideo} />
      </section>
      {isSuccess && (
        <section className={styles.progressContentWrapper}>
          <CourseExercises exercises={data?.exercises} workoutId={id} />
          <CourseProgress exercises={data?.exercises} />
        </section>
      )}
    </motion.div>
  );
};

export default CourseProgressPage;
