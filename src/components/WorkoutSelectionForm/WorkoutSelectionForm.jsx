import React from 'react';
import styles from './style.module.css';
import WorkoutItem from './WorkoutItem/WorkoutItem';
import { Link } from 'react-router-dom';

const WorkoutSelectionForm = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Выберите тренировку</h2>
      <ul className={styles.list}>
        <Link to={'progress'}>
          <WorkoutItem title="Утренняя практика" subtitle="Йога на каждый день / 1 день" />
        </Link>
      </ul>
    </div>
  );
};

export default WorkoutSelectionForm;
