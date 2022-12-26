import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArr } from '../../../store/selectors/progressSelector';
import { useAddWorkoutDoneStatusMutation } from '../../../services/fitnessApi';
import { pushArr } from '../../../store/slices/progressSlice';
import styles from './style.module.css';

const ProgressFormSuccess = ({ id }) => {
  const dispatch = useDispatch();

  const [trigger] = useAddWorkoutDoneStatusMutation();

  const arr = useSelector(getArr);

  useEffect(() => {
    if (arr.every((elem) => elem >= 100) && arr.length) {
      trigger(id);
      dispatch(pushArr({ percent: [] }));
    }
  }, [arr, id]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Ваш прогресс засчитан!</h1>
    </div>
  );
};

export default ProgressFormSuccess;
