import React from 'react';
import styles from './style.module.css';
import WorkoutItem from './WorkoutItem/WorkoutItem';
import { Link } from 'react-router-dom';
import CloseModalIcon from '../Icons/CloseModalIcon';

const WorkoutSelectionForm = ({ closeModal, workouts }) => {
  console.log(workouts);

  return (
    <div className={styles.container}>
      <div className={styles.closeButton} onClick={closeModal}>
        <CloseModalIcon />
      </div>
      <h2 className={styles.title}>Выберите тренировку</h2>
      <ul className={styles.list}>
        {workouts.map(({ _id, title, subtitle }) => (
          <Link className={styles.link} key={_id} to={`/course/${_id}/progress/`}>
            <WorkoutItem title={title} subtitle={subtitle} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutSelectionForm;
