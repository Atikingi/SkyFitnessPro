import { ProfCard } from '../../../../components/ProfCard/ProfCard';
import { ButtonGreen } from '../../../../components/ButtonGreen/ButtonGreen';
import UIModal from '../../../../components/UI/UIModal/UiModal';
import Loader from '../../../../components/Loader/Loader';
import WorkoutSelectionForm from '../../../../components/WorkoutSelectionForm/WorkoutSelectionForm';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  useFetchCoursesQuery,
  useFetchUserCoursesQuery,
  useLazyFetchWorkoutsQuery
} from '../../../../services/fitnessApi';
import { getCourseName } from '../../../../store/slices/coursesSlice';
import { getUserId } from '../../../../store/selectors/authSelector';
import themesGenerator from '../../../../lib/themesGenerator';
import { cardsColors } from '../../../../constants/colorsArrays';
import styles from './style.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { backdrop } from '../../../../constants/animationSettings';

const MyCoursesContent = () => {
  const userId = useSelector(getUserId);

  const dispatch = useDispatch();

  const { data: userCoursesIds } = useFetchUserCoursesQuery(userId);

  const { data, isSuccess, isLoading } = useFetchCoursesQuery('', {
    selectFromResult: ({ data, isSuccess, isLoading }) => ({
      data: data?.filter((course) => userCoursesIds?.includes(course._id)),
      isSuccess,
      isLoading
    })
  });

  const [trigger, { data: workouts, isSuccess: workoutsSuccess }] = useLazyFetchWorkoutsQuery('');

  let themeArr;

  if (isSuccess) {
    themeArr = themesGenerator(cardsColors, data);
  }

  const [showWorkoutsSelect, setShowWorkoutsSelect] = useState(false);

  const writeDownCourseNameToStoreHandler = (name) => {
    dispatch(getCourseName(name));
  };

  const showWorkoutsSelectHandler = (e) => {
    setShowWorkoutsSelect((prevState) => !prevState);

    trigger(e.target.id);
  };

  return (
    <div className={styles.cardsBlock}>
      {isLoading && <Loader />}
      {isSuccess &&
        data?.map(({ _id, name }, i) => (
          <div
            key={_id}
            className={styles.cardBlock}
            onClick={() => writeDownCourseNameToStoreHandler(name)}
          >
            <ProfCard courseName={name} id={_id} color={themeArr[i]} />
            <ButtonGreen
              id={_id}
              absolute="absolute"
              btnText="Перейти →"
              onClick={showWorkoutsSelectHandler}
            />
          </div>
        ))}
      <AnimatePresence>
        {showWorkoutsSelect && workoutsSuccess && (
          <UIModal>
            <motion.div variants={backdrop} initial="hidden" animate="visible" exit="exit">
              <WorkoutSelectionForm closeModal={showWorkoutsSelectHandler} workouts={workouts} />
            </motion.div>
          </UIModal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MyCoursesContent;
