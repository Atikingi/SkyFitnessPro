import { UIButton } from '../../../components/UI/UIButton/UIButton';
import ProgressFormSuccess from '../ProgressFormSuccess/ProgressFormSuccess';
import UIModal from '../../../components/UI/UIModal/UiModal';
import ProgressForm from '../ProgressForm/ProgressForm';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pushArr, updateProgress, writeProgress } from '../../../store/slices/progressSlice';
import { checkAllProgress } from '../../../store/selectors/progressSelector';
import styles from './style.module.css';

const CourseExercises = ({ exercises, workoutId }) => {
  const [showProgressForm, setShowProgressForm] = useState(false);
  const [showProgressFormSuccess, setShowProgressFormSuccess] = useState(false);

  const dispatch = useDispatch();

  const exercisesProgress = useSelector(checkAllProgress);

  useEffect(() => {
    const arr2 = [];
    for (let percent in exercisesProgress) {
      const currentPercent = exercisesProgress[percent];

      if (currentPercent) {
        arr2.push(currentPercent);
      }
    }
    dispatch(pushArr({ percent: arr2 }));
  }, [showProgressFormSuccess]);

  const showProgressFormHandle = () => {
    setShowProgressForm((prevState) => !prevState);
  };

  useEffect(() => {
    exercises.map((exercise) => {
      dispatch(
        writeProgress({
          name: exercise._id,
          progress: 0,
          count: exercise['repeat-count']
        })
      );
    });
  }, []);

  const submitFormHandle = (e) => {
    e.preventDefault();
    const { currentTarget } = e;

    const inputs = currentTarget.elements;
    const inputsArray = [];

    if (inputs) {
      for (let i = 0; i < inputs.length - 1; i++) {
        if (inputs[i].type === 'number') {
          inputsArray.push(inputs[i]);
        }
      }
    }

    inputsArray.map(({ name, value }) => {
      dispatch(
        updateProgress({
          name: name,
          progress: value
        })
      );
    });

    setShowProgressForm(false);
    setShowProgressFormSuccess(true);

    setTimeout(() => {
      setShowProgressFormSuccess(false);
    }, 1500);
  };

  const modal = showProgressForm ? (
    <UIModal>
      <ProgressForm
        exercises={exercises}
        onSubmit={submitFormHandle}
        closeModal={showProgressFormHandle}
      />
    </UIModal>
  ) : null;

  const successModal = showProgressFormSuccess ? (
    <UIModal>
      <ProgressFormSuccess id={workoutId} />
    </UIModal>
  ) : null;

  return (
    <div className={styles.container} onSubmit={submitFormHandle}>
      <h4 className={styles.title}>Упражнения</h4>
      <ul className={styles.list}>
        {exercises.map((exercise) => (
          <li key={exercise._id}>{`${exercise.name} (${exercise['repeat-count']} повторений)`}</li>
        ))}
      </ul>
      <UIButton onClick={showProgressFormHandle}>Заполнить свой прогресс</UIButton>
      {modal}
      {successModal}
    </div>
  );
};

export default CourseExercises;
